import * as React from 'react';
import { DefaultButton, Stack } from 'office-ui-fabric-react';
var menuProps = {
    items: [
        {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
        },
        {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
        },
    ],
};
// Example formatting
var stackTokens = { childrenGap: 40 };
export var ButtonSplitExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(Stack, { horizontal: true, wrap: true, tokens: stackTokens },
        React.createElement(DefaultButton, { text: "Standard", split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, disabled: disabled, checked: checked }),
        React.createElement(DefaultButton, { text: "Primary", primary: true, split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, disabled: disabled, checked: checked }),
        React.createElement(DefaultButton, { text: "Main action disabled", primaryDisabled: true, split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, disabled: disabled, checked: checked }),
        React.createElement(DefaultButton, { text: "Disabled", disabled: true, allowDisabledFocus: true, split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, checked: checked })));
};
function _alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=Button.Split.Example.js.map