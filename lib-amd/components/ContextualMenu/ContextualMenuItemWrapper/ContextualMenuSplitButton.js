define(["require", "exports", "tslib", "react", "../../../Utilities", "../ContextualMenuItem", "../ContextualMenu.classNames", "../../../KeytipData", "../../../utilities/contextualMenu/index", "../../../Divider", "./ContextualMenuItemWrapper"], function (require, exports, tslib_1, React, Utilities_1, ContextualMenuItem_1, ContextualMenu_classNames_1, KeytipData_1, index_1, Divider_1, ContextualMenuItemWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TouchIdleDelay = 500; /* ms */
    var ContextualMenuSplitButton = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuSplitButton, _super);
        function ContextualMenuSplitButton(props) {
            var _this = _super.call(this, props) || this;
            _this._getMemoizedMenuButtonKeytipProps = Utilities_1.memoizeFunction(function (keytipProps) {
                return tslib_1.__assign(tslib_1.__assign({}, keytipProps), { hasMenu: true });
            });
            _this._onItemKeyDown = function (ev) {
                var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
                if (ev.which === Utilities_1.KeyCodes.enter) {
                    _this._executeItemClick(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                else if (onItemKeyDown) {
                    onItemKeyDown(item, ev);
                }
            };
            _this._getSubmenuTarget = function () {
                return _this._splitButton;
            };
            _this._onItemMouseEnterPrimary = function (ev) {
                var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
                if (onItemMouseEnter) {
                    onItemMouseEnter(tslib_1.__assign(tslib_1.__assign({}, item), { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
                }
            };
            _this._onItemMouseEnterIcon = function (ev) {
                var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
                if (onItemMouseEnter) {
                    onItemMouseEnter(item, ev, _this._splitButton);
                }
            };
            _this._onItemMouseMovePrimary = function (ev) {
                var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
                if (onItemMouseMove) {
                    onItemMouseMove(tslib_1.__assign(tslib_1.__assign({}, item), { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
                }
            };
            _this._onItemMouseMoveIcon = function (ev) {
                var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
                if (onItemMouseMove) {
                    onItemMouseMove(item, ev, _this._splitButton);
                }
            };
            _this._onIconItemClick = function (ev) {
                var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
                if (onItemClickBase) {
                    onItemClickBase(item, ev, (_this._splitButton ? _this._splitButton : ev.currentTarget));
                }
            };
            _this._executeItemClick = function (ev) {
                var _a = _this.props, item = _a.item, executeItemClick = _a.executeItemClick, onItemClick = _a.onItemClick;
                if (item.disabled || item.isDisabled) {
                    return;
                }
                if (_this._processingTouch && onItemClick) {
                    return onItemClick(item, ev);
                }
                if (executeItemClick) {
                    executeItemClick(item, ev);
                }
            };
            _this._onTouchStart = function (ev) {
                if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
                    _this._handleTouchAndPointerEvent(ev);
                }
            };
            _this._onPointerDown = function (ev) {
                if (ev.pointerType === 'touch') {
                    _this._handleTouchAndPointerEvent(ev);
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                }
            };
            _this._async = new Utilities_1.Async(_this);
            _this._events = new Utilities_1.EventGroup(_this);
            return _this;
        }
        ContextualMenuSplitButton.prototype.componentDidMount = function () {
            if (this._splitButton && 'onpointerdown' in this._splitButton) {
                this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
            }
        };
        ContextualMenuSplitButton.prototype.componentWillUnmount = function () {
            this._async.dispose();
            this._events.dispose();
        };
        ContextualMenuSplitButton.prototype.render = function () {
            var _this = this;
            var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, onItemMouseLeave = _a.onItemMouseLeave, expandedMenuItemKey = _a.expandedMenuItemKey;
            var itemHasSubmenu = index_1.hasSubmenu(item);
            var keytipProps = item.keytipProps;
            if (keytipProps) {
                keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
            }
            return (React.createElement(KeytipData_1.KeytipData, { keytipProps: keytipProps, disabled: index_1.isItemDisabled(item) }, function (keytipAttributes) { return (React.createElement("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: function (splitButton) { return (_this._splitButton = splitButton); }, role: index_1.getMenuItemAriaRole(item), "aria-label": item.ariaLabel, className: classNames.splitContainer, "aria-disabled": index_1.isItemDisabled(item), "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-haspopup": true, "aria-describedby": Utilities_1.mergeAriaAttributeValues(item.ariaDescription, keytipAttributes['aria-describedby']), "aria-checked": item.isChecked || item.checked, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, onMouseEnter: _this._onItemMouseEnterPrimary, onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, tslib_1.__assign(tslib_1.__assign({}, item), { subMenuProps: null, items: null })) : undefined, onMouseMove: _this._onItemMouseMovePrimary, onKeyDown: _this._onItemKeyDown, onClick: _this._executeItemClick, onTouchStart: _this._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": item['aria-roledescription'] },
                _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
                _this._renderSplitDivider(item),
                _this._renderSplitIconButton(item, classNames, index, keytipAttributes))); }));
        };
        ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, 
        // tslint:disable-next-line:deprecation
        classNames, index, hasCheckmarks, hasIcons) {
            var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem_1.ContextualMenuItem : _b, onItemClick = _a.onItemClick;
            var itemProps = {
                key: item.key,
                disabled: index_1.isItemDisabled(item) || item.primaryDisabled,
                // tslint:disable:deprecation
                name: item.name,
                text: item.text || item.name,
                secondaryText: item.secondaryText,
                // tslint:enable:deprecation
                className: classNames.splitPrimary,
                canCheck: item.canCheck,
                isChecked: item.isChecked,
                checked: item.checked,
                iconProps: item.iconProps,
                onRenderIcon: item.onRenderIcon,
                data: item.data,
                'data-is-focusable': false,
            };
            var itemComponentProps = item.itemProps;
            return (React.createElement("button", tslib_1.__assign({}, Utilities_1.getNativeProps(itemProps, Utilities_1.buttonProperties)),
                React.createElement(ChildrenRenderer, tslib_1.__assign({ "data-is-focusable": false, item: itemProps, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons }, itemComponentProps))));
        };
        ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
            var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || ContextualMenu_classNames_1.getSplitButtonVerticalDividerClassNames;
            return React.createElement(Divider_1.VerticalDivider, { getClassNames: getDividerClassNames });
        };
        ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, // tslint:disable-line:deprecation
        index, keytipAttributes) {
            var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem_1.ContextualMenuItem : _b, onItemMouseLeave = _a.onItemMouseLeave, onItemMouseDown = _a.onItemMouseDown, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
            var itemProps = {
                onClick: this._onIconItemClick,
                disabled: index_1.isItemDisabled(item),
                className: classNames.splitMenu,
                subMenuProps: item.subMenuProps,
                submenuIconProps: item.submenuIconProps,
                split: true,
                key: item.key,
            };
            var buttonProps = tslib_1.__assign(tslib_1.__assign({}, Utilities_1.getNativeProps(itemProps, Utilities_1.buttonProperties)), {
                onMouseEnter: this._onItemMouseEnterIcon,
                onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
                onMouseDown: function (ev) {
                    return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
                },
                onMouseMove: this._onItemMouseMoveIcon,
                'data-is-focusable': false,
                'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
                'aria-hidden': true,
            });
            var itemComponentProps = item.itemProps;
            return (React.createElement("button", tslib_1.__assign({}, buttonProps),
                React.createElement(ChildrenRenderer, tslib_1.__assign({ componentRef: item.componentRef, item: itemProps, classNames: classNames, index: index, hasIcons: false, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: this._getSubmenuTarget }, itemComponentProps))));
        };
        ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
            var _this = this;
            var onTap = this.props.onTap;
            if (onTap) {
                onTap(ev);
            }
            // If we already have an existing timeout from a previous touch/pointer event
            // cancel that timeout so we can set a new one.
            if (this._lastTouchTimeoutId) {
                this._async.clearTimeout(this._lastTouchTimeoutId);
                this._lastTouchTimeoutId = undefined;
            }
            this._processingTouch = true;
            this._lastTouchTimeoutId = this._async.setTimeout(function () {
                _this._processingTouch = false;
                _this._lastTouchTimeoutId = undefined;
            }, TouchIdleDelay);
        };
        return ContextualMenuSplitButton;
    }(ContextualMenuItemWrapper_1.ContextualMenuItemWrapper));
    exports.ContextualMenuSplitButton = ContextualMenuSplitButton;
});
//# sourceMappingURL=ContextualMenuSplitButton.js.map