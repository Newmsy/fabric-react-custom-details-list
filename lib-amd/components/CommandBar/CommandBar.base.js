define(["require", "exports", "tslib", "react", "../../Utilities", "../../OverflowSet", "../../ResizeGroup", "../../FocusZone", "../../Button", "../../Tooltip", "./CommandBar.styles"], function (require, exports, tslib_1, React, Utilities_1, OverflowSet_1, ResizeGroup_1, FocusZone_1, Button_1, Tooltip_1, CommandBar_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var CommandBarBase = /** @class */ (function (_super) {
        tslib_1.__extends(CommandBarBase, _super);
        function CommandBarBase(props) {
            var _this = _super.call(this, props) || this;
            _this._overflowSet = React.createRef();
            _this._resizeGroup = React.createRef();
            _this._onRenderData = function (data) {
                return (React.createElement(FocusZone_1.FocusZone, { className: Utilities_1.css(_this._classNames.root), direction: FocusZone_1.FocusZoneDirection.horizontal, role: 'menubar', "aria-label": _this.props.ariaLabel },
                    React.createElement(OverflowSet_1.OverflowSet
                    // tslint:disable-next-line:deprecation
                    , { 
                        // tslint:disable-next-line:deprecation
                        componentRef: _this._overflowSet, className: Utilities_1.css(_this._classNames.primarySet), doNotContainWithinFocusZone: true, items: data.primaryItems, overflowItems: data.overflowItems.length ? data.overflowItems : undefined, onRenderItem: _this._onRenderItem, onRenderOverflowButton: _this._onRenderOverflowButton }),
                    data.farItems && data.farItems.length > 0 && (React.createElement(OverflowSet_1.OverflowSet, { className: Utilities_1.css(_this._classNames.secondarySet), doNotContainWithinFocusZone: true, items: data.farItems, onRenderItem: _this._onRenderItem, onRenderOverflowButton: Utilities_1.nullRender }))));
            };
            _this._onRenderItem = function (item) {
                if (item.onRender) {
                    // These are the top level items, there is no relevant menu dismissing function to
                    // provide for the IContextualMenuItem onRender function. Pass in a no op function instead.
                    return item.onRender(item, function () { return undefined; });
                }
                // tslint:disable-next-line:deprecation
                var itemText = item.text || item.name;
                var commandButtonProps = tslib_1.__assign(tslib_1.__assign({ allowDisabledFocus: true, role: 'menuitem' }, item), { styles: CommandBar_styles_1.getCommandButtonStyles(item.buttonStyles), className: Utilities_1.css('ms-CommandBarItem-link', item.className), text: !item.iconOnly ? itemText : undefined, menuProps: item.subMenuProps, onClick: _this._onButtonClick(item) });
                if (item.iconOnly && itemText !== undefined) {
                    return (React.createElement(Tooltip_1.TooltipHost, tslib_1.__assign({ content: itemText }, item.tooltipHostProps), _this._commandButton(item, commandButtonProps)));
                }
                return _this._commandButton(item, commandButtonProps);
            };
            _this._commandButton = function (item, props) {
                var ButtonAs = _this.props.buttonAs;
                var CommandBarButtonAs = item.commandBarButtonAs;
                var DefaultButtonAs = Button_1.CommandBarButton;
                // The prop types between these three possible implementations overlap enough that a force-cast is safe.
                var Type = DefaultButtonAs;
                if (CommandBarButtonAs) {
                    Type = Utilities_1.composeComponentAs(CommandBarButtonAs, Type);
                }
                if (ButtonAs) {
                    Type = Utilities_1.composeComponentAs(ButtonAs, Type);
                }
                // Always pass the default implementation to the override so it may be composed.
                return React.createElement(Type, tslib_1.__assign({}, props));
            };
            _this._onRenderOverflowButton = function (overflowItems) {
                var _a = _this.props.overflowButtonProps, overflowButtonProps = _a === void 0 ? {} : _a;
                var combinedOverflowItems = tslib_1.__spreadArrays((overflowButtonProps.menuProps ? overflowButtonProps.menuProps.items : []), overflowItems);
                var overflowProps = tslib_1.__assign(tslib_1.__assign({ role: 'menuitem' }, overflowButtonProps), { styles: tslib_1.__assign({ menuIcon: { fontSize: '17px' } }, overflowButtonProps.styles), className: Utilities_1.css('ms-CommandBar-overflowButton', overflowButtonProps.className), menuProps: tslib_1.__assign(tslib_1.__assign({}, overflowButtonProps.menuProps), { items: combinedOverflowItems }), menuIconProps: tslib_1.__assign({ iconName: 'More' }, overflowButtonProps.menuIconProps) });
                var OverflowButtonType = _this.props.overflowButtonAs
                    ? Utilities_1.composeComponentAs(_this.props.overflowButtonAs, Button_1.CommandBarButton)
                    : Button_1.CommandBarButton;
                return React.createElement(OverflowButtonType, tslib_1.__assign({}, overflowProps));
            };
            _this._onReduceData = function (data) {
                var _a = _this.props, shiftOnReduce = _a.shiftOnReduce, onDataReduced = _a.onDataReduced;
                var primaryItems = data.primaryItems, overflowItems = data.overflowItems, cacheKey = data.cacheKey;
                // Use first item if shiftOnReduce, otherwise use last item
                var movedItem = primaryItems[shiftOnReduce ? 0 : primaryItems.length - 1];
                if (movedItem !== undefined) {
                    movedItem.renderedInOverflow = true;
                    overflowItems = tslib_1.__spreadArrays([movedItem], overflowItems);
                    primaryItems = shiftOnReduce ? primaryItems.slice(1) : primaryItems.slice(0, -1);
                    var newData = tslib_1.__assign(tslib_1.__assign({}, data), { primaryItems: primaryItems, overflowItems: overflowItems });
                    cacheKey = _this._computeCacheKey(newData);
                    if (onDataReduced) {
                        onDataReduced(movedItem);
                    }
                    newData.cacheKey = cacheKey;
                    return newData;
                }
                return undefined;
            };
            _this._onGrowData = function (data) {
                var _a = _this.props, shiftOnReduce = _a.shiftOnReduce, onDataGrown = _a.onDataGrown;
                var minimumOverflowItems = data.minimumOverflowItems;
                var primaryItems = data.primaryItems, overflowItems = data.overflowItems, cacheKey = data.cacheKey;
                var movedItem = overflowItems[0];
                // Make sure that moved item exists and is not one of the original overflow items
                if (movedItem !== undefined && overflowItems.length > minimumOverflowItems) {
                    movedItem.renderedInOverflow = false;
                    overflowItems = overflowItems.slice(1);
                    // if shiftOnReduce, movedItem goes first, otherwise, last.
                    primaryItems = shiftOnReduce ? tslib_1.__spreadArrays([movedItem], primaryItems) : tslib_1.__spreadArrays(primaryItems, [movedItem]);
                    var newData = tslib_1.__assign(tslib_1.__assign({}, data), { primaryItems: primaryItems, overflowItems: overflowItems });
                    cacheKey = _this._computeCacheKey(newData);
                    if (onDataGrown) {
                        onDataGrown(movedItem);
                    }
                    newData.cacheKey = cacheKey;
                    return newData;
                }
                return undefined;
            };
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        CommandBarBase.prototype.render = function () {
            var _a = this.props, items = _a.items, overflowItems = _a.overflowItems, farItems = _a.farItems, styles = _a.styles, theme = _a.theme, dataDidRender = _a.dataDidRender, _b = _a.onReduceData, onReduceData = _b === void 0 ? this._onReduceData : _b, _c = _a.onGrowData, onGrowData = _c === void 0 ? this._onGrowData : _c;
            var commandBarData = {
                primaryItems: tslib_1.__spreadArrays(items),
                overflowItems: tslib_1.__spreadArrays(overflowItems),
                minimumOverflowItems: tslib_1.__spreadArrays(overflowItems).length,
                farItems: farItems,
                cacheKey: '',
            };
            this._classNames = getClassNames(styles, { theme: theme });
            // ResizeGroup will render these attributes to the root <div>.
            // TODO We may need to elevate classNames from <FocusZone> into <ResizeGroup> ?
            var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
            return (React.createElement(ResizeGroup_1.ResizeGroup, tslib_1.__assign({}, nativeProps, { componentRef: this._resizeGroup, data: commandBarData, onReduceData: onReduceData, onGrowData: onGrowData, onRenderData: this._onRenderData, dataDidRender: dataDidRender })));
        };
        CommandBarBase.prototype.focus = function () {
            var overflowSet = this._overflowSet.current;
            overflowSet && overflowSet.focus();
        };
        CommandBarBase.prototype.remeasure = function () {
            this._resizeGroup.current && this._resizeGroup.current.remeasure();
        };
        CommandBarBase.prototype._onButtonClick = function (item) {
            return function (ev) {
                // inactive is deprecated. remove check in 7.0
                // tslint:disable-next-line:deprecation
                if (item.inactive) {
                    return;
                }
                if (item.onClick) {
                    item.onClick(ev, item);
                }
            };
        };
        CommandBarBase.prototype._computeCacheKey = function (data) {
            var primaryItems = data.primaryItems, _a = data.farItems, farItems = _a === void 0 ? [] : _a, overflowItems = data.overflowItems;
            var returnKey = function (acc, current) {
                var _a = current.cacheKey, cacheKey = _a === void 0 ? current.key : _a;
                return acc + cacheKey;
            };
            var primaryKey = primaryItems.reduce(returnKey, '');
            var farKey = farItems.reduce(returnKey, '');
            var overflowKey = !!overflowItems.length ? 'overflow' : '';
            return [primaryKey, farKey, overflowKey].join(' ');
        };
        CommandBarBase.defaultProps = {
            items: [],
            overflowItems: [],
        };
        return CommandBarBase;
    }(React.Component));
    exports.CommandBarBase = CommandBarBase;
});
//# sourceMappingURL=CommandBar.base.js.map