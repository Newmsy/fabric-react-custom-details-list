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
var stackItemStyles = {
    root: {
        alignItems: 'center',
        background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
        color: office_ui_fabric_react_1.DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
    },
};
// Tokens definition
var stackTokens = {
    childrenGap: 5,
    padding: 10,
};
exports.HorizontalStackGrowExample = function () {
    return (React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: stackTokens },
        React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: 3, styles: stackItemStyles }, "Grow is 3"),
        React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: 2, styles: stackItemStyles }, "Grow is 2"),
        React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true, styles: stackItemStyles }, "Grow is 1")));
};
//# sourceMappingURL=Stack.Horizontal.Grow.Example.js.map