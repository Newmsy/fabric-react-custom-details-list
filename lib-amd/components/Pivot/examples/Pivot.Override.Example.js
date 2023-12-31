define(["require", "exports", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Pivot"], function (require, exports, React, Label_1, Button_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PivotOverrideExample = function () {
        var _a = React.useState(0), selectedKey = _a[0], setSelectedKey = _a[1];
        var DefaultButtonOnClick = function () {
            setSelectedKey((selectedKey + 1) % 3);
        };
        return (React.createElement("div", null,
            React.createElement(Pivot_1.Pivot, { "aria-label": "Override Selected Item Pivot Example", selectedKey: String(selectedKey) },
                React.createElement(Pivot_1.PivotItem, { headerText: "My Files", itemKey: "0" },
                    React.createElement(Label_1.Label, null, "Pivot #1")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Recent", itemKey: "1" },
                    React.createElement(Label_1.Label, null, "Pivot #2")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me", itemKey: "2" },
                    React.createElement(Label_1.Label, null, "Pivot #3"))),
            React.createElement(Button_1.DefaultButton, { onClick: DefaultButtonOnClick }, "Select next item")));
    };
});
//# sourceMappingURL=Pivot.Override.Example.js.map