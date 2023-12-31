define(["require", "exports", "tslib", "react", "../../common/DirectionalHint", "../../Utilities", "../../utilities/positioning", "../../Popup", "../../Utilities", "../../Styling"], function (require, exports, tslib_1, React, DirectionalHint_1, Utilities_1, positioning_1, Popup_1, Utilities_2, Styling_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ANIMATIONS = (_a = {},
        _a[positioning_1.RectangleEdge.top] = Styling_1.AnimationClassNames.slideUpIn10,
        _a[positioning_1.RectangleEdge.bottom] = Styling_1.AnimationClassNames.slideDownIn10,
        _a[positioning_1.RectangleEdge.left] = Styling_1.AnimationClassNames.slideLeftIn10,
        _a[positioning_1.RectangleEdge.right] = Styling_1.AnimationClassNames.slideRightIn10,
        _a);
    var getClassNames = Utilities_2.classNamesFunction({
        disableCaching: true,
    });
    var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
    // Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
    // To help ensure that edge will respect the offscreen style opacity
    // filter needs to be added as an additional way to set opacity.
    var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
    // role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
    // This constant array can be used to filter these out of native props spread on callout root and apply them together on
    // calloutMain (the Popup component within the callout)
    var ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];
    var CalloutContentBase = /** @class */ (function (_super) {
        tslib_1.__extends(CalloutContentBase, _super);
        function CalloutContentBase(props) {
            var _this = _super.call(this, props) || this;
            _this._hostElement = React.createRef();
            _this._calloutElement = React.createRef();
            _this._hasListeners = false;
            _this._disposables = [];
            _this.dismiss = function (ev) {
                var onDismiss = _this.props.onDismiss;
                if (onDismiss) {
                    onDismiss(ev);
                }
            };
            _this._dismissOnScroll = function (ev) {
                var preventDismissOnScroll = _this.props.preventDismissOnScroll;
                if (_this.state.positions && !preventDismissOnScroll) {
                    _this._dismissOnClickOrScroll(ev);
                }
            };
            _this._dismissOnResize = function (ev) {
                var preventDismissOnResize = _this.props.preventDismissOnResize;
                if (!preventDismissOnResize) {
                    _this.dismiss(ev);
                }
            };
            _this._dismissOnLostFocus = function (ev) {
                var preventDismissOnLostFocus = _this.props.preventDismissOnLostFocus;
                if (!preventDismissOnLostFocus) {
                    _this._dismissOnClickOrScroll(ev);
                }
            };
            _this._setInitialFocus = function () {
                if (_this.props.setInitialFocus &&
                    !_this._didSetInitialFocus &&
                    _this.state.positions &&
                    _this._calloutElement.current) {
                    _this._didSetInitialFocus = true;
                    _this._async.requestAnimationFrame(function () { return Utilities_1.focusFirstChild(_this._calloutElement.current); }, _this._calloutElement.current);
                }
            };
            _this._onComponentDidMount = function () {
                _this._addListeners();
                if (_this.props.onLayerMounted) {
                    _this.props.onLayerMounted();
                }
                _this._updateAsyncPosition();
                _this._setHeightOffsetEveryFrame();
            };
            _this._mouseDownOnPopup = function () {
                _this._isMouseDownOnPopup = true;
            };
            _this._mouseUpOnPopup = function () {
                _this._isMouseDownOnPopup = false;
            };
            _this._async = new Utilities_1.Async(_this);
            _this._didSetInitialFocus = false;
            _this.state = {
                positions: undefined,
                slideDirectionalClassName: undefined,
                // @TODO it looks like this is not even being used anymore.
                calloutElementRect: undefined,
                heightOffset: 0,
            };
            _this._positionAttempts = 0;
            return _this;
        }
        CalloutContentBase.prototype.componentDidUpdate = function () {
            if (!this.props.hidden) {
                this._setInitialFocus();
                if (!this._hasListeners) {
                    this._addListeners();
                }
                this._updateAsyncPosition();
            }
            else {
                if (this._hasListeners) {
                    this._removeListeners();
                }
            }
        };
        CalloutContentBase.prototype.shouldComponentUpdate = function (newProps, newState) {
            if (!newProps.shouldUpdateWhenHidden && this.props.hidden && newProps.hidden) {
                // Do not update when hidden.
                return false;
            }
            return !Utilities_1.shallowCompare(this.props, newProps) || !Utilities_1.shallowCompare(this.state, newState);
        };
        // tslint:disable-next-line function-name
        CalloutContentBase.prototype.UNSAFE_componentWillMount = function () {
            this._setTargetWindowAndElement(this._getTarget());
        };
        CalloutContentBase.prototype.componentWillUnmount = function () {
            this._async.dispose();
            this._disposables.forEach(function (dispose) { return dispose(); });
        };
        // tslint:disable-next-line function-name
        CalloutContentBase.prototype.UNSAFE_componentWillUpdate = function (newProps) {
            // If the target element changed, find the new one. If we are tracking target with class name, always find element
            // because we do not know if fabric has rendered a new element and disposed the old element.
            var newTarget = this._getTarget(newProps);
            var oldTarget = this._getTarget();
            if ((newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) &&
                !this._blockResetHeight) {
                this._maxHeight = undefined;
                this._setTargetWindowAndElement(newTarget);
            }
            if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
                this._maxHeight = undefined;
            }
            if (newProps.finalHeight !== this.props.finalHeight) {
                this._setHeightOffsetEveryFrame();
            }
            // Ensure positioning is recalculated when we are about to show a persisted menu.
            if (this._didPositionPropsChange(newProps, this.props)) {
                this._maxHeight = undefined;
                // Target might have been updated while hidden.
                this._setTargetWindowAndElement(newTarget);
                this.setState({
                    positions: undefined,
                });
                this._didSetInitialFocus = false;
                this._bounds = undefined;
            }
            this._blockResetHeight = false;
        };
        CalloutContentBase.prototype.componentDidMount = function () {
            if (!this.props.hidden) {
                this._onComponentDidMount();
            }
        };
        CalloutContentBase.prototype.render = function () {
            // If there is no target window then we are likely in server side rendering and we should not render anything.
            if (!this._targetWindow) {
                return null;
            }
            var target = this.props.target;
            var _a = this.props, styles = _a.styles, style = _a.style, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, isBeakVisible = _a.isBeakVisible, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth, finalHeight = _a.finalHeight, _b = _a.hideOverflow, hideOverflow = _b === void 0 ? !!finalHeight : _b, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight, onScroll = _a.onScroll, 
            // tslint:disable-next-line: deprecation
            _c = _a.shouldRestoreFocus, 
            // tslint:disable-next-line: deprecation
            shouldRestoreFocus = _c === void 0 ? true : _c;
            target = this._getTarget();
            var positions = this.state.positions;
            var getContentMaxHeight = this._getMaxHeight()
                ? this._getMaxHeight() + this.state.heightOffset
                : undefined;
            var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight
                ? calloutMaxHeight
                : getContentMaxHeight;
            var overflowYHidden = hideOverflow;
            var beakVisible = isBeakVisible && !!target;
            this._classNames = getClassNames(styles, {
                theme: this.props.theme,
                className: className,
                overflowYHidden: overflowYHidden,
                calloutWidth: calloutWidth,
                positions: positions,
                beakWidth: beakWidth,
                backgroundColor: backgroundColor,
                calloutMaxWidth: calloutMaxWidth,
            });
            var overflowStyle = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, style), { maxHeight: contentMaxHeight }), (overflowYHidden && { overflowY: 'hidden' }));
            var visibilityStyle = this.props.hidden ? { visibility: 'hidden' } : undefined;
            // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
            var content = (React.createElement("div", { ref: this._hostElement, className: this._classNames.container, style: visibilityStyle },
                React.createElement("div", tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties, ARIA_ROLE_ATTRIBUTES), { className: Utilities_1.css(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, 
                    // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
                    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                    tabIndex: -1, ref: this._calloutElement }),
                    beakVisible && React.createElement("div", { className: this._classNames.beak, style: this._getBeakPosition() }),
                    beakVisible && React.createElement("div", { className: this._classNames.beakCurtain }),
                    React.createElement(Popup_1.Popup, tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, ARIA_ROLE_ATTRIBUTES), { ariaLabel: ariaLabel, onRestoreFocus: this.props.onRestoreFocus, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: this._classNames.calloutMain, onDismiss: this.dismiss, onScroll: onScroll, shouldRestoreFocus: shouldRestoreFocus, style: overflowStyle, onMouseDown: this._mouseDownOnPopup, onMouseUp: this._mouseUpOnPopup }), children))));
            return content;
        };
        CalloutContentBase.prototype._dismissOnClickOrScroll = function (ev) {
            var target = ev.target;
            var isEventTargetOutsideCallout = this._hostElement.current && !Utilities_1.elementContains(this._hostElement.current, target);
            // If mouse is pressed down on callout but moved outside then released, don't dismiss the callout.
            if (isEventTargetOutsideCallout && this._isMouseDownOnPopup) {
                this._isMouseDownOnPopup = false;
                return;
            }
            if ((!this._target && isEventTargetOutsideCallout) ||
                (ev.target !== this._targetWindow &&
                    isEventTargetOutsideCallout &&
                    (this._target.stopPropagation ||
                        !this._target ||
                        (target !== this._target && !Utilities_1.elementContains(this._target, target))))) {
                this.dismiss(ev);
            }
        };
        CalloutContentBase.prototype._addListeners = function () {
            var _this = this;
            // This is added so the callout will dismiss when the window is scrolled
            // but not when something inside the callout is scrolled. The delay seems
            // to be required to avoid React firing an async focus event in IE from
            // the target changing focus quickly prior to rendering the callout.
            this._async.setTimeout(function () {
                _this._disposables.push(Utilities_1.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true), Utilities_1.on(_this._targetWindow, 'resize', _this._dismissOnResize, true), Utilities_1.on(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true), Utilities_1.on(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true));
                _this._hasListeners = true;
            }, 0);
        };
        CalloutContentBase.prototype._removeListeners = function () {
            this._disposables.forEach(function (dispose) { return dispose(); });
            this._disposables = [];
            this._hasListeners = false;
        };
        CalloutContentBase.prototype._updateAsyncPosition = function () {
            var _this = this;
            this._async.requestAnimationFrame(function () { return _this._updatePosition(); }, this._calloutElement.current);
        };
        CalloutContentBase.prototype._getBeakPosition = function () {
            var positions = this.state.positions;
            var beakPostionStyle = tslib_1.__assign({}, (positions && positions.beakPosition ? positions.beakPosition.elementPosition : null));
            if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
                beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
                beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
            }
            return beakPostionStyle;
        };
        CalloutContentBase.prototype._updatePosition = function () {
            // Try to update the target, page might have changed
            this._setTargetWindowAndElement(this._getTarget());
            var positions = this.state.positions;
            var hostElement = this._hostElement.current;
            var calloutElement = this._calloutElement.current;
            // If we expect a target element to position against, we need to wait until `this._target` is resolved. Otherwise
            // we can try to position.
            var expectsTarget = !!this.props.target;
            if (hostElement && calloutElement && (!expectsTarget || this._target)) {
                var currentProps = void 0;
                currentProps = Utilities_1.assign(currentProps, this.props);
                currentProps.bounds = this._getBounds();
                currentProps.target = this._target;
                // If there is a finalHeight given then we assume that the user knows and will handle
                // additional positioning adjustments so we should call positionCard
                var newPositions = this.props.finalHeight
                    ? positioning_1.positionCard(currentProps, hostElement, calloutElement, positions)
                    : positioning_1.positionCallout(currentProps, hostElement, calloutElement, positions);
                // Set the new position only when the positions are not exists or one of the new callout positions are different.
                // The position should not change if the position is within 2 decimal places.
                if ((!positions && newPositions) ||
                    (positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5)) {
                    // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                    // and we should stop trying to reposition to prevent a stack overflow.
                    this._positionAttempts++;
                    this.setState({
                        positions: newPositions,
                    });
                }
                else if (this._positionAttempts > 0) {
                    // Only call the onPositioned callback if the callout has been re-positioned at least once.
                    this._positionAttempts = 0;
                    if (this.props.onPositioned) {
                        this.props.onPositioned(this.state.positions);
                    }
                }
            }
        };
        CalloutContentBase.prototype._getBounds = function () {
            if (!this._bounds) {
                var bounds = this.props.bounds;
                var currentBounds = typeof bounds === 'function' ? bounds(this.props.target, this._targetWindow) : bounds;
                if (!currentBounds) {
                    currentBounds = positioning_1.getBoundsFromTargetWindow(this._target, this._targetWindow);
                    currentBounds = {
                        top: currentBounds.top + this.props.minPagePadding,
                        left: currentBounds.left + this.props.minPagePadding,
                        right: currentBounds.right - this.props.minPagePadding,
                        bottom: currentBounds.bottom - this.props.minPagePadding,
                        width: currentBounds.width - this.props.minPagePadding * 2,
                        height: currentBounds.height - this.props.minPagePadding * 2,
                    };
                }
                this._bounds = currentBounds;
            }
            return this._bounds;
        };
        // Max height should remain as synchronous as possible, which is why it is not done using set state.
        // It needs to be synchronous since it will impact the ultimate position of the callout.
        CalloutContentBase.prototype._getMaxHeight = function () {
            var _this = this;
            if (!this._maxHeight) {
                if (this.props.directionalHintFixed && this._target) {
                    var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                    var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                    // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                    // overlap with the target.
                    var totalGap_1 = gapSpace + beakWidth;
                    this._async.requestAnimationFrame(function () {
                        if (_this._target) {
                            _this._maxHeight = positioning_1.getMaxHeight(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
                            _this._blockResetHeight = true;
                            _this.forceUpdate();
                        }
                    }, this._target);
                }
                else {
                    this._maxHeight = this._getBounds().height;
                }
            }
            return this._maxHeight;
        };
        CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
            return (this._comparePositions(positions.elementPosition, newPosition.elementPosition) &&
                this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition));
        };
        CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
            for (var key in newPositions) {
                if (newPositions.hasOwnProperty(key)) {
                    var oldPositionEdge = oldPositions[key];
                    var newPositionEdge = newPositions[key];
                    if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                        if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
            return true;
        };
        CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
            var currentElement = this._calloutElement.current;
            if (target) {
                if (typeof target === 'string') {
                    var currentDoc = Utilities_1.getDocument(currentElement);
                    this._target = currentDoc ? currentDoc.querySelector(target) : null;
                    this._targetWindow = Utilities_1.getWindow(currentElement);
                }
                else if (!!target.stopPropagation) {
                    this._targetWindow = Utilities_1.getWindow(target.target);
                    this._target = target;
                }
                else if (!!target.getBoundingClientRect) {
                    var targetElement = target;
                    this._targetWindow = Utilities_1.getWindow(targetElement);
                    this._target = target;
                }
                else if (target.current !== undefined) {
                    this._target = target.current;
                    this._targetWindow = Utilities_1.getWindow(this._target);
                    // HTMLImgElements can have x and y values. The check for it being a point must go last.
                }
                else {
                    this._targetWindow = Utilities_1.getWindow(currentElement);
                    this._target = target;
                }
            }
            else {
                this._targetWindow = Utilities_1.getWindow(currentElement);
            }
        };
        CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
            var _this = this;
            if (this._calloutElement.current && this.props.finalHeight) {
                this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                    var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;
                    if (!calloutMainElem) {
                        return;
                    }
                    var cardScrollHeight = calloutMainElem.scrollHeight;
                    var cardCurrHeight = calloutMainElem.offsetHeight;
                    var scrollDiff = cardScrollHeight - cardCurrHeight;
                    _this.setState({
                        heightOffset: _this.state.heightOffset + scrollDiff,
                    });
                    if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                        _this._setHeightOffsetEveryFrame();
                    }
                    else {
                        _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer, _this._calloutElement.current);
                    }
                }, this._calloutElement.current);
            }
        };
        // Whether or not the current positions should be reset
        CalloutContentBase.prototype._didPositionPropsChange = function (newProps, oldProps) {
            return ((!newProps.hidden && newProps.hidden !== oldProps.hidden) || newProps.directionalHint !== oldProps.directionalHint);
        };
        CalloutContentBase.prototype._getTarget = function (props) {
            if (props === void 0) { props = this.props; }
            var target = props.target;
            return target;
        };
        CalloutContentBase.defaultProps = {
            preventDismissOnLostFocus: false,
            preventDismissOnScroll: false,
            preventDismissOnResize: false,
            isBeakVisible: true,
            beakWidth: 16,
            gapSpace: 0,
            minPagePadding: 8,
            directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
        };
        return CalloutContentBase;
    }(React.Component));
    exports.CalloutContentBase = CalloutContentBase;
});
//# sourceMappingURL=CalloutContent.base.js.map