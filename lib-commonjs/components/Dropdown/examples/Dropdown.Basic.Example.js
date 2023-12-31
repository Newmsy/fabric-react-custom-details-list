"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var dropdownStyles = {
    dropdown: { width: 300 },
};
var options = [
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
var stackTokens = { childrenGap: 20 };
exports.DropdownBasicExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an option", label: "Basic uncontrolled example", options: options, styles: dropdownStyles }),
        React.createElement(Dropdown_1.Dropdown, { label: "Disabled example with defaultSelectedKey", defaultSelectedKey: "broccoli", options: options, disabled: true, styles: dropdownStyles }),
        React.createElement(Dropdown_1.Dropdown, { placeholder: "Select options", label: "Multi-select uncontrolled example", defaultSelectedKeys: ['apple', 'banana', 'grape'], multiSelect: true, options: options, styles: dropdownStyles })));
};
//# sourceMappingURL=Dropdown.Basic.Example.js.map