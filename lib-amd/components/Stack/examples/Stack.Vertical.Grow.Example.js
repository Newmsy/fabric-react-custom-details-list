define(["require", "exports", "react", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Stack_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Styles definition
    var stackStyles = {
        root: {
            background: Styling_1.DefaultPalette.themeTertiary,
            height: 250,
        },
    };
    var stackItemStyles = {
        root: {
            alignItems: 'center',
            background: Styling_1.DefaultPalette.themePrimary,
            color: Styling_1.DefaultPalette.white,
            display: 'flex',
            justifyContent: 'center',
        },
    };
    // Tokens definition
    var outerStackTokens = { childrenGap: 5 };
    var innerStackTokens = {
        childrenGap: 5,
        padding: 10,
    };
    exports.VerticalStackGrowExample = function () {
        return (React.createElement(Stack_1.Stack, { tokens: outerStackTokens },
            React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: innerStackTokens },
                React.createElement(Stack_1.Stack.Item, { grow: 3, styles: stackItemStyles }, "Grow is 3"),
                React.createElement(Stack_1.Stack.Item, { grow: 2, styles: stackItemStyles }, "Grow is 2"),
                React.createElement(Stack_1.Stack.Item, { grow: true, styles: stackItemStyles }, "Grow is 1"))));
    };
});
//# sourceMappingURL=Stack.Vertical.Grow.Example.js.map