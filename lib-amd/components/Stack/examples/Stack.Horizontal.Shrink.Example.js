define(["require", "exports", "react", "office-ui-fabric-react"], function (require, exports, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Non-mutating styles definition
    var stackItemStyles = {
        root: {
            alignItems: 'center',
            background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
            color: office_ui_fabric_react_1.DefaultPalette.white,
            display: 'flex',
            height: 50,
            justifyContent: 'center',
            overflow: 'hidden',
        },
    };
    var nonShrinkingStackItemStyles = {
        root: {
            alignItems: 'center',
            background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
            color: office_ui_fabric_react_1.DefaultPalette.white,
            display: 'flex',
            height: 50,
            justifyContent: 'center',
            overflow: 'hidden',
            width: 500,
        },
    };
    // Tokens definition
    var outerStackTokens = { childrenGap: 5 };
    var innerStackTokens = {
        childrenGap: 5,
        padding: 10,
    };
    exports.HorizontalStackShrinkExample = function () {
        var _a = React.useState(100), stackWidth = _a[0], setStackWidth = _a[1];
        // Mutating styles definition
        var stackStyles = {
            root: {
                background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                overflow: 'hidden',
                width: stackWidth + "%",
            },
        };
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: outerStackTokens },
            React.createElement(office_ui_fabric_react_1.Slider, { label: "Change the stack width to see how child items shrink:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: setStackWidth }),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, styles: stackStyles, tokens: innerStackTokens },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true, disableShrink: true, styles: nonShrinkingStackItemStyles }, "I don't shrink"),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"))));
    };
});
//# sourceMappingURL=Stack.Horizontal.Shrink.Example.js.map