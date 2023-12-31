"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
require("./ContextualMenuExample.scss");
exports.ContextualMenuCustomizationWithNoWrapExample = function () {
    return React.createElement(Button_1.DefaultButton, { className: "ContextualMenuButton3", text: "Click for ContextualMenu", menuProps: menuProps });
};
function renderCharmMenuItem(item, dismissMenu) {
    return (React.createElement(Button_1.IconButton, tslib_1.__assign({}, item, { iconProps: { iconName: item.text }, className: "ms-ContextualMenu-customizationExample-icon ms-ContextualMenu-link", "data-is-focusable": true, onClick: dismissMenu, "data-no-vertical-wrap": true })));
}
function renderCategoriesList(item) {
    return (React.createElement("ul", { className: "ms-ContextualMenu-customizationExample-categoriesList" },
        React.createElement("li", { className: "ms-ContextualMenu-item" }, item.categoryList.map(function (category) { return (React.createElement(Button_1.DefaultButton, { key: category.name, className: "ms-ContextualMenu-link ms-ContextualMenu-customizationExample-button", role: "menuitemcheckbox" },
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
            focusZoneProps: {
                direction: FocusZone_1.FocusZoneDirection.bidirectional,
                checkForNoWrap: true,
            },
            items: [
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
                {
                    key: 'item3',
                    text: 'Item 3',
                    'data-no-horizontal-wrap': true,
                },
                {
                    key: 'item4',
                    text: 'Item 4',
                    'data-no-horizontal-wrap': true,
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
                    text: 'Additional Item',
                },
                {
                    key: 'manage',
                    text: 'Additional Item',
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
//# sourceMappingURL=ContextualMenu.CustomizationWithNoWrap.Example.js.map