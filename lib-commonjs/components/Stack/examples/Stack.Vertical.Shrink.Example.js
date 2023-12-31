"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Slider_1 = require("office-ui-fabric-react/lib-commonjs/Slider");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
// Non-mutating styles definition
var stackItemStyles = {
    root: {
        alignItems: 'center',
        background: Styling_1.DefaultPalette.themePrimary,
        color: Styling_1.DefaultPalette.white,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    },
};
var containerStyles = {
    height: 200,
};
var nonShrinkingStackItemStyles = {
    root: {
        alignItems: 'center',
        background: Styling_1.DefaultPalette.themePrimary,
        color: Styling_1.DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
    },
};
// Tokens definition
var outerStackTokens = { childrenGap: 5 };
var innerStackTokens = {
    childrenGap: 5,
    padding: 10,
};
exports.VerticalStackShrinkExample = function () {
    var _a = React.useState(100), stackHeight = _a[0], setStackHeight = _a[1];
    // Mutating styles definition
    var stackStyles = {
        root: {
            background: Styling_1.DefaultPalette.themeTertiary,
            height: stackHeight + "%",
            overflow: 'hidden',
        },
    };
    return (React.createElement(Stack_1.Stack, { tokens: outerStackTokens },
        React.createElement(Slider_1.Slider, { label: "Change the stack height to see how child items shrink:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: setStackHeight }),
        React.createElement("div", { className: Styling_1.mergeStyles(containerStyles) },
            React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: innerStackTokens },
                React.createElement(Stack_1.Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"),
                React.createElement(Stack_1.Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"),
                React.createElement(Stack_1.Stack.Item, { grow: true, disableShrink: true, styles: nonShrinkingStackItemStyles }, "I don't shrink"),
                React.createElement(Stack_1.Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink")))));
};
//# sourceMappingURL=Stack.Vertical.Shrink.Example.js.map