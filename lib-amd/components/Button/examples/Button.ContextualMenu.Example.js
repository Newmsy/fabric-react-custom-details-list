define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var menuProps = {
        // For example: disable dismiss if shift key is held down while dismissing
        onDismiss: function (ev) {
            if (ev && ev.shiftKey) {
                ev.preventDefault();
            }
        },
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
        directionalHintFixed: true,
    };
    var addIcon = { iconName: 'Add' };
    exports.ButtonContextualMenuExample = function (props) {
        var disabled = props.disabled, checked = props.checked;
        return (React.createElement(office_ui_fabric_react_1.DefaultButton, { text: "New item", iconProps: addIcon, menuProps: menuProps, 
            // Optional callback to customize menu rendering
            menuAs: _getMenu, 
            // Optional callback to do other actions (besides opening the menu) on click
            onMenuClick: _onMenuClick, 
            // By default, the ContextualMenu is re-created each time it's shown and destroyed when closed.
            // Uncomment the next line to hide the ContextualMenu but persist it in the DOM instead.
            // persistMenu={true}
            allowDisabledFocus: true, disabled: disabled, checked: checked }));
    };
    function _getMenu(props) {
        // Customize contextual menu with menuAs
        return React.createElement(office_ui_fabric_react_1.ContextualMenu, tslib_1.__assign({}, props));
    }
    function _onMenuClick(ev) {
        console.log(ev);
    }
});
//# sourceMappingURL=Button.ContextualMenu.Example.js.map