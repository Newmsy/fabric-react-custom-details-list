"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var FocusZone_1 = require("../../FocusZone");
var Link_1 = require("../../Link");
var Icon_1 = require("../../Icon");
var Button_1 = require("../../Button");
var DirectionalHint_1 = require("../../common/DirectionalHint");
var ResizeGroup_1 = require("../../ResizeGroup");
var Tooltip_1 = require("../../Tooltip");
var getClassNames = Utilities_1.classNamesFunction();
var OVERFLOW_KEY = 'overflow';
var nullFunction = function () { return null; };
var nonActionableItemProps = {
    styles: function (props) {
        var theme = props.theme;
        return {
            root: {
                selectors: {
                    '&.is-disabled': {
                        color: theme.semanticColors.bodyText,
                    },
                },
            },
        };
    },
};
/**
 * {@docCategory Breadcrumb}
 */
var BreadcrumbBase = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbBase, _super);
    function BreadcrumbBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusZone = React.createRef();
        _this._onReduceData = function (data) {
            var renderedItems = data.renderedItems, renderedOverflowItems = data.renderedOverflowItems;
            var overflowIndex = data.props.overflowIndex;
            var movedItem = renderedItems[overflowIndex];
            renderedItems = tslib_1.__spreadArrays(renderedItems);
            renderedItems.splice(overflowIndex, 1);
            renderedOverflowItems = tslib_1.__spreadArrays(renderedOverflowItems, [movedItem]);
            if (movedItem !== undefined) {
                return tslib_1.__assign(tslib_1.__assign({}, data), { renderedItems: renderedItems, renderedOverflowItems: renderedOverflowItems });
            }
        };
        _this._onRenderBreadcrumb = function (data) {
            var _a = data.props, ariaLabel = _a.ariaLabel, _b = _a.dividerAs, DividerType = _b === void 0 ? Icon_1.Icon : _b, _c = _a.onRenderItem, onRenderItem = _c === void 0 ? _this._onRenderItem : _c, overflowAriaLabel = _a.overflowAriaLabel, overflowIndex = _a.overflowIndex, onRenderOverflowIcon = _a.onRenderOverflowIcon;
            var renderedOverflowItems = data.renderedOverflowItems, renderedItems = data.renderedItems;
            var contextualItems = renderedOverflowItems.map(function (item) {
                var isActionable = !!(item.onClick || item.href);
                return {
                    name: item.text,
                    key: item.key,
                    onClick: item.onClick ? _this._onBreadcrumbClicked.bind(_this, item) : null,
                    href: item.href,
                    disabled: !isActionable,
                    itemProps: isActionable ? undefined : nonActionableItemProps,
                };
            });
            // Find index of last rendered item so the divider icon
            // knows not to render on that item
            var lastItemIndex = renderedItems.length - 1;
            var hasOverflowItems = renderedOverflowItems && renderedOverflowItems.length !== 0;
            var itemElements = renderedItems.map(function (item, index) { return (React.createElement("li", { className: _this._classNames.listItem, key: item.key || String(index) },
                onRenderItem(item, _this._onRenderItem),
                (index !== lastItemIndex || (hasOverflowItems && index === overflowIndex - 1)) && (React.createElement(DividerType, { className: _this._classNames.chevron, iconName: Utilities_1.getRTL(_this.props.theme) ? 'ChevronLeft' : 'ChevronRight', item: item })))); });
            if (hasOverflowItems) {
                var iconProps = !onRenderOverflowIcon ? { iconName: 'More' } : {};
                var onRenderMenuIcon = onRenderOverflowIcon ? onRenderOverflowIcon : nullFunction;
                itemElements.splice(overflowIndex, 0, React.createElement("li", { className: _this._classNames.overflow, key: OVERFLOW_KEY },
                    React.createElement(Button_1.IconButton, { className: _this._classNames.overflowButton, iconProps: iconProps, role: "button", "aria-haspopup": "true", ariaLabel: overflowAriaLabel, onRenderMenuIcon: onRenderMenuIcon, menuProps: {
                            items: contextualItems,
                            directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge,
                        } }),
                    overflowIndex !== lastItemIndex + 1 && (React.createElement(DividerType, { className: _this._classNames.chevron, iconName: Utilities_1.getRTL(_this.props.theme) ? 'ChevronLeft' : 'ChevronRight', item: renderedOverflowItems[renderedOverflowItems.length - 1] }))));
            }
            var nativeProps = Utilities_1.getNativeProps(_this.props, Utilities_1.htmlElementProperties, [
                'className',
            ]);
            return (React.createElement("div", tslib_1.__assign({ className: _this._classNames.root, role: "navigation", "aria-label": ariaLabel }, nativeProps),
                React.createElement(FocusZone_1.FocusZone, tslib_1.__assign({ componentRef: _this._focusZone, direction: FocusZone_1.FocusZoneDirection.horizontal }, _this.props.focusZoneProps),
                    React.createElement("ol", { className: _this._classNames.list }, itemElements))));
        };
        _this._onRenderItem = function (item) {
            if (item.onClick || item.href) {
                return (React.createElement(Link_1.Link, { as: item.as, className: _this._classNames.itemLink, href: item.href, "aria-current": item.isCurrentItem ? 'page' : undefined, onClick: _this._onBreadcrumbClicked.bind(_this, item) },
                    React.createElement(Tooltip_1.TooltipHost, tslib_1.__assign({ content: item.text, overflowMode: Tooltip_1.TooltipOverflowMode.Parent }, _this.props.tooltipHostProps), item.text)));
            }
            else {
                var Tag = item.as || 'span';
                return (React.createElement(Tag, { className: _this._classNames.item },
                    React.createElement(Tooltip_1.TooltipHost, tslib_1.__assign({ content: item.text, overflowMode: Tooltip_1.TooltipOverflowMode.Parent }, _this.props.tooltipHostProps), item.text)));
            }
        };
        _this._onBreadcrumbClicked = function (item, ev) {
            if (item.onClick) {
                item.onClick(ev, item);
            }
        };
        Utilities_1.initializeComponentRef(_this);
        _this._validateProps(props);
        return _this;
    }
    /**
     * Sets focus to the first breadcrumb link.
     */
    BreadcrumbBase.prototype.focus = function () {
        if (this._focusZone.current) {
            this._focusZone.current.focus();
        }
    };
    BreadcrumbBase.prototype.render = function () {
        this._validateProps(this.props);
        var _a = this.props, _b = _a.onReduceData, onReduceData = _b === void 0 ? this._onReduceData : _b, overflowIndex = _a.overflowIndex, maxDisplayedItems = _a.maxDisplayedItems, items = _a.items, className = _a.className, theme = _a.theme, styles = _a.styles;
        var renderedItems = tslib_1.__spreadArrays(items);
        var renderedOverflowItems = renderedItems.splice(overflowIndex, renderedItems.length - maxDisplayedItems);
        var breadcrumbData = {
            props: this.props,
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
        };
        this._classNames = getClassNames(styles, {
            className: className,
            theme: theme,
        });
        return React.createElement(ResizeGroup_1.ResizeGroup, { onRenderData: this._onRenderBreadcrumb, onReduceData: onReduceData, data: breadcrumbData });
    };
    /**
     * Validate incoming props
     * @param props - Props to validate
     */
    BreadcrumbBase.prototype._validateProps = function (props) {
        var maxDisplayedItems = props.maxDisplayedItems, overflowIndex = props.overflowIndex, items = props.items;
        if (overflowIndex < 0 ||
            (maxDisplayedItems > 1 && overflowIndex > maxDisplayedItems - 1) ||
            (items.length > 0 && overflowIndex > items.length - 1)) {
            throw new Error('Breadcrumb: overflowIndex out of range');
        }
    };
    BreadcrumbBase.defaultProps = {
        items: [],
        maxDisplayedItems: 999,
        overflowIndex: 0,
    };
    return BreadcrumbBase;
}(React.Component));
exports.BreadcrumbBase = BreadcrumbBase;
//# sourceMappingURL=Breadcrumb.base.js.map