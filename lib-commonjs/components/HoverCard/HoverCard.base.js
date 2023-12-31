"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var HoverCard_types_1 = require("./HoverCard.types");
var ExpandingCard_1 = require("./ExpandingCard");
var ExpandingCard_types_1 = require("./ExpandingCard.types");
var PlainCard_1 = require("./PlainCard/PlainCard");
var getClassNames = Utilities_1.classNamesFunction();
var HoverCardBase = /** @class */ (function (_super) {
    tslib_1.__extends(HoverCardBase, _super);
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
                            mode: ExpandingCard_types_1.ExpandingCardMode.compact,
                            openMode: ev.type === 'keydown' ? HoverCard_types_1.OpenCardMode.hotKey : HoverCard_types_1.OpenCardMode.hover,
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
                if (ev.type === 'keydown' && ev.which !== Utilities_1.KeyCodes.escape) {
                    return;
                }
                // Dismiss if not sticky and currentTarget is the same element that mouse last entered
                // tslint:disable-next-line:deprecation
                if (!_this.props.sticky && (_this._currentMouseTarget === ev.currentTarget || ev.which === Utilities_1.KeyCodes.escape)) {
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
                mode: ExpandingCard_types_1.ExpandingCardMode.compact,
                openMode: HoverCard_types_1.OpenCardMode.hover,
            });
        };
        _this._instantOpenAsExpanded = function (ev) {
            _this._async.clearTimeout(_this._dismissTimerId);
            _this.setState(function (prevState) {
                if (!prevState.isHoverCardVisible) {
                    return {
                        isHoverCardVisible: true,
                        mode: ExpandingCard_types_1.ExpandingCardMode.expanded,
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
        Utilities_1.initializeComponentRef(_this);
        _this._async = new Utilities_1.Async(_this);
        _this._events = new Utilities_1.EventGroup(_this);
        _this._nativeDismissEvent = _this._cardDismiss.bind(_this, true);
        _this._childDismissEvent = _this._cardDismiss.bind(_this, false);
        _this.state = {
            isHoverCardVisible: false,
            mode: ExpandingCard_types_1.ExpandingCardMode.compact,
            openMode: HoverCard_types_1.OpenCardMode.hover,
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
                        mode: ExpandingCard_types_1.ExpandingCardMode.expanded,
                    }, function () {
                        _this.props.onCardExpand && _this.props.onCardExpand();
                    });
                }, this.props.expandedCardOpenDelay);
                this.props.onCardVisible && this.props.onCardVisible();
            }
            else {
                this.setState({
                    mode: ExpandingCard_types_1.ExpandingCardMode.compact,
                });
                this.props.onCardHide && this.props.onCardHide();
            }
        }
    };
    // Render
    HoverCardBase.prototype.render = function () {
        var _a = this.props, expandingCardProps = _a.expandingCardProps, children = _a.children, id = _a.id, _b = _a.setAriaDescribedBy, setAriaDescribedBy = _b === void 0 ? true : _b, customStyles = _a.styles, theme = _a.theme, className = _a.className, type = _a.type, plainCardProps = _a.plainCardProps, trapFocus = _a.trapFocus, setInitialFocus = _a.setInitialFocus;
        var _c = this.state, isHoverCardVisible = _c.isHoverCardVisible, mode = _c.mode, openMode = _c.openMode;
        var hoverCardId = id || Utilities_1.getId('hoverCard');
        this._classNames = getClassNames(customStyles, {
            theme: theme,
            className: className,
        });
        // Common props for both card types.
        var commonCardProps = tslib_1.__assign(tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties)), { id: hoverCardId, trapFocus: !!trapFocus, firstFocus: setInitialFocus || openMode === HoverCard_types_1.OpenCardMode.hotKey, targetElement: this._getTargetElement(this.props.target), onEnter: this._cardOpen, onLeave: this._childDismissEvent });
        var finalExpandedCardProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, expandingCardProps), commonCardProps), { mode: mode });
        var finalPlainCardProps = tslib_1.__assign(tslib_1.__assign({}, plainCardProps), commonCardProps);
        return (React.createElement("div", { className: this._classNames.host, ref: this._hoverCard, "aria-describedby": setAriaDescribedBy && isHoverCardVisible ? hoverCardId : undefined, "data-is-focusable": !Boolean(this.props.target) },
            children,
            isHoverCardVisible &&
                (type === HoverCard_types_1.HoverCardType.expanding ? (React.createElement(ExpandingCard_1.ExpandingCard, tslib_1.__assign({}, finalExpandedCardProps))) : (React.createElement(PlainCard_1.PlainCard, tslib_1.__assign({}, finalPlainCardProps))))));
    };
    HoverCardBase.prototype._getTargetElement = function (target) {
        switch (typeof target) {
            case 'string':
                return Utilities_1.getDocument().querySelector(target);
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
        openHotKey: Utilities_1.KeyCodes.c,
        type: HoverCard_types_1.HoverCardType.expanding,
    };
    return HoverCardBase;
}(React.Component));
exports.HoverCardBase = HoverCardBase;
//# sourceMappingURL=HoverCard.base.js.map