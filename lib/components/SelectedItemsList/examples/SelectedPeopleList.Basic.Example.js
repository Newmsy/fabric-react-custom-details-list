import { __assign } from "tslib";
import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { SelectedPeopleList, ExtendedSelectedItem, } from 'office-ui-fabric-react/lib/SelectedItemsList';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { people, groupOne, groupTwo } from '@uifabric/example-data';
var primaryButtonStyles = { root: { display: 'block', marginBottom: 20 } };
var onRenderItem = function (props) {
    return React.createElement(ExtendedSelectedItem, __assign({}, props));
};
var onCopyItems = function (items) {
    return items.map(function (item) { return item.text; }).join(', ');
};
export var SelectedPeopleListBasicExample = function () {
    var _a = React.useState(0), nextPersonIndex = _a[0], setNextPersonIndex = _a[1];
    var selectionList = React.useRef(null);
    var onExpandItem = function (item) {
        var expandedItem = item.text === 'Group One' ? groupOne : item.text === 'Group Two' ? groupTwo : [];
        selectionList.current.replaceItem(item, expandedItem);
    };
    var onAddItemButtonClicked = function () {
        if (selectionList.current) {
            selectionList.current.addItems([people[nextPersonIndex]]);
            setNextPersonIndex(nextPersonIndex + 1);
        }
    };
    return (React.createElement("div", null,
        React.createElement(PrimaryButton, { text: "Add another item", onClick: onAddItemButtonClicked, disabled: nextPersonIndex >= people.length, styles: primaryButtonStyles }),
        React.createElement(Stack, { horizontal: true, wrap: true },
            React.createElement(SelectedPeopleList, { key: "normal", removeButtonAriaLabel: "Remove", defaultSelectedItems: [people[40]], componentRef: selectionList, onCopyItems: onCopyItems, onExpandGroup: onExpandItem, copyMenuItemText: "Copy", removeMenuItemText: "Remove", onRenderItem: onRenderItem }))));
};
//# sourceMappingURL=SelectedPeopleList.Basic.Example.js.map