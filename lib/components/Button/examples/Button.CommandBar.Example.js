import * as React from 'react';
import { CommandBarButton, Stack } from 'office-ui-fabric-react';
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
var addIcon = { iconName: 'Add' };
var mailIcon = { iconName: 'Mail' };
var stackStyles = { root: { height: 44 } };
export var ButtonCommandBarExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    // Here we use a Stack to simulate a command bar.
    // The real CommandBar control also uses CommandBarButtons internally.
    return (React.createElement(Stack, { horizontal: true, styles: stackStyles },
        React.createElement(CommandBarButton, { iconProps: addIcon, text: "New item", 
            // Set split=true to render a SplitButton instead of a regular button with a menu
            // split={true}
            menuProps: menuProps, disabled: disabled, checked: checked }),
        React.createElement(CommandBarButton, { iconProps: mailIcon, text: "Send mail", disabled: disabled, checked: checked })));
};
//# sourceMappingURL=Button.CommandBar.Example.js.map