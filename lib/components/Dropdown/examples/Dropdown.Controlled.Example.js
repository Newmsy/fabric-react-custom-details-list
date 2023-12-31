import * as React from 'react';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
var dropdownStyles = { dropdown: { width: 300 } };
var dropdownControlledExampleOptions = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];
export var DropdownControlledExample = function () {
    var _a = React.useState(), selectedItem = _a[0], setSelectedItem = _a[1];
    var onChange = function (event, item) {
        setSelectedItem(item);
    };
    return (React.createElement(Dropdown, { label: "Controlled example", selectedKey: selectedItem ? selectedItem.key : undefined, onChange: onChange, placeholder: "Select an option", options: dropdownControlledExampleOptions, styles: dropdownStyles }));
};
//# sourceMappingURL=Dropdown.Controlled.Example.js.map