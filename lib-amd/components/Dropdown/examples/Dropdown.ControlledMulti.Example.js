define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Dropdown"], function (require, exports, tslib_1, React, Dropdown_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dropdownStyles = { dropdown: { width: 300 } };
    var DropdownControlledMultiExampleOptions = [
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
    exports.DropdownControlledMultiExample = function () {
        var _a = React.useState([]), selectedKeys = _a[0], setSelectedKeys = _a[1];
        var onChange = function (event, item) {
            if (item) {
                setSelectedKeys(item.selected ? tslib_1.__spreadArrays(selectedKeys, [item.key]) : selectedKeys.filter(function (key) { return key !== item.key; }));
            }
        };
        return (React.createElement(Dropdown_1.Dropdown, { placeholder: "Select options", label: "Multi-select controlled example", selectedKeys: selectedKeys, onChange: onChange, multiSelect: true, options: DropdownControlledMultiExampleOptions, styles: dropdownStyles }));
    };
});
//# sourceMappingURL=Dropdown.ControlledMulti.Example.js.map