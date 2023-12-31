define(["require", "exports", "react", "./examples/ContextualMenu.Basic.Example", "./examples/ContextualMenu.Default.Example", "./examples/ContextualMenu.Icon.Example", "./examples/ContextualMenu.Icon.SecondaryText.Example", "./examples/ContextualMenu.Submenu.Example", "./examples/ContextualMenu.Section.Example", "./examples/ContextualMenu.Checkmarks.Example", "./examples/ContextualMenu.Directional.Example", "./examples/ContextualMenu.Customization.Example", "./examples/ContextualMenu.CustomizationWithNoWrap.Example", "./examples/ContextualMenu.ScrollBar.Example", "./examples/ContextualMenu.CustomMenuItem.Example", "./examples/ContextualMenu.CustomMenuList.Example", "./examples/ContextualMenu.Header.Example", "./examples/ContextualMenu.Persisted.Example"], function (require, exports, React, ContextualMenu_Basic_Example_1, ContextualMenu_Default_Example_1, ContextualMenu_Icon_Example_1, ContextualMenu_Icon_SecondaryText_Example_1, ContextualMenu_Submenu_Example_1, ContextualMenu_Section_Example_1, ContextualMenu_Checkmarks_Example_1, ContextualMenu_Directional_Example_1, ContextualMenu_Customization_Example_1, ContextualMenu_CustomizationWithNoWrap_Example_1, ContextualMenu_ScrollBar_Example_1, ContextualMenu_CustomMenuItem_Example_1, ContextualMenu_CustomMenuList_Example_1, ContextualMenu_Header_Example_1, ContextualMenu_Persisted_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextualMenuBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Basic.Example.tsx');
    var ContextualMenuDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Default.Example.tsx');
    var ContextualMenuPersistedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Persisted.Example.tsx');
    var ContextualMenuIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Icon.Example.tsx');
    var ContextualMenuIconSecondaryTextExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Icon.SecondaryText.Example.tsx');
    var ContextualMenuSubmenuExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Submenu.Example.tsx');
    var ContextualMenuSectionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Section.Example.tsx');
    var ContextualMenuCheckmarksExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Checkmarks.Example.tsx');
    var ContextualMenuDirectionalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Directional.Example.tsx');
    var ContextualMenuCustomizationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Customization.Example.tsx');
    var ContextualMenuCustomizationWithNoWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.CustomizationWithNoWrap.Example.tsx');
    var ContextualMenuWithScrollBarExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.ScrollBar.Example.tsx');
    var ContextualMenuWithCustomMenuItemExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.CustomMenuItem.Example.tsx');
    var ContextualMenuCustomMenuListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.CustomMenuList.Example.tsx');
    var ContextualMenuHeaderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/examples/ContextualMenu.Header.Example.tsx');
    exports.ContextualMenuPageProps = {
        title: 'ContextualMenu',
        componentName: 'ContextualMenu',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ContextualMenu',
        examples: [
            {
                title: 'Basic ContextualMenu',
                code: ContextualMenuBasicExampleCode,
                view: React.createElement(ContextualMenu_Basic_Example_1.ContextualMenuBasicExample, null),
            },
            {
                title: 'Default ContextualMenu',
                code: ContextualMenuDefaultExampleCode,
                view: React.createElement(ContextualMenu_Default_Example_1.ContextualMenuDefaultExample, null),
            },
            {
                title: 'ContextualMenu which is persisted in the DOM',
                code: ContextualMenuPersistedExampleCode,
                view: React.createElement(ContextualMenu_Persisted_Example_1.ContextualMenuPersistedExample, null),
            },
            {
                title: 'ContextualMenu with icons',
                code: ContextualMenuIconExampleCode,
                view: React.createElement(ContextualMenu_Icon_Example_1.ContextualMenuIconExample, null),
            },
            {
                title: 'ContextualMenu with icons and secondary text',
                code: ContextualMenuIconSecondaryTextExampleCode,
                view: React.createElement(ContextualMenu_Icon_SecondaryText_Example_1.ContextualMenuIconSecondaryTextExample, null),
            },
            {
                title: 'ContextualMenu with submenus',
                code: ContextualMenuSubmenuExampleCode,
                view: React.createElement(ContextualMenu_Submenu_Example_1.ContextualMenuSubmenuExample, null),
            },
            {
                title: 'ContextualMenu with section headers',
                code: ContextualMenuSectionExampleCode,
                view: React.createElement(ContextualMenu_Section_Example_1.ContextualMenuSectionExample, null),
            },
            {
                title: 'ContextualMenu with checkable menu items and toggleable split button',
                code: ContextualMenuCheckmarksExampleCode,
                view: React.createElement(ContextualMenu_Checkmarks_Example_1.ContextualMenuCheckmarksExample, null),
            },
            {
                title: 'ContextualMenu with beak and directional settings',
                code: ContextualMenuDirectionalExampleCode,
                view: React.createElement(ContextualMenu_Directional_Example_1.ContextualMenuDirectionalExample, null),
            },
            {
                title: 'ContextualMenu with customized submenus',
                code: ContextualMenuCustomizationExampleCode,
                view: React.createElement(ContextualMenu_Customization_Example_1.ContextualMenuCustomizationExample, null),
            },
            {
                title: 'ContextualMenu with customized submenus and noWrap attributes',
                code: ContextualMenuCustomizationWithNoWrapExampleCode,
                view: React.createElement(ContextualMenu_CustomizationWithNoWrap_Example_1.ContextualMenuCustomizationWithNoWrapExample, null),
            },
            {
                title: 'ContextualMenu with a scroll bar and fixed direction',
                code: ContextualMenuWithScrollBarExampleCode,
                view: React.createElement(ContextualMenu_ScrollBar_Example_1.ContextualMenuWithScrollBarExample, null),
            },
            {
                title: 'ContextualMenu with custom rendered menu items',
                code: ContextualMenuWithCustomMenuItemExampleCode,
                view: React.createElement(ContextualMenu_CustomMenuItem_Example_1.ContextualMenuWithCustomMenuItemExample, null),
            },
            {
                title: 'ContextualMenu with custom rendered menu list that renders a search box to filter menu items',
                code: ContextualMenuCustomMenuListExampleCode,
                view: React.createElement(ContextualMenu_CustomMenuList_Example_1.ContextualMenuWithCustomMenuListExample, null),
            },
            {
                title: 'ContextualMenu with header',
                code: ContextualMenuHeaderExampleCode,
                view: React.createElement(ContextualMenu_Header_Example_1.ContextualMenuHeaderExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/docs/ContextualMenuOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/docs/ContextualMenuDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/ContextualMenu/docs/ContextualMenuDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=ContextualMenu.doc.js.map