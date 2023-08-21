define(["require", "exports", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Pivot"], function (require, exports, React, Label_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var labelStyles = {
        root: { marginTop: 10 },
    };
    exports.PivotBasicExample = function () {
        return (React.createElement(Pivot_1.Pivot, { "aria-label": "Basic Pivot Example" },
            React.createElement(Pivot_1.PivotItem, { headerText: "My Files", headerButtonProps: {
                    'data-order': 1,
                    'data-title': 'My Files Title',
                } },
                React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #1")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Recent" },
                React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #2")),
            React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me" },
                React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #3"))));
    };
});
//# sourceMappingURL=Pivot.Basic.Example.js.map