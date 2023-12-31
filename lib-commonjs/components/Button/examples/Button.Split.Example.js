"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
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
exports.ButtonSplitExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, tokens: stackTokens },
        React.createElement(office_ui_fabric_react_1.DefaultButton, { text: "Standard", split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, disabled: disabled, checked: checked }),
        React.createElement(office_ui_fabric_react_1.DefaultButton, { text: "Primary", primary: true, split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, disabled: disabled, checked: checked }),
        React.createElement(office_ui_fabric_react_1.DefaultButton, { text: "Main action disabled", primaryDisabled: true, split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, disabled: disabled, checked: checked }),
        React.createElement(office_ui_fabric_react_1.DefaultButton, { text: "Disabled", disabled: true, allowDisabledFocus: true, split: true, splitButtonAriaLabel: "See 2 options", "aria-roledescription": "split button", menuProps: menuProps, onClick: _alertClicked, checked: checked })));
};
function _alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=Button.Split.Example.js.map