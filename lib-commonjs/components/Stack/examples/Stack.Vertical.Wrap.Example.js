"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Slider_1 = require("office-ui-fabric-react/lib-commonjs/Slider");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
// Non-mutating styles definition
var itemStyles = {
    alignItems: 'center',
    background: Styling_1.DefaultPalette.themePrimary,
    color: Styling_1.DefaultPalette.white,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    width: 50,
};
// Tokens definition
var sectionStackTokens = { childrenGap: 10 };
var wrapStackTokens = { childrenGap: 20 };
exports.VerticalStackWrapExample = function () {
    var _a = React.useState(420), stackHeight = _a[0], setStackHeight = _a[1];
    // Mutating styles definition
    var stackStyles = {
        root: {
            background: Styling_1.DefaultPalette.themeTertiary,
            height: stackHeight,
        },
    };
    return (React.createElement(Stack_1.Stack, { tokens: sectionStackTokens },
        React.createElement(Slider_1.Slider, { label: "Change the stack height to see how child items wrap onto multiple columns:", min: 1, max: 420, step: 1, defaultValue: 420, showValue: true, onChange: setStackHeight }),
        React.createElement(Stack_1.Stack, { wrap: true, styles: stackStyles, tokens: wrapStackTokens },
            React.createElement("span", { style: itemStyles }, "1"),
            React.createElement("span", { style: itemStyles }, "2"),
            React.createElement("span", { style: itemStyles }, "3"),
            React.createElement("span", { style: itemStyles }, "4"),
            React.createElement("span", { style: itemStyles }, "5"),
            React.createElement("span", { style: itemStyles }, "6"))));
};
//# sourceMappingURL=Stack.Vertical.Wrap.Example.js.map