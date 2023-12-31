"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
// Styles definition
var stackStyles = {
    root: {
        background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
    },
};
var itemStyles = {
    alignItems: 'center',
    background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
    color: office_ui_fabric_react_1.DefaultPalette.white,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
};
// Tokens definition
var stackTokens = { childrenGap: 5 };
exports.HorizontalStackHorizontalAlignExample = function () {
    return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: stackTokens },
        React.createElement("span", null, "Left-aligned"),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "start", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3")),
        React.createElement("span", null, "Horizontally centered"),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "center", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3")),
        React.createElement("span", null, "Right-aligned"),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "end", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3")),
        React.createElement("span", null, "Horizontal space around items"),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-around", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3")),
        React.createElement("span", null, "Horizontal space between items"),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-between", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3")),
        React.createElement("span", null, "Items horizontally evenly spaced"),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-evenly", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3"))));
};
//# sourceMappingURL=Stack.Horizontal.HorizontalAlign.Example.js.map