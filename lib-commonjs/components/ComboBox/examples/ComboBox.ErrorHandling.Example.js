"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("office-ui-fabric-react/lib-commonjs/index");
var comboBoxBasicOptions = [
    { key: 'Header1', text: 'First heading', itemType: index_1.SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
    { key: 'Header2', text: 'Second heading', itemType: index_1.SelectableOptionMenuItemType.Header },
    { key: 'E', text: 'Option E' },
    { key: 'F', text: 'Option F', disabled: true },
    { key: 'G', text: 'Option G' },
    { key: 'H', text: 'Option H' },
    { key: 'I', text: 'Option I' },
    { key: 'J', text: 'Option J' },
];
exports.ComboBoxErrorHandlingExample = function () {
    var _a = React.useState(''), selectedKey = _a[0], setSelectedKey = _a[1];
    var onChange = function (event, option) { return setSelectedKey(option.key); };
    return (React.createElement("div", null,
        React.createElement(index_1.ComboBox, { label: "ComboBox with static error message", defaultSelectedKey: "B", errorMessage: "Oh no! This ComboBox has an error!", options: comboBoxBasicOptions }),
        React.createElement(index_1.ComboBox, { label: "ComboBox that errors when Option B is selected", options: comboBoxBasicOptions, onChange: onChange, selectedKey: selectedKey, errorMessage: selectedKey === 'B' ? 'B is not an allowed option' : undefined })));
};
//# sourceMappingURL=ComboBox.ErrorHandling.Example.js.map