define(["require", "exports", "react", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Stack_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Styles definition
    var stackStyles = {
        root: {
            background: Styling_1.DefaultPalette.themeTertiary,
        },
    };
    var stackItemStyles = Styling_1.mergeStyles({
        alignItems: 'center',
        background: Styling_1.DefaultPalette.themePrimary,
        color: Styling_1.DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        width: 50,
    });
    // Tokens definition
    var sectionStackTokens = { childrenGap: 10 };
    var headingStackTokens = { childrenGap: 50 };
    var numericalSpacingStackTokens = {
        childrenGap: 10,
        padding: 10,
    };
    var customSpacingStackTokens = {
        childrenGap: '20%',
        padding: 'm 40px',
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
    exports.VerticalStackSpacingExample = function () {
        return (React.createElement(Stack_1.Stack, { tokens: sectionStackTokens },
            React.createElement(Stack_1.Stack, { horizontal: true, disableShrink: true, tokens: headingStackTokens },
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Numerical spacing"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: numericalSpacingStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3"))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Custom spacing"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: customSpacingStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3")))),
            React.createElement(Stack_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between" },
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (extra small)"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: themedExtraSmallStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3"))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (small)"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: themedSmallStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3"))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (medium)"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: themedMediumStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3"))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (large)"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: themedLargeStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3"))),
                React.createElement(Stack_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (extra large)"),
                    React.createElement(Stack_1.Stack, { styles: stackStyles, tokens: themedExtraLargeStackTokens },
                        React.createElement("span", { className: stackItemStyles }, "1"),
                        React.createElement("span", { className: stackItemStyles }, "2"),
                        React.createElement("span", { className: stackItemStyles }, "3"))))));
    };
});
//# sourceMappingURL=Stack.Vertical.Spacing.Example.js.map