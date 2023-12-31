"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var ContextualMenuItemWrapper_1 = require("./ContextualMenuItemWrapper");
var KeytipData_1 = require("../../../KeytipData");
var index_1 = require("../../../utilities/contextualMenu/index");
var ContextualMenuItem_1 = require("../ContextualMenuItem");
var ContextualMenuButton = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuButton, _super);
    function ContextualMenuButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = React.createRef();
        _this._getMemoizedMenuButtonKeytipProps = Utilities_1.memoizeFunction(function (keytipProps) {
            return tslib_1.__assign(tslib_1.__assign({}, keytipProps), { hasMenu: true });
        });
        _this._getSubmenuTarget = function () {
            return _this._btn.current ? _this._btn.current : undefined;
        };
        return _this;
    }
    ContextualMenuButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem_1.ContextualMenuItem : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemMouseDown = _a.onItemMouseDown, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var subMenuId = this._getSubMenuId(item);
        var isChecked = index_1.getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = index_1.getMenuItemAriaRole(item);
        var itemHasSubmenu = index_1.hasSubmenu(item);
        var itemProps = item.itemProps, ariaLabel = item.ariaLabel;
        var buttonNativeProperties = Utilities_1.getNativeProps(item, Utilities_1.buttonProperties);
        // Do not add the disabled attribute to the button so that it is focusable
        delete buttonNativeProperties.disabled;
        var itemRole = item.role || defaultRole;
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick,
            onKeyDown: itemHasSubmenu ? this._onItemKeyDown : undefined,
            onMouseEnter: this._onItemMouseEnter,
            onMouseLeave: this._onItemMouseLeave,
            onMouseDown: function (ev) {
                return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
            },
            onMouseMove: this._onItemMouseMove,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': itemHasSubmenu || undefined,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : undefined,
            'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': index_1.isItemDisabled(item),
            'aria-checked': itemRole === 'menuitemcheckbox' && canCheck ? !!isChecked : undefined,
            'aria-selected': itemRole === 'menuitem' && canCheck ? !!isChecked : undefined,
            role: itemRole,
            // tslint:disable-next-line:deprecation
            style: item.style,
        };
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        return (React.createElement(KeytipData_1.KeytipData, { keytipProps: keytipProps, ariaDescribedBy: buttonNativeProperties['aria-describedby'], disabled: index_1.isItemDisabled(item) }, function (keytipAttributes) { return (React.createElement("button", tslib_1.__assign({ ref: _this._btn }, buttonNativeProperties, itemButtonProperties, keytipAttributes),
            React.createElement(ChildrenRenderer, tslib_1.__assign({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)))); }));
    };
    return ContextualMenuButton;
}(ContextualMenuItemWrapper_1.ContextualMenuItemWrapper));
exports.ContextualMenuButton = ContextualMenuButton;
//# sourceMappingURL=ContextualMenuButton.js.map