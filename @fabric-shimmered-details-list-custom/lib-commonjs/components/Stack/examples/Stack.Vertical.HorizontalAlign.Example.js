"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
// Styles definition
var stackStyles = {
    root: {
        background: Styling_1.DefaultPalette.themeTertiary,
    },
};
var itemStyles = {
    alignItems: 'center',
    background: Styling_1.DefaultPalette.themePrimary,
    color: Styling_1.DefaultPalette.white,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
};
// Tokens definition
var stackTokens = { childrenGap: 5 };
exports.VerticalStackHorizontalAlignExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement("span", null, "Left-aligned"),
        React.createElement(Stack_1.Stack, { horizontalAlign: "start", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2")),
        React.createElement("span", null, "Horizontally centered"),
        React.createElement(Stack_1.Stack, { horizontalAlign: "center", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2")),
        React.createElement("span", null, "Right-aligned"),
        React.createElement(Stack_1.Stack, { horizontalAlign: "end", styles: stackStyles },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"))));
};
//# sourceMappingURL=Stack.Vertical.HorizontalAlign.Example.js.map