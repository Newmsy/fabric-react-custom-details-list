"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DraggableZone_styles_1 = require("./DraggableZone.styles");
var Utilities_1 = require("../../Utilities");
var eventMapping = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend',
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup',
    },
};
var DraggableZone = /** @class */ (function (_super) {
    tslib_1.__extends(DraggableZone, _super);
    function DraggableZone(props) {
        var _this = _super.call(this, props) || this;
        _this._currentEventType = eventMapping.mouse;
        _this._events = [];
        _this._onMouseDown = function (event) {
            var onMouseDown = React.Children.only(_this.props.children).props.onMouseDown;
            if (onMouseDown) {
                onMouseDown(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStart(event);
        };
        _this._onMouseUp = function (event) {
            var onMouseUp = React.Children.only(_this.props.children).props.onMouseUp;
            if (onMouseUp) {
                onMouseUp(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStop(event);
        };
        _this._onTouchStart = function (event) {
            var onTouchStart = React.Children.only(_this.props.children).props.onTouchStart;
            if (onTouchStart) {
                onTouchStart(event);
            }
            _this._currentEventType = eventMapping.touch;
            return _this._onDragStart(event);
        };
        _this._onTouchEnd = function (event) {
            var onTouchEnd = React.Children.only(_this.props.children).props.onTouchEnd;
            if (onTouchEnd) {
                onTouchEnd(event);
            }
            _this._currentEventType = eventMapping.touch;
            _this._onDragStop(event);
        };
        _this._onDragStart = function (event) {
            // Only handle left click for dragging
            if (typeof event.button === 'number' && event.button !== 0) {
                return false;
            }
            // If the target doesn't match the handleSelector OR
            // if the target does match the preventDragSelector, bail out
            if ((_this.props.handleSelector && !_this._matchesSelector(event.target, _this.props.handleSelector)) ||
                (_this.props.preventDragSelector &&
                    _this._matchesSelector(event.target, _this.props.preventDragSelector))) {
                return;
            }
            // Remember the touch identifier if this is a touch event so we can
            // distinguish between individual touches in multitouch scenarios
            // by remembering which touch point we were given
            _this._touchId = _this._getTouchId(event);
            var position = _this._getControlPosition(event);
            if (position === undefined) {
                return;
            }
            var dragData = _this._createDragDataFromPosition(position);
            _this.props.onStart && _this.props.onStart(event, dragData);
            _this.setState({
                isDragging: true,
                lastPosition: position,
            });
            // hook up the appropriate mouse/touch events to the body to ensure
            // smooth dragging
            _this._events = [
                Utilities_1.on(document.body, _this._currentEventType.move, _this._onDrag, true /* use capture phase */),
                Utilities_1.on(document.body, _this._currentEventType.stop, _this._onDragStop, true /* use capture phase */),
            ];
        };
        _this._onDrag = function (event) {
            // Prevent scrolling on mobile devices
            if (event.type === 'touchmove') {
                event.preventDefault();
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            // create the updated drag data from the position data
            var updatedData = _this._createUpdatedDragData(_this._createDragDataFromPosition(position));
            var updatedPosition = updatedData.position;
            _this.props.onDragChange && _this.props.onDragChange(event, updatedData);
            _this.setState({
                position: updatedPosition,
                lastPosition: position,
            });
        };
        _this._onDragStop = function (event) {
            if (!_this.state.isDragging) {
                return;
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            var baseDragData = _this._createDragDataFromPosition(position);
            // Set dragging to false and reset the lastPosition
            _this.setState({
                isDragging: false,
                lastPosition: undefined,
            });
            _this.props.onStop && _this.props.onStop(event, baseDragData);
            if (_this.props.position) {
                _this.setState({
                    position: _this.props.position,
                });
            }
            // Remove event handlers
            _this._events.forEach(function (dispose) { return dispose(); });
        };
        _this.state = {
            isDragging: false,
            position: _this.props.position || { x: 0, y: 0 },
            lastPosition: undefined,
        };
        return _this;
    }
    DraggableZone.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.position && (!prevProps.position || this.props.position !== prevProps.position)) {
            this.setState({ position: this.props.position });
        }
    };
    DraggableZone.prototype.componentWillUnmount = function () {
        this._events.forEach(function (dispose) { return dispose(); });
    };
    DraggableZone.prototype.render = function () {
        var child = React.Children.only(this.props.children);
        var props = child.props;
        var position = this.props.position;
        var _a = this.state, statePosition = _a.position, isDragging = _a.isDragging;
        var x = statePosition.x;
        var y = statePosition.y;
        if (position && !isDragging) {
            x = position.x;
            y = position.y;
        }
        return React.cloneElement(child, {
            style: tslib_1.__assign(tslib_1.__assign({}, props.style), { transform: "translate(" + x + "px, " + y + "px)" }),
            className: DraggableZone_styles_1.getClassNames(props.className, this.state.isDragging).root,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd,
        });
    };
    /**
     * Get the control position based off the event that fired
     * @param event - The event to get offsets from
     */
    DraggableZone.prototype._getControlPosition = function (event) {
        var touchObj = this._getActiveTouch(event);
        // did we get the right touch?
        if (this._touchId !== undefined && !touchObj) {
            return undefined;
        }
        var eventToGetOffset = touchObj || event;
        return {
            x: eventToGetOffset.clientX,
            y: eventToGetOffset.clientY,
        };
    };
    /**
     * Get the active touch point that we have saved from the event's TouchList
     * @param event - The event used to get the TouchList for the active touch point
     */
    DraggableZone.prototype._getActiveTouch = function (event) {
        return ((event.targetTouches && this._findTouchInTouchList(event.targetTouches)) ||
            (event.changedTouches && this._findTouchInTouchList(event.changedTouches)));
    };
    /**
     * Get the initial touch identifier associated with the given event
     * @param event - The event that contains the TouchList
     */
    DraggableZone.prototype._getTouchId = function (event) {
        var touch = (event.targetTouches && event.targetTouches[0]) || (event.changedTouches && event.changedTouches[0]);
        if (touch) {
            return touch.identifier;
        }
    };
    /**
     * Returns if an element (or any of the element's parents) match the given selector
     */
    DraggableZone.prototype._matchesSelector = function (element, selector) {
        if (!element || element === document.body) {
            return false;
        }
        /* tslint:disable-next-line:no-string-literal */
        var matchesSelectorFn = element.matches || element.webkitMatchesSelector || element.msMatchesSelector /* for IE */;
        if (!matchesSelectorFn) {
            return false;
        }
        return matchesSelectorFn.call(element, selector) || this._matchesSelector(element.parentElement, selector);
    };
    /**
     * Attempts to find the Touch that matches the identifier  we stored in dragStart
     * @param touchList The TouchList to look for the stored identifier from dragStart
     */
    DraggableZone.prototype._findTouchInTouchList = function (touchList) {
        if (this._touchId === undefined) {
            return;
        }
        for (var i = 0; i < touchList.length; i++) {
            if (touchList[i].identifier === this._touchId) {
                return touchList[i];
            }
        }
        return undefined;
    };
    /**
     * Create DragData based off of the last known position and the new position passed in
     * @param position The new position as part of the drag
     */
    DraggableZone.prototype._createDragDataFromPosition = function (position) {
        var lastPosition = this.state.lastPosition;
        // If we have no lastPosition, use the given position
        // for last position
        if (lastPosition === undefined) {
            return {
                delta: { x: 0, y: 0 },
                lastPosition: position,
                position: position,
            };
        }
        return {
            delta: {
                x: position.x - lastPosition.x,
                y: position.y - lastPosition.y,
            },
            lastPosition: lastPosition,
            position: position,
        };
    };
    /**
     * Creates an updated DragData based off the current position and given baseDragData
     * @param baseDragData The base DragData (from _createDragDataFromPosition) used to calculate the updated positions
     */
    DraggableZone.prototype._createUpdatedDragData = function (baseDragData) {
        var position = this.state.position;
        return {
            position: {
                x: position.x + baseDragData.delta.x,
                y: position.y + baseDragData.delta.y,
            },
            delta: baseDragData.delta,
            lastPosition: position,
        };
    };
    return DraggableZone;
}(React.Component));
exports.DraggableZone = DraggableZone;
//# sourceMappingURL=DraggableZone.js.map