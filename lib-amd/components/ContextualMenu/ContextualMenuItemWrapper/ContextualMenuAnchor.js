define(["require", "exports", "tslib", "react", "../../../Utilities", "./ContextualMenuItemWrapper", "../../../KeytipData", "../../../utilities/contextualMenu/index", "../ContextualMenuItem"], function (require, exports, tslib_1, React, Utilities_1, ContextualMenuItemWrapper_1, KeytipData_1, index_1, ContextualMenuItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextualMenuAnchor = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuAnchor, _super);
        function ContextualMenuAnchor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._anchor = React.createRef();
            _this._getMemoizedMenuButtonKeytipProps = Utilities_1.memoizeFunction(function (keytipProps) {
                return tslib_1.__assign(tslib_1.__assign({}, keytipProps), { hasMenu: true });
            });
            _this._getSubmenuTarget = function () {
                return _this._anchor.current ? _this._anchor.current : undefined;
            };
            _this._onItemClick = function (ev) {
                var _a = _this.props, item = _a.item, onItemClick = _a.onItemClick;
                if (onItemClick) {
                    onItemClick(item, ev);
                }
            };
            return _this;
        }
        ContextualMenuAnchor.prototype.render = function () {
            var _this = this;
            var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? ContextualMenuItem_1.ContextualMenuItem : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
            var anchorRel = item.rel;
            if (item.target && item.target.toLowerCase() === '_blank') {
                anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
            }
            var subMenuId = this._getSubMenuId(item);
            var itemHasSubmenu = index_1.hasSubmenu(item);
            var nativeProps = Utilities_1.getNativeProps(item, Utilities_1.anchorProperties);
            var disabled = index_1.isItemDisabled(item);
            var itemProps = item.itemProps;
            var keytipProps = item.keytipProps;
            if (keytipProps && itemHasSubmenu) {
                keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
            }
            return (React.createElement("div", null,
                React.createElement(KeytipData_1.KeytipData, { keytipProps: item.keytipProps, ariaDescribedBy: nativeProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (React.createElement("a", tslib_1.__assign({}, nativeProps, keytipAttributes, { ref: _this._anchor, href: item.href, target: item.target, rel: anchorRel, className: classNames.root, role: "menuitem", "aria-owns": item.key === expandedMenuItemKey ? subMenuId : undefined, "aria-haspopup": itemHasSubmenu || undefined, "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": index_1.isItemDisabled(item), 
                    // tslint:disable-next-line:deprecation
                    style: item.style, onClick: _this._onItemClick, onMouseEnter: _this._onItemMouseEnter, onMouseLeave: _this._onItemMouseLeave, onMouseMove: _this._onItemMouseMove, onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : undefined }),
                    React.createElement(ChildrenRenderer, tslib_1.__assign({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)))); })));
        };
        return ContextualMenuAnchor;
    }(ContextualMenuItemWrapper_1.ContextualMenuItemWrapper));
    exports.ContextualMenuAnchor = ContextualMenuAnchor;
});
//# sourceMappingURL=ContextualMenuAnchor.js.map