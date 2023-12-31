define(["require", "exports", "react", "office-ui-fabric-react"], function (require, exports, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Styles definition
    var stackStyles = {
        root: {
            background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
        },
    };
    var stackItemStyles = {
        root: {
            background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
            color: office_ui_fabric_react_1.DefaultPalette.white,
            padding: 5,
        },
    };
    var itemAlignmentsStackStyles = {
        root: {
            background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
            height: 100,
        },
    };
    // Tokens definition
    var containerStackTokens = { childrenGap: 5 };
    var horizontalGapStackTokens = {
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
    exports.HorizontalStackReversedExample = function () {
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: containerStackTokens },
            React.createElement("span", null, "Default horizontal stack"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, reversed: true, disableShrink: true, styles: stackStyles },
                React.createElement("span", null, "Item One"),
                React.createElement("span", null, "Item Two"),
                React.createElement("span", null, "Item Three")),
            React.createElement("span", null, "Horizontal gap between items"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, reversed: true, disableShrink: true, styles: stackStyles, tokens: horizontalGapStackTokens },
                React.createElement("span", null, "Item One"),
                React.createElement("span", null, "Item Two"),
                React.createElement("span", null, "Item Three")),
            React.createElement("span", null, "Item alignments"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, reversed: true, disableShrink: true, styles: itemAlignmentsStackStyles, tokens: itemAlignmentsStackTokens },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "auto", styles: stackItemStyles },
                    React.createElement("span", null, "Auto-aligned item")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "stretch", styles: stackItemStyles },
                    React.createElement("span", null, "Stretch-aligned item")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "baseline", styles: stackItemStyles },
                    React.createElement("span", null, "Baseline-aligned item")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "start", styles: stackItemStyles },
                    React.createElement("span", null, "Start-aligned item")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "center", styles: stackItemStyles },
                    React.createElement("span", null, "Center-aligned item")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "end", styles: stackItemStyles },
                    React.createElement("span", null, "End-aligned item"))),
            React.createElement("span", null, "Clickable stack"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, onClick: _onClick, styles: stackStyles, tokens: clickableStackTokens },
                React.createElement("span", null, "Click inside this box"))));
    };
    function _onClick() {
        alert('Clicked Stack');
    }
});
//# sourceMappingURL=Stack.Horizontal.Reversed.Example.js.map