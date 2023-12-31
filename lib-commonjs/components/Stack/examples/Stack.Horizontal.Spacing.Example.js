"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
// Styles definition
var stackStyles = {
    root: {
        background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
        width: 300,
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
var sectionStackTokens = { childrenGap: 10 };
var numericalSpacingStackTokens = {
    childrenGap: 10,
    padding: 10,
};
var customSpacingStackTokens = {
    childrenGap: '10%',
    padding: 's1 15%',
};
var themedExtraSmallStackTokens = {
    childrenGap: 's2',
    padding: 's2',
};
var themedSmallStackTokens = {
    childrenGap: 's1',
    padding: 's1',
};
var themedMediumStackTokens = {
    childrenGap: 'm',
    padding: 'm',
};
var themedLargeStackTokens = {
    childrenGap: 'l1',
    padding: 'l1',
};
var themedExtraLargeStackTokens = {
    childrenGap: 'l2',
    padding: 'l2',
};
exports.HorizontalStackSpacingExample = function () {
    return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: sectionStackTokens },
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between" },
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Numerical spacing"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: numericalSpacingStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3"))),
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Custom spacing"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: customSpacingStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3")))),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between" },
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Themed spacing (extra small)"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: themedExtraSmallStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3"))),
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Themed spacing (small)"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: themedSmallStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3"))),
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Themed spacing (medium)"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: themedMediumStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3")))),
        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-between" },
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Themed spacing (large)"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: themedLargeStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3"))),
            React.createElement(office_ui_fabric_react_1.Stack, null,
                React.createElement("span", null, "Themed spacing (extra large)"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: themedExtraLargeStackTokens },
                    React.createElement("span", { style: itemStyles }, "1"),
                    React.createElement("span", { style: itemStyles }, "2"),
                    React.createElement("span", { style: itemStyles }, "3"))))));
};
//# sourceMappingURL=Stack.Horizontal.Spacing.Example.js.map