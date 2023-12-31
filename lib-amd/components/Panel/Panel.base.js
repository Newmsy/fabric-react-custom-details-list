define(["require", "exports", "tslib", "react", "../../Button", "../../Layer", "../../Overlay", "../../Popup", "../../Utilities", "../FocusTrapZone/index", "./Panel.types"], function (require, exports, tslib_1, React, Button_1, Layer_1, Overlay_1, Popup_1, Utilities_1, index_1, Panel_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var COMPONENT_NAME = 'Panel';
    var PanelVisibilityState;
    (function (PanelVisibilityState) {
        PanelVisibilityState[PanelVisibilityState["closed"] = 0] = "closed";
        PanelVisibilityState[PanelVisibilityState["animatingOpen"] = 1] = "animatingOpen";
        PanelVisibilityState[PanelVisibilityState["open"] = 2] = "open";
        PanelVisibilityState[PanelVisibilityState["animatingClosed"] = 3] = "animatingClosed";
    })(PanelVisibilityState || (PanelVisibilityState = {}));
    var PanelBase = /** @class */ (function (_super) {
        tslib_1.__extends(PanelBase, _super);
        function PanelBase(props) {
            var _this = _super.call(this, props) || this;
            _this._panel = React.createRef();
            _this._animationCallback = null;
            _this._hasCustomNavigation = !!(_this.props.onRenderNavigation || _this.props.onRenderNavigationContent);
            _this.dismiss = function (ev) {
                if (_this.props.onDismiss) {
                    _this.props.onDismiss(ev);
                }
                if (!ev || (ev && !ev.defaultPrevented)) {
                    _this.close();
                }
            };
            // Allow the user to scroll within the panel but not on the body
            _this._allowScrollOnPanel = function (elt) {
                if (elt) {
                    if (_this._allowTouchBodyScroll) {
                        Utilities_1.allowOverscrollOnElement(elt, _this._events);
                    }
                    else {
                        Utilities_1.allowScrollOnElement(elt, _this._events);
                    }
                }
                else {
                    _this._events.off(_this._scrollableContent);
                }
                _this._scrollableContent = elt;
            };
            _this._onRenderNavigation = function (props) {
                if (!_this.props.onRenderNavigationContent && !_this.props.onRenderNavigation && !_this.props.hasCloseButton) {
                    return null;
                }
                var _a = _this.props.onRenderNavigationContent, onRenderNavigationContent = _a === void 0 ? _this._onRenderNavigationContent : _a;
                return (React.createElement("div", { className: _this._classNames.navigation }, onRenderNavigationContent(props, _this._onRenderNavigationContent)));
            };
            _this._onRenderNavigationContent = function (props) {
                var _a;
                var closeButtonAriaLabel = props.closeButtonAriaLabel, hasCloseButton = props.hasCloseButton, _b = props.onRenderHeader, onRenderHeader = _b === void 0 ? _this._onRenderHeader : _b;
                if (hasCloseButton) {
                    var iconButtonStyles = (_a = _this._classNames.subComponentStyles) === null || _a === void 0 ? void 0 : _a.closeButton();
                    return (React.createElement(React.Fragment, null,
                        !_this._hasCustomNavigation && onRenderHeader(_this.props, _this._onRenderHeader, _this._headerTextId),
                        React.createElement(Button_1.IconButton, { styles: iconButtonStyles, 
                            // tslint:disable-next-line:deprecation
                            className: _this._classNames.closeButton, onClick: _this._onPanelClick, ariaLabel: closeButtonAriaLabel, title: closeButtonAriaLabel, "data-is-visible": true, iconProps: { iconName: 'Cancel' } })));
                }
                return null;
            };
            _this._onRenderHeader = function (props, defaultRender, headerTextId) {
                var headerText = props.headerText, _a = props.headerTextProps, headerTextProps = _a === void 0 ? {} : _a;
                if (headerText) {
                    return (React.createElement("div", { className: _this._classNames.header },
                        React.createElement("div", tslib_1.__assign({ id: headerTextId, role: "heading", "aria-level": 1 }, headerTextProps, { className: Utilities_1.css(_this._classNames.headerText, headerTextProps.className) }), headerText)));
                }
                return null;
            };
            _this._onRenderBody = function (props) {
                return React.createElement("div", { className: _this._classNames.content }, props.children);
            };
            _this._onRenderFooter = function (props) {
                var _a = _this.props.onRenderFooterContent, onRenderFooterContent = _a === void 0 ? null : _a;
                if (onRenderFooterContent) {
                    return (React.createElement("div", { className: _this._classNames.footer },
                        React.createElement("div", { className: _this._classNames.footerInner }, onRenderFooterContent())));
                }
                return null;
            };
            _this._animateTo = function (newVisibilityState) {
                if (newVisibilityState === PanelVisibilityState.open && _this.props.onOpen) {
                    _this.props.onOpen();
                }
                _this._animationCallback = _this._async.setTimeout(function () {
                    _this.setState({ visibility: newVisibilityState });
                    _this._onTransitionComplete();
                }, 200);
            };
            _this._clearExistingAnimationTimer = function () {
                if (_this._animationCallback !== null) {
                    _this._async.clearTimeout(_this._animationCallback);
                }
            };
            _this._onPanelClick = function (ev) {
                _this.dismiss(ev);
            };
            _this._onTransitionComplete = function () {
                _this._updateFooterPosition();
                if (_this.state.visibility === PanelVisibilityState.open && _this.props.onOpened) {
                    _this.props.onOpened();
                }
                if (_this.state.visibility === PanelVisibilityState.closed && _this.props.onDismissed) {
                    _this.props.onDismissed();
                }
            };
            var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
            _this._allowTouchBodyScroll = allowTouchBodyScroll;
            _this._async = new Utilities_1.Async(_this);
            _this._events = new Utilities_1.EventGroup(_this);
            Utilities_1.initializeComponentRef(_this);
            Utilities_1.warnDeprecations(COMPONENT_NAME, props, {
                ignoreExternalFocusing: 'focusTrapZoneProps',
                forceFocusInsideTrap: 'focusTrapZoneProps',
                firstFocusableSelector: 'focusTrapZoneProps',
            });
            _this.state = {
                isFooterSticky: false,
                // intentionally ignore props so animation takes place during componentDidMount
                visibility: PanelVisibilityState.closed,
                id: Utilities_1.getId('Panel'),
            };
            return _this;
        }
        PanelBase.getDerivedStateFromProps = function (nextProps, prevState) {
            if (nextProps.isOpen === undefined) {
                return null; // no state update
            }
            if (nextProps.isOpen &&
                (prevState.visibility === PanelVisibilityState.closed ||
                    prevState.visibility === PanelVisibilityState.animatingClosed)) {
                return { visibility: PanelVisibilityState.animatingOpen };
            }
            if (!nextProps.isOpen &&
                (prevState.visibility === PanelVisibilityState.open ||
                    prevState.visibility === PanelVisibilityState.animatingOpen)) {
                return { visibility: PanelVisibilityState.animatingClosed };
            }
            return null;
        };
        PanelBase.prototype.componentDidMount = function () {
            this._events.on(window, 'resize', this._updateFooterPosition);
            if (this._shouldListenForOuterClick(this.props)) {
                this._events.on(document.body, 'mousedown', this._dismissOnOuterClick, true);
            }
            if (this.props.isOpen) {
                this.setState({ visibility: PanelVisibilityState.animatingOpen });
            }
        };
        PanelBase.prototype.componentDidUpdate = function (previousProps, previousState) {
            var shouldListenOnOuterClick = this._shouldListenForOuterClick(this.props);
            var previousShouldListenOnOuterClick = this._shouldListenForOuterClick(previousProps);
            if (this.state.visibility !== previousState.visibility) {
                this._clearExistingAnimationTimer();
                if (this.state.visibility === PanelVisibilityState.animatingOpen) {
                    this._animateTo(PanelVisibilityState.open);
                }
                else if (this.state.visibility === PanelVisibilityState.animatingClosed) {
                    this._animateTo(PanelVisibilityState.closed);
                }
            }
            if (shouldListenOnOuterClick && !previousShouldListenOnOuterClick) {
                this._events.on(document.body, 'mousedown', this._dismissOnOuterClick, true);
            }
            else if (!shouldListenOnOuterClick && previousShouldListenOnOuterClick) {
                this._events.off(document.body, 'mousedown', this._dismissOnOuterClick, true);
            }
        };
        PanelBase.prototype.componentWillUnmount = function () {
            this._async.dispose();
            this._events.dispose();
        };
        PanelBase.prototype.render = function () {
            var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, 
            // tslint:disable:deprecation
            firstFocusableSelector = _a.firstFocusableSelector, focusTrapZoneProps = _a.focusTrapZoneProps, forceFocusInsideTrap = _a.forceFocusInsideTrap, hasCloseButton = _a.hasCloseButton, headerText = _a.headerText, _c = _a.headerClassName, headerClassName = _c === void 0 ? '' : _c, ignoreExternalFocusing = _a.ignoreExternalFocusing, 
            // tslint:enable:deprecation
            isBlocking = _a.isBlocking, isFooterAtBottom = _a.isFooterAtBottom, isLightDismiss = _a.isLightDismiss, isHiddenOnDismiss = _a.isHiddenOnDismiss, layerProps = _a.layerProps, overlayProps = _a.overlayProps, type = _a.type, styles = _a.styles, theme = _a.theme, customWidth = _a.customWidth, _d = _a.onLightDismissClick, onLightDismissClick = _d === void 0 ? this._onPanelClick : _d, _e = _a.onRenderNavigation, onRenderNavigation = _e === void 0 ? this._onRenderNavigation : _e, _f = _a.onRenderHeader, onRenderHeader = _f === void 0 ? this._onRenderHeader : _f, _g = _a.onRenderBody, onRenderBody = _g === void 0 ? this._onRenderBody : _g, _h = _a.onRenderFooter, onRenderFooter = _h === void 0 ? this._onRenderFooter : _h;
            var _j = this.state, isFooterSticky = _j.isFooterSticky, visibility = _j.visibility, id = _j.id;
            var isLeft = type === Panel_types_1.PanelType.smallFixedNear || type === Panel_types_1.PanelType.customNear ? true : false;
            var isRTL = Utilities_1.getRTL(theme);
            var isOnRightSide = isRTL ? isLeft : !isLeft;
            var customWidthStyles = type === Panel_types_1.PanelType.custom || type === Panel_types_1.PanelType.customNear ? { width: customWidth } : {};
            var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
            var isOpen = this.isActive;
            var isAnimating = visibility === PanelVisibilityState.animatingClosed || visibility === PanelVisibilityState.animatingOpen;
            this._headerTextId = headerText && id + '-headerText';
            if (!isOpen && !isAnimating && !isHiddenOnDismiss) {
                return null;
            }
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                focusTrapZoneClassName: focusTrapZoneProps ? focusTrapZoneProps.className : undefined,
                hasCloseButton: hasCloseButton,
                headerClassName: headerClassName,
                isAnimating: isAnimating,
                isFooterSticky: isFooterSticky,
                isFooterAtBottom: isFooterAtBottom,
                isOnRightSide: isOnRightSide,
                isOpen: isOpen,
                isHiddenOnDismiss: isHiddenOnDismiss,
                type: type,
                hasCustomNavigation: this._hasCustomNavigation,
            });
            var _k = this, _classNames = _k._classNames, _allowTouchBodyScroll = _k._allowTouchBodyScroll;
            var overlay;
            if (isBlocking && isOpen) {
                overlay = (React.createElement(Overlay_1.Overlay, tslib_1.__assign({ className: _classNames.overlay, isDarkThemed: false, onClick: isLightDismiss ? onLightDismissClick : undefined, allowTouchBodyScroll: _allowTouchBodyScroll }, overlayProps)));
            }
            return (React.createElement(Layer_1.Layer, tslib_1.__assign({}, layerProps),
                React.createElement(Popup_1.Popup, { role: "dialog", "aria-modal": "true", ariaLabelledBy: this._headerTextId ? this._headerTextId : undefined, onDismiss: this.dismiss, className: _classNames.hiddenPanel },
                    React.createElement("div", tslib_1.__assign({ "aria-hidden": !isOpen && isAnimating }, nativeProps, { ref: this._panel, className: _classNames.root }),
                        overlay,
                        React.createElement(index_1.FocusTrapZone, tslib_1.__assign({ ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: !isBlocking || (isHiddenOnDismiss && !isOpen) ? false : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, isClickableOutsideFocusTrap: true }, focusTrapZoneProps, { className: _classNames.main, style: customWidthStyles, elementToFocusOnDismiss: elementToFocusOnDismiss }),
                            React.createElement("div", { className: _classNames.commands, "data-is-visible": true }, onRenderNavigation(this.props, this._onRenderNavigation)),
                            React.createElement("div", { className: _classNames.contentInner },
                                (this._hasCustomNavigation || !hasCloseButton) &&
                                    onRenderHeader(this.props, this._onRenderHeader, this._headerTextId),
                                React.createElement("div", { ref: this._allowScrollOnPanel, className: _classNames.scrollableContent, "data-is-scrollable": true }, onRenderBody(this.props, this._onRenderBody)),
                                onRenderFooter(this.props, this._onRenderFooter)))))));
        };
        PanelBase.prototype.open = function () {
            if (this.props.isOpen !== undefined) {
                return;
            }
            if (this.isActive) {
                return;
            }
            this.setState({ visibility: PanelVisibilityState.animatingOpen });
        };
        PanelBase.prototype.close = function () {
            if (this.props.isOpen !== undefined) {
                return;
            }
            if (!this.isActive) {
                return;
            }
            this.setState({ visibility: PanelVisibilityState.animatingClosed });
        };
        Object.defineProperty(PanelBase.prototype, "isActive", {
            /** isActive is true when panel is open or opening. */
            get: function () {
                return (this.state.visibility === PanelVisibilityState.open ||
                    this.state.visibility === PanelVisibilityState.animatingOpen);
            },
            enumerable: true,
            configurable: true
        });
        PanelBase.prototype._shouldListenForOuterClick = function (props) {
            return !!props.isBlocking && !!props.isOpen;
        };
        PanelBase.prototype._updateFooterPosition = function () {
            var scrollableContent = this._scrollableContent;
            if (scrollableContent) {
                var height = scrollableContent.clientHeight;
                var innerHeight_1 = scrollableContent.scrollHeight;
                this.setState({
                    isFooterSticky: height < innerHeight_1 ? true : false,
                });
            }
        };
        PanelBase.prototype._dismissOnOuterClick = function (ev) {
            var panel = this._panel.current;
            if (this.isActive && panel && !ev.defaultPrevented) {
                if (!Utilities_1.elementContains(panel, ev.target)) {
                    if (this.props.onOuterClick) {
                        this.props.onOuterClick();
                        ev.preventDefault();
                    }
                    else {
                        this.dismiss();
                    }
                }
            }
        };
        PanelBase.defaultProps = {
            isHiddenOnDismiss: false,
            isOpen: undefined,
            isBlocking: true,
            hasCloseButton: true,
            type: Panel_types_1.PanelType.smallFixedFar,
        };
        return PanelBase;
    }(React.Component));
    exports.PanelBase = PanelBase;
});
//# sourceMappingURL=Panel.base.js.map