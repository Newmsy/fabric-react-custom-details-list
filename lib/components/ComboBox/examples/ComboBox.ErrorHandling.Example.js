import * as React from 'react';
import { ComboBox, SelectableOptionMenuItemType, } from 'office-ui-fabric-react/lib/index';
var comboBoxBasicOptions = [
    { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
    { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
    { key: 'E', text: 'Option E' },
    { key: 'F', text: 'Option F', disabled: true },
    { key: 'G', text: 'Option G' },
    { key: 'H', text: 'Option H' },
    { key: 'I', text: 'Option I' },
    { key: 'J', text: 'Option J' },
];
export var ComboBoxErrorHandlingExample = function () {
    var _a = React.useState(''), selectedKey = _a[0], setSelectedKey = _a[1];
    var onChange = function (event, option) { return setSelectedKey(option.key); };
    return (React.createElement("div", null,
        React.createElement(ComboBox, { label: "ComboBox with static error message", defaultSelectedKey: "B", errorMessage: "Oh no! This ComboBox has an error!", options: comboBoxBasicOptions }),
        React.createElement(ComboBox, { label: "ComboBox that errors when Option B is selected", options: comboBoxBasicOptions, onChange: onChange, selectedKey: selectedKey, errorMessage: selectedKey === 'B' ? 'B is not an allowed option' : undefined })));
};
//# sourceMappingURL=ComboBox.ErrorHandling.Example.js.map