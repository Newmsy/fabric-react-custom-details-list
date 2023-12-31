"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var generateData = function (count, cachingEnabled, checked) {
    var icons = ['Add', 'Share', 'Upload'];
    var cacheKey = '';
    var dataItems = office_ui_fabric_react_1.createArray(count, function (index) {
        cacheKey = cacheKey + ("item" + index);
        return {
            key: "item" + index,
            name: "Item " + index,
            icon: icons[index % icons.length],
            checked: checked,
        };
    });
    var result = {
        primary: dataItems,
        overflow: [],
    };
    if (cachingEnabled) {
        result = tslib_1.__assign(tslib_1.__assign({}, result), { cacheKey: cacheKey });
    }
    return result;
};
var buttonStyles = {
    root: {
        paddingBottom: 10,
        paddingTop: 10,
        width: 100,
    },
};
var exampleHeight = '40vh';
var resizeRootClassName = office_ui_fabric_react_1.mergeStyles({ height: exampleHeight });
var dataToRender = generateData(20, false, false);
var onRenderItem = function (item) { return (React.createElement(office_ui_fabric_react_1.CommandBarButton, { role: "menuitem", text: item.name, iconProps: { iconName: item.icon }, onClick: item.onClick, checked: item.checked, styles: buttonStyles })); };
var onRenderOverflowButton = function (overflowItems) { return (React.createElement(office_ui_fabric_react_1.CommandBarButton, { role: "menuitem", styles: buttonStyles, menuIconProps: { iconName: 'ChevronRight' }, menuProps: { items: overflowItems, directionalHint: office_ui_fabric_react_1.DirectionalHint.rightCenter } })); };
var onRenderData = function (data) { return (React.createElement(office_ui_fabric_react_1.OverflowSet, { role: "menubar", vertical: true, items: data.primary, overflowItems: data.overflow.length ? data.overflow : null, onRenderItem: onRenderItem, onRenderOverflowButton: onRenderOverflowButton })); };
var onReduceData = function (currentData) {
    if (currentData.primary.length === 0) {
        return undefined;
    }
    var overflow = tslib_1.__spreadArrays(currentData.primary.slice(-1), currentData.overflow);
    var primary = currentData.primary.slice(0, -1);
    return { primary: primary, overflow: overflow, undefined: undefined };
};
exports.ResizeGroupVerticalOverflowSetExample = function () { return (React.createElement(office_ui_fabric_react_1.ResizeGroup, { className: resizeRootClassName, role: "tabpanel", "aria-label": "Vertical Resize Group with an Overflow Set", direction: office_ui_fabric_react_1.ResizeGroupDirection.vertical, data: dataToRender, onReduceData: onReduceData, onRenderData: onRenderData })); };
//# sourceMappingURL=ResizeGroup.VerticalOverflowSet.Example.js.map