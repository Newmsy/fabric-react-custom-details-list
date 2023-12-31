import { __assign, __extends } from "tslib";
import * as React from 'react';
import { divProperties, getNativeProps, getId, KeyCodes, getDocument, classNamesFunction, initializeComponentRef, EventGroup, Async, } from '../../Utilities';
import { OpenCardMode, HoverCardType, } from './HoverCard.types';
import { ExpandingCard } from './ExpandingCard';
import { ExpandingCardMode } from './ExpandingCard.types';
import { PlainCard } from './PlainCard/PlainCard';
var getClassNames = classNamesFunction();
var HoverCardBase = /** @class */ (function (_super) {
    __extends(HoverCardBase, _super);
    // Constructor
    function HoverCardBase(props) {
        var _this = _super.call(this, props) || this;
        // The wrapping div that gets the hover events
        _this._hoverCard = React.createRef();
        _this.dismiss = function (withTimeOut) {
            _this._async.clearTimeout(_this._openTimerId);
            _this._async.clearTimeout(_this._dismissTimerId);
            if (!withTimeOut) {
                _this._setDismissedState();
            }
            else {
                _this._dismissTimerId = _this._async.setTimeout(function () {
                    _this._setDismissedState();
                }, _this.props.cardDismissDelay);
            }
        };
        // Show HoverCard
        _this._cardOpen = function (ev) {
            // tslint:disable-next-line:deprecation
            if (_this._shouldBlockHoverCard() || (ev.type === 'keydown' && !(ev.which === _this.props.openHotKey))) {
                return;
            }
            _this._async.clearTimeout(_this._dismissTimerId);
            if (ev.type === 'mouseenter') {
                _this._currentMouseTarget = ev.currentTarget;
            }
            _this._executeCardOpen(ev);
        };
        _this._executeCardOpen = function (ev) {
            _this._async.clearTimeout(_this._openTimerId);
            _this._openTimerId = _this._async.setTimeout(function () {
                _this.setState(function (prevState) {
                    if (!prevState.isHoverCardVisible) {
                        return {
                            isHoverCardVisible: true,
                            mode: ExpandingCardMode.compact,
                            openMode: ev.type === 'keydown' ? OpenCardMode.hotKey : OpenCardMode.hover,
                        };
                    }
                    return prevState;
                });
            }, _this.props.cardOpenDelay);
        };
        /**
         * Hide HoverCard
         * How we dismiss the card depends on where the callback is coming from.
         * This is provided by the `isNativeEvent` argument.
         *  true: Event is coming from event listeners set up in componentDidMount.
         *  false: Event is coming from the `onLeave` prop from the HoverCard component.
         */
        _this._cardDismiss = function (isNativeEvent, ev) {
            if (isNativeEvent) {
                // We expect these to be MouseEvents, If not, return.
                if (!(ev instanceof MouseEvent)) {
                    return;
                }
                // tslint:disable-next-line:deprecation
                if (ev.type === 'keydown' && ev.which !== KeyCodes.escape) {
                    return;
                }
                // Dismiss if not sticky and currentTarget is the same element that mouse last entered
                // tslint:disable-next-line:deprecation
                if (!_this.props.sticky && (_this._currentMouseTarget === ev.currentTarget || ev.which === KeyCodes.escape)) {
                    _this.dismiss(true);
                }
            }
            else {
                // If this is a mouseleave event and the component is sticky, do not dismiss.
                if (_this.props.sticky &&
                    !(ev instanceof MouseEvent) &&
                    ev.nativeEvent instanceof MouseEvent &&
                    ev.type === 'mouseleave') {
                    return;
                }
                _this.dismiss(true);
            }
        };
        _this._setDismissedState = function () {
            _this.setState({
                isHoverCardVisible: false,
                mode: ExpandingCardMode.compact,
                openMode: OpenCardMode.hover,
            });
        };
        _this._instantOpenAsExpanded = function (ev) {
            _this._async.clearTimeout(_this._dismissTimerId);
            _this.setState(function (prevState) {
                if (!prevState.isHoverCardVisible) {
                    return {
                        isHoverCardVisible: true,
                        mode: ExpandingCardMode.expanded,
                    };
                }
                return prevState;
            });
        };
        _this._setEventListeners = function () {
            var _a = _this.props, trapFocus = _a.trapFocus, instantOpenOnClick = _a.instantOpenOnClick, eventListenerTarget = _a.eventListenerTarget;
            var target = eventListenerTarget
                ? _this._getTargetElement(eventListenerTarget)
                : _this._getTargetElement(_this.props.target);
            var nativeEventDismiss = _this._nativeDismissEvent;
            // target can be undefined if ref isn't available, only assign
            // events when defined to avoid throwing exception.
            if (target) {
                _this._events.on(target, 'mouseenter', _this._cardOpen);
                _this._events.on(target, 'mouseleave', nativeEventDismiss);
                if (trapFocus) {
                    _this._events.on(target, 'keydown', _this._cardOpen);
                }
                else {
                    _this._events.on(target, 'focus', _this._cardOpen);
                    _this._events.on(target, 'blur', nativeEventDismiss);
                }
                if (instantOpenOnClick) {
                    _this._events.on(target, 'click', _this._instantOpenAsExpanded);
                }
                else {
                    _this._events.on(target, 'mousedown', nativeEventDismiss);
                    _this._events.on(target, 'keydown', nativeEventDismiss);
                }
            }
        };
        initializeComponentRef(_this);
        _this._async = new Async(_this);
        _this._events = new EventGroup(_this);
        _this._nativeDismissEvent = _this._cardDismiss.bind(_this, true);
        _this._childDismissEvent = _this._cardDismiss.bind(_this, false);
        _this.state = {
            isHoverCardVisible: false,
            mode: ExpandingCardMode.compact,
            openMode: OpenCardMode.hover,
        };
        return _this;
    }
    HoverCardBase.prototype.componentDidMount = function () {
        this._setEventListeners();
    };
    HoverCardBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    HoverCardBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (prevProps.target !== this.props.target) {
            this._events.off();
            this._setEventListeners();
        }
        if (prevState.isHoverCardVisible !== this.state.isHoverCardVisible) {
            if (this.state.isHoverCardVisible) {
                this._async.setTimeout(function () {
                    _this.setState({
                        mode: ExpandingCardMode.expanded,
                    }, function () {
                        _this.props.onCardExpand && _this.props.onCardExpand();
                    });
                }, this.props.expandedCardOpenDelay);
                this.props.onCardVisible && this.props.onCardVisible();
            }
            else {
                this.setState({
                    mode: ExpandingCardMode.compact,
                });
                this.props.onCardHide && this.props.onCardHide();
            }
        }
    };
    // Render
    HoverCardBase.prototype.render = function () {
        var _a = this.props, expandingCardProps = _a.expandingCardProps, children = _a.children, id = _a.id, _b = _a.setAriaDescribedBy, setAriaDescribedBy = _b === void 0 ? true : _b, customStyles = _a.styles, theme = _a.theme, className = _a.className, type = _a.type, plainCardProps = _a.plainCardProps, trapFocus = _a.trapFocus, setInitialFocus = _a.setInitialFocus;
        var _c = this.state, isHoverCardVisible = _c.isHoverCardVisible, mode = _c.mode, openMode = _c.openMode;
        var hoverCardId = id || getId('hoverCard');
        this._classNames = getClassNames(customStyles, {
            theme: theme,
            className: className,
        });
        // Common props for both card types.
        var commonCardProps = __assign(__assign({}, getNativeProps(this.props, divProperties)), { id: hoverCardId, trapFocus: !!trapFocus, firstFocus: setInitialFocus || openMode === OpenCardMode.hotKey, targetElement: this._getTargetElement(this.props.target), onEnter: this._cardOpen, onLeave: this._childDismissEvent });
        var finalExpandedCardProps = __assign(__assign(__assign({}, expandingCardProps), commonCardProps), { mode: mode });
        var finalPlainCardProps = __assign(__assign({}, plainCardProps), commonCardProps);
        return (React.createElement("div", { className: this._classNames.host, ref: this._hoverCard, "aria-describedby": setAriaDescribedBy && isHoverCardVisible ? hoverCardId : undefined, "data-is-focusable": !Boolean(this.props.target) },
            children,
            isHoverCardVisible &&
                (type === HoverCardType.expanding ? (React.createElement(ExpandingCard, __assign({}, finalExpandedCardProps))) : (React.createElement(PlainCard, __assign({}, finalPlainCardProps))))));
    };
    HoverCardBase.prototype._getTargetElement = function (target) {
        switch (typeof target) {
            case 'string':
                return getDocument().querySelector(target);
            case 'object':
                return target;
            default:
                return this._hoverCard.current || undefined;
        }
    };
    HoverCardBase.prototype._shouldBlockHoverCard = function () {
        return !!(this.props.shouldBlockHoverCard && this.props.shouldBlockHoverCard());
    };
    HoverCardBase.defaultProps = {
        cardOpenDelay: 500,
        cardDismissDelay: 100,
        expandedCardOpenDelay: 1500,
        instantOpenOnClick: false,
        setInitialFocus: false,
        openHotKey: KeyCodes.c,
        type: HoverCardType.expanding,
    };
    return HoverCardBase;
}(React.Component));
export { HoverCardBase };
//# sourceMappingURL=HoverCard.base.js.map