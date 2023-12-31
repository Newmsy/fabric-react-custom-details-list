import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusZone, FocusZoneDirection, FocusZoneTabbableElements } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var textFieldStyles = { root: { width: 200 } };
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
export var FocusZoneTabbableExample = function () {
    var tokens = { childrenGap: 20 };
    return (React.createElement(Stack, { tokens: tokens, horizontalAlign: "start" },
        React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal, handleTabKey: FocusZoneTabbableElements.all, isCircularNavigation: true },
            React.createElement(Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                React.createElement("span", null, "Circular Tabbable FocusZone: "),
                React.createElement(DefaultButton, null, "Button 1"),
                React.createElement(DefaultButton, null, "Button 2"),
                React.createElement(TextField, { placeholder: "FocusZone TextField", styles: textFieldStyles, ariaLabel: "FocusZone TextField" }),
                React.createElement(DefaultButton, null, "Button 3"),
                React.createElement(DefaultButton, { text: "Create account", split: true, onClick: alertClicked, splitButtonAriaLabel: "See 2 sample options", menuProps: menuProps }))),
        React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal, handleTabKey: FocusZoneTabbableElements.inputOnly, isCircularNavigation: false },
            React.createElement(Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                React.createElement("span", null, "Input Only FocusZone: "),
                React.createElement(DefaultButton, null, "Button 1"),
                React.createElement(DefaultButton, null, "Button 2"),
                React.createElement(TextField, { placeholder: "FocusZone TextField", styles: textFieldStyles, ariaLabel: "FocusZone TextField" }),
                React.createElement(DefaultButton, null, "Button 3")))));
};
function alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=FocusZone.Tabbable.Example.js.map