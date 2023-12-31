import { __assign, __spreadArrays } from "tslib";
import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { SelectedPeopleList, ExtendedSelectedItem, } from 'office-ui-fabric-react/lib/SelectedItemsList';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { people, groupOne, groupTwo } from '@uifabric/example-data';
var primaryButtonStyles = { root: { display: 'block', marginBottom: 20 } };
var stackStyles = { root: { maxWidth: '100%' } };
var onRenderItem = function (props) {
    return React.createElement(ExtendedSelectedItem, __assign({}, props));
};
var onCopyItems = function (items) {
    return items.map(function (item) { return item.text; }).join(', ');
};
export var SelectedPeopleListControlledExample = function () {
    var _a = React.useState(0), nextPersonIndex = _a[0], setNextPersonIndex = _a[1];
    var _b = React.useState([people[40]]), currentSelectedItems = _b[0], setCurrentSelectedItems = _b[1];
    var selectionList = React.useRef(null);
    var onAddItemButtonClicked = function () {
        setCurrentSelectedItems(__spreadArrays(currentSelectedItems, [people[nextPersonIndex]]));
        setNextPersonIndex(nextPersonIndex + 1);
    };
    var onExpandItem = function (item) {
        var expandedItem = item.text === 'Group One' ? groupOne : item.text === 'Group Two' ? groupTwo : [];
        var indexToExpand = currentSelectedItems.indexOf(item);
        setCurrentSelectedItems(currentSelectedItems
            .slice(0, indexToExpand)
            .concat(expandedItem)
            .concat(currentSelectedItems.slice(indexToExpand + 1)));
    };
    var onItemDeleted = function (item) {
        var indexToRemove = currentSelectedItems.indexOf(item);
        var newSelectedItems = __spreadArrays(currentSelectedItems);
        newSelectedItems.splice(indexToRemove, 1);
        setCurrentSelectedItems(newSelectedItems);
    };
    return (React.createElement("div", null,
        React.createElement(PrimaryButton, { text: "Add another item", onClick: onAddItemButtonClicked, disabled: nextPersonIndex >= people.length, styles: primaryButtonStyles }),
        React.createElement(Stack, { horizontal: true, wrap: true, styles: stackStyles },
            React.createElement(SelectedPeopleList, { key: "normal", removeButtonAriaLabel: "Remove", selectedItems: currentSelectedItems, componentRef: selectionList, onCopyItems: onCopyItems, onExpandGroup: onExpandItem, copyMenuItemText: "Copy", removeMenuItemText: "Remove", onRenderItem: onRenderItem, onItemDeleted: onItemDeleted }))));
};
//# sourceMappingURL=SelectedPeopleList.Controlled.Example.js.map