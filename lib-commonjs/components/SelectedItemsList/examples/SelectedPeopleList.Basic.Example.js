"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var SelectedItemsList_1 = require("office-ui-fabric-react/lib-commonjs/SelectedItemsList");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var example_data_1 = require("@uifabric/example-data");
var primaryButtonStyles = { root: { display: 'block', marginBottom: 20 } };
var onRenderItem = function (props) {
    return React.createElement(SelectedItemsList_1.ExtendedSelectedItem, tslib_1.__assign({}, props));
};
var onCopyItems = function (items) {
    return items.map(function (item) { return item.text; }).join(', ');
};
exports.SelectedPeopleListBasicExample = function () {
    var _a = React.useState(0), nextPersonIndex = _a[0], setNextPersonIndex = _a[1];
    var selectionList = React.useRef(null);
    var onExpandItem = function (item) {
        var expandedItem = item.text === 'Group One' ? example_data_1.groupOne : item.text === 'Group Two' ? example_data_1.groupTwo : [];
        selectionList.current.replaceItem(item, expandedItem);
    };
    var onAddItemButtonClicked = function () {
        if (selectionList.current) {
            selectionList.current.addItems([example_data_1.people[nextPersonIndex]]);
            setNextPersonIndex(nextPersonIndex + 1);
        }
    };
    return (React.createElement("div", null,
        React.createElement(Button_1.PrimaryButton, { text: "Add another item", onClick: onAddItemButtonClicked, disabled: nextPersonIndex >= example_data_1.people.length, styles: primaryButtonStyles }),
        React.createElement(Stack_1.Stack, { horizontal: true, wrap: true },
            React.createElement(SelectedItemsList_1.SelectedPeopleList, { key: "normal", removeButtonAriaLabel: "Remove", defaultSelectedItems: [example_data_1.people[40]], componentRef: selectionList, onCopyItems: onCopyItems, onExpandGroup: onExpandItem, copyMenuItemText: "Copy", removeMenuItemText: "Remove", onRenderItem: onRenderItem }))));
};
//# sourceMappingURL=SelectedPeopleList.Basic.Example.js.map