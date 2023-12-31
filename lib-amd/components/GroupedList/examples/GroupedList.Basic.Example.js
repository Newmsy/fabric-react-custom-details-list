define(["require", "exports", "react", "office-ui-fabric-react/lib/GroupedList", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/Selection", "office-ui-fabric-react/lib/Toggle", "@uifabric/react-hooks", "@uifabric/example-data"], function (require, exports, React, GroupedList_1, DetailsList_1, FocusZone_1, Selection_1, Toggle_1, react_hooks_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var toggleStyles = { root: { marginBottom: '20px' } };
    var groupCount = 3;
    var groupDepth = 3;
    var items = example_data_1.createListItems(Math.pow(groupCount, groupDepth + 1));
    var columns = Object.keys(items[0])
        .slice(0, 3)
        .map(function (key) { return ({
        key: key,
        name: key,
        fieldName: key,
        minWidth: 300,
    }); });
    var groups = example_data_1.createGroups(groupCount, groupDepth, 0, groupCount);
    exports.GroupedListBasicExample = function () {
        var _a = react_hooks_1.useBoolean(false), isCompactMode = _a[0], toggleIsCompactMode = _a[1].toggle;
        var selection = react_hooks_1.useConst(function () {
            var s = new Selection_1.Selection();
            s.setItems(items, true);
            return s;
        });
        var onRenderCell = function (nestingDepth, item, itemIndex) {
            return (React.createElement(DetailsList_1.DetailsRow, { columns: columns, groupNestingDepth: nestingDepth, item: item, itemIndex: itemIndex, selection: selection, selectionMode: Selection_1.SelectionMode.multiple, compact: isCompactMode }));
        };
        return (React.createElement("div", null,
            React.createElement(Toggle_1.Toggle, { label: "Enable compact mode", checked: isCompactMode, onChange: toggleIsCompactMode, onText: "Compact", offText: "Normal", styles: toggleStyles }),
            React.createElement(FocusZone_1.FocusZone, null,
                React.createElement(Selection_1.SelectionZone, { selection: selection, selectionMode: Selection_1.SelectionMode.multiple },
                    React.createElement(GroupedList_1.GroupedList, { items: items, onRenderCell: onRenderCell, selection: selection, selectionMode: Selection_1.SelectionMode.multiple, groups: groups, compact: isCompactMode })))));
    };
});
//# sourceMappingURL=GroupedList.Basic.Example.js.map