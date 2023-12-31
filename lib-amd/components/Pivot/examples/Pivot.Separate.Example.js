define(["require", "exports", "react", "office-ui-fabric-react/lib/Pivot"], function (require, exports, React, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getTabId = function (itemKey) {
        return "ShapeColorPivot_" + itemKey;
    };
    exports.PivotSeparateExample = function () {
        var _a = React.useState('rectangleRed'), selectedKey = _a[0], setSelectedKey = _a[1];
        var handleLinkClick = function (item) {
            setSelectedKey(item.props.itemKey);
        };
        return (React.createElement("div", null,
            React.createElement("div", { "aria-labelledby": getTabId(selectedKey), role: "tabpanel", style: {
                    float: 'left',
                    width: 100,
                    height: selectedKey === 'squareRed' ? 100 : 200,
                    background: selectedKey === 'rectangleGreen' ? 'green' : 'red',
                } }),
            React.createElement(Pivot_1.Pivot, { "aria-label": "Separately Rendered Content Pivot Example", selectedKey: selectedKey, onLinkClick: handleLinkClick, headersOnly: true, getTabId: getTabId },
                React.createElement(Pivot_1.PivotItem, { headerText: "Rectangle red", itemKey: "rectangleRed" }),
                React.createElement(Pivot_1.PivotItem, { headerText: "Square red", itemKey: "squareRed" }),
                React.createElement(Pivot_1.PivotItem, { headerText: "Rectangle green", itemKey: "rectangleGreen" }))));
    };
});
//# sourceMappingURL=Pivot.Separate.Example.js.map