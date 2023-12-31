define(["require", "exports", "react", "office-ui-fabric-react"], function (require, exports, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Styles definition
    var stackStyles = {
        root: {
            background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
            height: 100,
        },
    };
    var itemStyles = {
        alignItems: 'center',
        background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
        color: office_ui_fabric_react_1.DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        width: 50,
    };
    // Tokens definition
    var stackTokens = { childrenGap: 5 };
    exports.HorizontalStackVerticalAlignExample = function () {
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: stackTokens },
            React.createElement("span", null, "Top-aligned"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, verticalAlign: "start", styles: stackStyles },
                React.createElement("span", { style: itemStyles }, "1"),
                React.createElement("span", { style: itemStyles }, "2"),
                React.createElement("span", { style: itemStyles }, "3")),
            React.createElement("span", null, "Vertically centered"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, verticalAlign: "center", styles: stackStyles },
                React.createElement("span", { style: itemStyles }, "1"),
                React.createElement("span", { style: itemStyles }, "2"),
                React.createElement("span", { style: itemStyles }, "3")),
            React.createElement("span", null, "Bottom-aligned"),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, verticalAlign: "end", styles: stackStyles },
                React.createElement("span", { style: itemStyles }, "1"),
                React.createElement("span", { style: itemStyles }, "2"),
                React.createElement("span", { style: itemStyles }, "3"))));
    };
});
//# sourceMappingURL=Stack.Horizontal.VerticalAlign.Example.js.map