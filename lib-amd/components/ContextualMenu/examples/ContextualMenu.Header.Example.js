define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/ContextualMenu"], function (require, exports, React, Button_1, ContextualMenu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextualMenuHeaderExample = function () {
        return React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
    };
    var menuItems = [
        {
            key: 'Actions',
            itemType: ContextualMenu_1.ContextualMenuItemType.Header,
            text: 'Actions',
            itemProps: {
                lang: 'en-us',
            },
        },
        {
            key: 'upload',
            iconProps: {
                iconName: 'Upload',
                style: {
                    color: 'salmon',
                },
            },
            text: 'Upload',
            title: 'Upload a file',
        },
        {
            key: 'rename',
            text: 'Rename',
        },
        {
            key: 'share',
            iconProps: {
                iconName: 'Share',
            },
            subMenuProps: {
                items: [
                    {
                        key: 'sharetoemail',
                        text: 'Share to Email',
                        iconProps: {
                            iconName: 'Mail',
                        },
                    },
                    {
                        key: 'sharetofacebook',
                        text: 'Share to Facebook',
                    },
                    {
                        key: 'sharetotwitter',
                        text: 'Share to Twitter',
                        iconProps: {
                            iconName: 'Share',
                        },
                    },
                ],
            },
            text: 'Sharing',
        },
        {
            key: 'navigation',
            itemType: ContextualMenu_1.ContextualMenuItemType.Header,
            text: 'Navigation',
        },
        {
            key: 'properties',
            text: 'Properties',
        },
        {
            key: 'print',
            iconProps: {
                iconName: 'Print',
            },
            text: 'Print',
        },
        {
            key: 'Bing',
            text: 'Go to Bing',
            href: 'http://www.bing.com',
            target: '_blank',
        },
    ];
    var menuProps = {
        shouldFocusOnMount: true,
        items: menuItems,
    };
});
//# sourceMappingURL=ContextualMenu.Header.Example.js.map