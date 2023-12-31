define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/SelectedItemsList", "office-ui-fabric-react/lib/Stack", "@uifabric/example-data"], function (require, exports, tslib_1, React, Button_1, SelectedItemsList_1, Stack_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var primaryButtonStyles = { root: { display: 'block', marginBottom: 20 } };
    var stackStyles = { root: { maxWidth: '100%' } };
    var onRenderItem = function (props) {
        return React.createElement(SelectedItemsList_1.ExtendedSelectedItem, tslib_1.__assign({}, props));
    };
    var onCopyItems = function (items) {
        return items.map(function (item) { return item.text; }).join(', ');
    };
    exports.SelectedPeopleListControlledExample = function () {
        var _a = React.useState(0), nextPersonIndex = _a[0], setNextPersonIndex = _a[1];
        var _b = React.useState([example_data_1.people[40]]), currentSelectedItems = _b[0], setCurrentSelectedItems = _b[1];
        var selectionList = React.useRef(null);
        var onAddItemButtonClicked = function () {
            setCurrentSelectedItems(tslib_1.__spreadArrays(currentSelectedItems, [example_data_1.people[nextPersonIndex]]));
            setNextPersonIndex(nextPersonIndex + 1);
        };
        var onExpandItem = function (item) {
            var expandedItem = item.text === 'Group One' ? example_data_1.groupOne : item.text === 'Group Two' ? example_data_1.groupTwo : [];
            var indexToExpand = currentSelectedItems.indexOf(item);
            setCurrentSelectedItems(currentSelectedItems
                .slice(0, indexToExpand)
                .concat(expandedItem)
                .concat(currentSelectedItems.slice(indexToExpand + 1)));
        };
        var onItemDeleted = function (item) {
            var indexToRemove = currentSelectedItems.indexOf(item);
            var newSelectedItems = tslib_1.__spreadArrays(currentSelectedItems);
            newSelectedItems.splice(indexToRemove, 1);
            setCurrentSelectedItems(newSelectedItems);
        };
        return (React.createElement("div", null,
            React.createElement(Button_1.PrimaryButton, { text: "Add another item", onClick: onAddItemButtonClicked, disabled: nextPersonIndex >= example_data_1.people.length, styles: primaryButtonStyles }),
            React.createElement(Stack_1.Stack, { horizontal: true, wrap: true, styles: stackStyles },
                React.createElement(SelectedItemsList_1.SelectedPeopleList, { key: "normal", removeButtonAriaLabel: "Remove", selectedItems: currentSelectedItems, componentRef: selectionList, onCopyItems: onCopyItems, onExpandGroup: onExpandItem, copyMenuItemText: "Copy", removeMenuItemText: "Remove", onRenderItem: onRenderItem, onItemDeleted: onItemDeleted }))));
    };
});
//# sourceMappingURL=SelectedPeopleList.Controlled.Example.js.map