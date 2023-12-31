define(["require", "exports", "react", "office-ui-fabric-react"], function (require, exports, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.ButtonCommandExample = function (props) {
        var disabled = props.disabled, checked = props.checked;
        return (React.createElement(office_ui_fabric_react_1.CommandButton, { iconProps: addIcon, text: "New item", menuProps: menuProps, disabled: disabled, checked: checked }));
    };
});
//# sourceMappingURL=Button.Command.Example.js.map