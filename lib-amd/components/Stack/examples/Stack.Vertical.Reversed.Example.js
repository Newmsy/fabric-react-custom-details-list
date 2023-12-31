define(["require", "exports", "react", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Stack_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Styles definition
    var stackStyles = {
        root: {
            background: Styling_1.DefaultPalette.themeTertiary,
        },
    };
    var stackItemStyles = {
        root: {
            background: Styling_1.DefaultPalette.themePrimary,
            color: Styling_1.DefaultPalette.white,
            padding: 5,
        },
    };
    // Tokens definition
    var containerStackTokens = { childrenGap: 5 };
    var verticalGapStackTokens = {
        childrenGap: 10,
        padding: 10,
    };
    var itemAlignmentsStackTokens = {
        childrenGap: 5,
        padding: 10,
    };
    var clickableStackTokens = {
        padding: 10,
    };
    exports.VerticalStackReversedExample = function () {
        return (React.createElement(Stack_1.Stack, { tokens: containerStackTokens },
            React.createElement("span", null, "Default vertical stack"),
            React.createElement(Stack_1.Stack, { reversed: true, styles: stackStyles },
                React.createElement("span", null, "Item One"),
                React.createElement("span", null, "Item Two"),
                React.createElement("span", null, "Item Three")),
            React.createElement("span", null, "Vertical gap between items"),
            React.createElement(Stack_1.Stack, { reversed: true, styles: stackStyles, tokens: verticalGapStackTokens },
                React.createElement("span", null, "Item One"),
                React.createElement("span", null, "Item Two"),
                React.createElement("span", null, "Item Three")),
            React.createElement("span", null, "Item alignments"),
            React.createElement(Stack_1.Stack, { reversed: true, styles: stackStyles, tokens: itemAlignmentsStackTokens },
                React.createElement(Stack_1.Stack.Item, { align: "auto", styles: stackItemStyles },
                    React.createElement("span", null, "Auto-aligned item")),
                React.createElement(Stack_1.Stack.Item, { align: "stretch", styles: stackItemStyles },
                    React.createElement("span", null, "Stretch-aligned item")),
                React.createElement(Stack_1.Stack.Item, { align: "baseline", styles: stackItemStyles },
                    React.createElement("span", null, "Baseline-aligned item")),
                React.createElement(Stack_1.Stack.Item, { align: "start", styles: stackItemStyles },
                    React.createElement("span", null, "Start-aligned item")),
                React.createElement(Stack_1.Stack.Item, { align: "center", styles: stackItemStyles },
                    React.createElement("span", null, "Center-aligned item")),
                React.createElement(Stack_1.Stack.Item, { align: "end", styles: stackItemStyles },
                    React.createElement("span", null, "End-aligned item"))),
            React.createElement("span", null, "Clickable vertical stack"),
            React.createElement(Stack_1.Stack, { onClick: _onClick, styles: stackStyles, tokens: clickableStackTokens },
                React.createElement("span", null, "Click inside this box"))));
    };
    function _onClick() {
        alert('Clicked VerticalStack');
    }
});
//# sourceMappingURL=Stack.Vertical.Reversed.Example.js.map