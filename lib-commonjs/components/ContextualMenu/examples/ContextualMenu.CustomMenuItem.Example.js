"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
exports.ContextualMenuWithCustomMenuItemExample = function () {
    var menuProps = React.useMemo(function () { return ({
        items: menuItems,
        shouldFocusOnMount: true,
        contextualMenuItemAs: function (props) { return React.createElement("div", null,
            "Custom rendered ",
            props.item.text); },
    }); }, [menuItems]);
    return React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
};
var menuItems = [
    {
        key: 'newItem',
        text: 'New',
    },
    {
        key: 'divider_1',
        itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
    },
    {
        key: 'rename',
        text: 'Rename',
    },
    {
        key: 'edit',
        text: 'Edit',
    },
    {
        key: 'properties',
        text: 'Properties',
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
    },
];
//# sourceMappingURL=ContextualMenu.CustomMenuItem.Example.js.map