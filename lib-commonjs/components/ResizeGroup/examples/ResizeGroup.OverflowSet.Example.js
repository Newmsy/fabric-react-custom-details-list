"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var ResizeGroup_1 = require("office-ui-fabric-react/lib-commonjs/ResizeGroup");
var OverflowSet_1 = require("office-ui-fabric-react/lib-commonjs/OverflowSet");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var react_hooks_1 = require("@uifabric/react-hooks");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var styles = office_ui_fabric_react_1.mergeStyleSets({
    root: {
        display: 'block',
    },
    settingsGroup: {
        paddingTop: '20px',
    },
    itemCountDropdown: {
        width: '180px',
    },
});
var overflowSetStyles = { root: { height: 40 } };
var dropdownOptions = [
    { key: '20', text: '20' },
    { key: '30', text: '30' },
    { key: '40', text: '40' },
    { key: '50', text: '50' },
    { key: '75', text: '75' },
    { key: '100', text: '100' },
    { key: '200', text: '200' },
];
var generateData = function (count, cachingEnabled, checked) {
    var icons = ['Add', 'Share', 'Upload'];
    var dataItems = [];
    var cacheKey = '';
    for (var index = 0; index < count; index++) {
        var item = {
            key: "item" + index,
            name: "Item " + index,
            icon: icons[index % icons.length],
            checked: checked,
        };
        cacheKey = cacheKey + item.key;
        dataItems.push(item);
    }
    var result = {
        primary: dataItems,
        overflow: [],
    };
    if (cachingEnabled) {
        result = tslib_1.__assign(tslib_1.__assign({}, result), { cacheKey: cacheKey });
    }
    return result;
};
var computeCacheKey = function (primaryControls) {
    return primaryControls.reduce(function (acc, current) { return acc + current.key; }, '');
};
var onRenderItem = function (item) { return (React.createElement(Button_1.CommandBarButton, { role: "menuitem", text: item.name, iconProps: { iconName: item.icon }, onClick: item.onClick, checked: item.checked })); };
exports.ResizeGroupOverflowSetExample = function () {
    var _a = React.useState(20), numberOfItems = _a[0], setNumberOfItems = _a[1];
    var _b = react_hooks_1.useBoolean(false), buttonsChecked = _b[0], toggleButtonsChecked = _b[1].toggle;
    var _c = react_hooks_1.useBoolean(false), cachingEnabled = _c[0], toggleCachingEnabled = _c[1].toggle;
    var _d = react_hooks_1.useBoolean(false), onGrowDataEnabled = _d[0], toggleOnGrowDataEnabled = _d[1].toggle;
    var dataToRender = generateData(numberOfItems, cachingEnabled, buttonsChecked);
    var onReduceData = function (currentData) {
        if (currentData.primary.length === 0) {
            return undefined;
        }
        var overflow = tslib_1.__spreadArrays(currentData.primary.slice(-1), currentData.overflow);
        var primary = currentData.primary.slice(0, -1);
        var cacheKey = undefined;
        if (cachingEnabled) {
            cacheKey = computeCacheKey(primary);
        }
        return { primary: primary, overflow: overflow, cacheKey: cacheKey };
    };
    var onGrowData = function (currentData) {
        if (currentData.overflow.length === 0) {
            return undefined;
        }
        var overflow = currentData.overflow.slice(1);
        var primary = tslib_1.__spreadArrays(currentData.primary, currentData.overflow.slice(0, 1));
        var cacheKey = undefined;
        if (cachingEnabled) {
            cacheKey = computeCacheKey(primary);
        }
        return { primary: primary, overflow: overflow, cacheKey: cacheKey };
    };
    var onRenderOverflowButton = function (overflowItems) { return (React.createElement(Button_1.CommandBarButton, { role: "menuitem", menuProps: { items: overflowItems } })); };
    var onRenderData = function (data) {
        return (React.createElement(OverflowSet_1.OverflowSet, { role: "menubar", items: data.primary, overflowItems: data.overflow.length ? data.overflow : null, onRenderItem: onRenderItem, onRenderOverflowButton: onRenderOverflowButton, styles: overflowSetStyles }));
    };
    var onNumberOfItemsChanged = function (event, option) {
        setNumberOfItems(parseInt(option.text, 10));
    };
    return (React.createElement("div", null,
        React.createElement(ResizeGroup_1.ResizeGroup, { role: "tabpanel", "aria-label": "Resize Group with an Overflow Set", data: dataToRender, onReduceData: onReduceData, onGrowData: onGrowDataEnabled ? onGrowData : undefined, onRenderData: onRenderData }),
        React.createElement("div", { className: styles.settingsGroup },
            React.createElement(Toggle_1.Toggle, { label: "Enable caching", onChange: toggleCachingEnabled, checked: cachingEnabled }),
            React.createElement(Toggle_1.Toggle, { label: "Enable onGrowData", onChange: toggleOnGrowDataEnabled, checked: onGrowDataEnabled }),
            React.createElement(Toggle_1.Toggle, { label: "Buttons checked", onChange: toggleButtonsChecked, checked: buttonsChecked }),
            React.createElement("div", { className: styles.itemCountDropdown },
                React.createElement(Dropdown_1.Dropdown, { label: "Number of items to render", selectedKey: numberOfItems.toString(), onChange: onNumberOfItemsChanged, options: dropdownOptions })))));
};
//# sourceMappingURL=ResizeGroup.OverflowSet.Example.js.map