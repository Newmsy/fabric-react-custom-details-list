"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
// Non-mutating styles definition
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
var sectionStackTokens = { childrenGap: 10 };
var wrapStackTokens = { childrenGap: 30 };
exports.HorizontalStackWrapExample = function () {
    var _a = React.useState(100), stackWidth = _a[0], setStackWidth = _a[1];
    // Mutating styles definition
    var stackStyles = {
        root: {
            background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
            width: stackWidth + "%",
        },
    };
    return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: sectionStackTokens },
        React.createElement(office_ui_fabric_react_1.Slider, { label: "Change the stack width to see how child items wrap onto multiple rows:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: setStackWidth }),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, styles: stackStyles, tokens: wrapStackTokens },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3"),
            React.createElement("span", { style: itemStyles }, "4"),
            React.createElement("span", { style: itemStyles }, "5"),
            React.createElement("span", { style: itemStyles }, "6"),
            React.createElement("span", { style: itemStyles }, "7"),
            React.createElement("span", { style: itemStyles }, "8"),
            React.createElement("span", { style: itemStyles }, "9"),
            React.createElement("span", { style: itemStyles }, "10"))));
};
//# sourceMappingURL=Stack.Horizontal.Wrap.Example.js.map