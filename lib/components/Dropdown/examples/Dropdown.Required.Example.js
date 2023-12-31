import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var dropdownStyles = { dropdown: { width: 300 } };
export var DropdownRequiredExample = function () {
    var dropdownRef = React.createRef();
    var onSetFocus = function () { return dropdownRef.current.focus(true); };
    var stackTokens = { childrenGap: 20 };
    return (React.createElement(Stack, { tokens: stackTokens, verticalAlign: "end" },
        React.createElement(Stack, { horizontal: true, tokens: stackTokens, verticalAlign: "end" },
            React.createElement(Dropdown, { componentRef: dropdownRef, placeholder: "Select an option", label: "Required dropdown example", options: [
                    { key: 'A', text: 'Option a', title: 'I am option a.' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c', disabled: true },
                    { key: 'D', text: 'Option d' },
                    { key: 'E', text: 'Option e' },
                ], required: true, styles: dropdownStyles }),
            React.createElement(PrimaryButton, { text: "Set focus", onClick: onSetFocus })),
        React.createElement(Dropdown, { placeholder: "Required with no label", ariaLabel: "Required dropdown example", options: [
                { key: 'A', text: 'Option a', title: 'I am option a.' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c', disabled: true },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' },
            ], required: true, styles: dropdownStyles })));
};
//# sourceMappingURL=Dropdown.Required.Example.js.map