define(["require", "exports", "react", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/FocusZone", "./ContextualMenuExample.scss"], function (require, exports, React, ContextualMenu_1, Button_1, FocusZone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextualMenuCustomizationExample = function () {
        return React.createElement(Button_1.DefaultButton, { className: "ContextualMenuButton3", text: "Click for ContextualMenu", menuProps: menuProps });
    };
    function renderCharmMenuItem(item, dismissMenu) {
        return (React.createElement(Button_1.IconButton, { iconProps: { iconName: item.text }, className: "ms-ContextualMenu-customizationExample-icon ms-ContextualMenu-link", "data-is-focusable": true, onClick: dismissMenu }));
    }
    function renderCategoriesList(item) {
        return (React.createElement("ul", { className: "ms-ContextualMenu-customizationExample-categoriesList" },
            React.createElement("li", { className: "ms-ContextualMenu-item" }, item.categoryList.map(function (category) { return (React.createElement(Button_1.DefaultButton, { className: "ms-ContextualMenu-link ms-ContextualMenu-customizationExample-button", role: "menuitem", key: category.name },
                React.createElement("div", null,
                    React.createElement("span", { className: "ms-ContextualMenu-icon ms-ContextualMenu-customizationExample-categorySwatch", style: { backgroundColor: category.color } }),
                    React.createElement("span", { className: "ms-ContextualMenu-itemText" }, category.name)))); }))));
    }
    var menuItems = [
        {
            key: 'newItem',
            text: 'New',
        },
        {
            key: 'upload',
            text: 'Upload',
        },
        {
            key: 'divider_1',
            itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
        },
        {
            key: 'charm',
            text: 'Charm',
            className: 'Charm-List',
            subMenuProps: {
                focusZoneProps: { direction: FocusZone_1.FocusZoneDirection.bidirectional },
                items: [
                    {
                        key: 'none',
                        text: 'None',
                    },
                    {
                        key: 'bulb',
                        text: 'Lightbulb',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'run',
                        text: 'Running',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'plane',
                        text: 'Airplane',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'page',
                        text: 'Page',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'cake',
                        text: 'Cake',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'soccer',
                        text: 'Soccer',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'home',
                        text: 'Home',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'emoji',
                        text: 'Emoji2',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'work',
                        text: 'Work',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'coffee',
                        text: 'Coffee',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'people',
                        text: 'People',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'stopwatch',
                        text: 'Stopwatch',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'music',
                        text: 'MusicInCollectionFill',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                    {
                        key: 'lock',
                        text: 'Lock',
                        onRender: renderCharmMenuItem,
                        className: 'ms-ContextualMenu-customizationExample-item',
                    },
                ],
            },
        },
        {
            key: 'categories',
            text: 'Categorize',
            subMenuProps: {
                items: [
                    {
                        key: 'categories',
                        text: 'categories',
                        categoryList: [
                            {
                                name: 'Personal',
                                color: 'yellow',
                            },
                            {
                                name: 'Work',
                                color: 'green',
                            },
                            {
                                name: 'Birthday',
                                color: 'blue',
                            },
                            {
                                name: 'Spam',
                                color: 'grey',
                            },
                            {
                                name: 'Urgent',
                                color: 'red',
                            },
                            {
                                name: 'Hobbies',
                                color: 'black',
                            },
                        ],
                        onRender: renderCategoriesList,
                    },
                    {
                        key: 'divider_1',
                        itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
                    },
                    {
                        key: 'clear',
                        text: 'Clear categories',
                    },
                    {
                        key: 'manage',
                        text: 'Manage categories',
                    },
                ],
            },
        },
    ];
    var menuProps = {
        shouldFocusOnMount: true,
        directionalHint: ContextualMenu_1.DirectionalHint.bottomLeftEdge,
        className: 'ms-ContextualMenu-customizationExample',
        items: menuItems,
    };
});
//# sourceMappingURL=ContextualMenu.Customization.Example.js.map