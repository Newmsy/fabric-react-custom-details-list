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
    var sectionStackTokens = { childrenGap: 10 };
    var headingStackTokens = { childrenGap: 30 };
    exports.VerticalStackVerticalAlignExample = function () {
        return (React.createElement(Stack_1.Stack, { tokens: sectionStackTokens },
            React.createElement(Stack_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between", tokens: headingStackTokens },
                React.createElement(Stack_1.Stack, { grow: true },
                    React.createElement("span", null, "Top-aligned"),
                    React.createElement(Stack_1.Stack, { verticalAlign: "start", styles: stackStyles },
                        React.createElement("span", { style: itemStyles }, "1"),
                        React.createElement("span", { style: itemStyles }, "2"),
                        React.createElement("span", { style: itemStyles }, "3"))),
                React.createElement(Stack_1.Stack, { grow: true },
                    React.createElement("span", null, "Vertically centered"),
                    React.createElement(Stack_1.Stack, { verticalAlign: "center", styles: stackStyles },
                        React.createElement("span", { style: itemStyles }, "1"),
                        React.createElement("span", { style: itemStyles }, "2"),
                        React.createElement("span", { style: itemStyles }, "3"))),
                React.createElement(Stack_1.Stack, { grow: true },
                    React.createElement("span", null, "Bottom-aligned"),
                    React.createElement(Stack_1.Stack, { verticalAlign: "end", styles: stackStyles },
                        React.createElement("span", { style: itemStyles }, "1"),
                        React.createElement("span", { style: itemStyles }, "2"),
                        React.createElement("span", { style: itemStyles }, "3")))),
            React.createElement(Stack_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between", tokens: headingStackTokens },
                React.createElement(Stack_1.Stack, { grow: true },
                    React.createElement("span", null, "Vertical space around items"),
                    React.createElement(Stack_1.Stack, { verticalAlign: "space-around", styles: stackStyles },
                        React.createElement("span", { style: itemStyles }, "1"),
                        React.createElement("span", { style: itemStyles }, "2"),
                        React.createElement("span", { style: itemStyles }, "3"))),
                React.createElement(Stack_1.Stack, { grow: true },
                    React.createElement("span", null, "Vertical space between items"),
                    React.createElement(Stack_1.Stack, { verticalAlign: "space-between", styles: stackStyles },
                        React.createElement("span", { style: itemStyles }, "1"),
                        React.createElement("span", { style: itemStyles }, "2"),
                        React.createElement("span", { style: itemStyles }, "3"))),
                React.createElement(Stack_1.Stack, { grow: true },
                    React.createElement("span", null, "Items vertically evenly spaced"),
                    React.createElement(Stack_1.Stack, { verticalAlign: "space-evenly", styles: stackStyles },
                        React.createElement("span", { style: itemStyles }, "1"),
                        React.createElement("span", { style: itemStyles }, "2"),
                        React.createElement("span", { style: itemStyles }, "3"))))));
    };
});
//# sourceMappingURL=Stack.Vertical.VerticalAlign.Example.js.map