import { __spreadArrays } from "tslib";
import * as React from 'react';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
var dropdownStyles = { dropdown: { width: 300 } };
var DropdownControlledMultiExampleOptions = [
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
export var DropdownControlledMultiExample = function () {
    var _a = React.useState([]), selectedKeys = _a[0], setSelectedKeys = _a[1];
    var onChange = function (event, item) {
        if (item) {
            setSelectedKeys(item.selected ? __spreadArrays(selectedKeys, [item.key]) : selectedKeys.filter(function (key) { return key !== item.key; }));
        }
    };
    return (React.createElement(Dropdown, { placeholder: "Select options", label: "Multi-select controlled example", selectedKeys: selectedKeys, onChange: onChange, multiSelect: true, options: DropdownControlledMultiExampleOptions, styles: dropdownStyles }));
};
//# sourceMappingURL=Dropdown.ControlledMulti.Example.js.map