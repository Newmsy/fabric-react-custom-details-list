"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var dropdownStyles = { dropdown: { width: 300 } };
var dropdownControlledExampleOptions = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: Dropdown_1.DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: Dropdown_1.DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: Dropdown_1.DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];
exports.DropdownControlledExample = function () {
    var _a = React.useState(), selectedItem = _a[0], setSelectedItem = _a[1];
    var onChange = function (event, item) {
        setSelectedItem(item);
    };
    return (React.createElement(Dropdown_1.Dropdown, { label: "Controlled example", selectedKey: selectedItem ? selectedItem.key : undefined, onChange: onChange, placeholder: "Select an option", options: dropdownControlledExampleOptions, styles: dropdownStyles }));
};
//# sourceMappingURL=Dropdown.Controlled.Example.js.map