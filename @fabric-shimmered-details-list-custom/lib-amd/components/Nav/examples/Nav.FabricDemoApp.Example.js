define(["require", "exports", "react", "office-ui-fabric-react/lib/Nav"], function (require, exports, React, Nav_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var navStyles = { root: { width: 300 } };
    var navLinkGroups = [
        {
            name: 'Basic components',
            expandAriaLabel: 'Expand Basic components section',
            collapseAriaLabel: 'Collapse Basic components section',
            links: [
                {
                    key: 'ActivityItem',
                    name: 'ActivityItem',
                    url: '#/examples/activityitem',
                },
                {
                    key: 'Breadcrumb',
                    name: 'Breadcrumb',
                    url: '#/examples/breadcrumb',
                },
                {
                    key: 'Button',
                    name: 'Button',
                    url: '#/examples/button',
                },
            ],
        },
        {
            name: 'Extended components',
            expandAriaLabel: 'Expand Extended components section',
            collapseAriaLabel: 'Collapse Extended components section',
            links: [
                {
                    key: 'ColorPicker',
                    name: 'ColorPicker',
                    url: '#/examples/colorpicker',
                },
                {
                    key: 'ExtendedPeoplePicker',
                    name: 'ExtendedPeoplePicker',
                    url: '#/examples/extendedpeoplepicker',
                },
                {
                    key: 'GroupedList',
                    name: 'GroupedList',
                    url: '#/examples/groupedlist',
                },
            ],
        },
        {
            name: 'Utilities',
            expandAriaLabel: 'Expand Utilities section',
            collapseAriaLabel: 'Collapse Utilities section',
            links: [
                {
                    key: 'FocusTrapZone',
                    name: 'FocusTrapZone',
                    url: '#/examples/focustrapzone',
                },
                {
                    key: 'FocusZone',
                    name: 'FocusZone',
                    url: '#/examples/focuszone',
                },
                {
                    key: 'MarqueeSelection',
                    name: 'MarqueeSelection',
                    url: '#/examples/marqueeselection',
                },
            ],
        },
    ];
    exports.NavFabricDemoAppExample = function () {
        return (React.createElement(Nav_1.Nav, { styles: navStyles, ariaLabel: "Nav example similiar to one found in this demo page", groups: navLinkGroups }));
    };
});
//# sourceMappingURL=Nav.FabricDemoApp.Example.js.map