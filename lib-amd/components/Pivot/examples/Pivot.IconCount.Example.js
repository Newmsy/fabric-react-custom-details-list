define(["require", "exports", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/Pivot"], function (require, exports, React, Label_1, Icon_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var labelStyles = {
        root: { marginTop: 10 },
    };
    exports.PivotIconCountExample = function () {
        return (React.createElement("div", null,
            React.createElement(Pivot_1.Pivot, { "aria-label": "Count and Icon Pivot Example" },
                React.createElement(Pivot_1.PivotItem, { headerText: "My Files", itemCount: 42, itemIcon: "Emoji2" },
                    React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #1")),
                React.createElement(Pivot_1.PivotItem, { itemCount: 23, itemIcon: "Recent" },
                    React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #2")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Placeholder", itemIcon: "Globe" },
                    React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #3")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me", itemIcon: "Ringer", itemCount: 1 },
                    React.createElement(Label_1.Label, { styles: labelStyles }, "Pivot #4")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Customized Rendering", itemIcon: "Globe", itemCount: 10, onRenderItemLink: _customRenderer },
                    React.createElement(Label_1.Label, { styles: labelStyles }, "Customized Rendering")))));
    };
    function _customRenderer(link, defaultRenderer) {
        return (React.createElement("span", null,
            defaultRenderer(link),
            React.createElement(Icon_1.Icon, { iconName: "Airplane", style: { color: 'red' } })));
    }
});
//# sourceMappingURL=Pivot.IconCount.Example.js.map