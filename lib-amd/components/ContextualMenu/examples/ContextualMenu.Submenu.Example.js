define(["require", "exports", "react", "@uifabric/react-hooks", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/TextField"], function (require, exports, React, react_hooks_1, Button_1, TextField_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var textFieldStyles = {
        subComponentStyles: {
            label: { root: { display: 'inline-block', marginRight: '10px' } },
        },
        fieldGroup: { display: 'inline-flex', maxWidth: '100px' },
        wrapper: { display: 'block', marginBottom: '10px' },
    };
    exports.ContextualMenuSubmenuExample = function () {
        var _a = React.useState(250), hoverDelay = _a[0], setHoverDelay = _a[1];
        var onHoverDelayChanged = react_hooks_1.useConstCallback(function (ev, newValue) {
            setHoverDelay(Number(newValue) || 0);
        });
        var menuProps = React.useMemo(function () { return ({
            shouldFocusOnMount: true,
            subMenuHoverDelay: hoverDelay,
            items: menuItems,
        }); }, [hoverDelay]);
        return (React.createElement("div", null,
            React.createElement(TextField_1.TextField, { value: String(hoverDelay), label: "Hover delay (ms)", type: "number", onChange: onHoverDelayChanged, styles: textFieldStyles }),
            React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps })));
    };
    var menuItems = [
        {
            key: 'newItem',
            subMenuProps: {
                items: [
                    {
                        key: 'emailMessage',
                        text: 'Email message',
                        title: 'Create an email',
                    },
                    {
                        key: 'calendarEvent',
                        text: 'Calendar event',
                        title: 'Create a calendar event',
                    },
                ],
            },
            href: 'https://bing.com',
            text: 'New',
            target: '_blank',
        },
        {
            key: 'share',
            subMenuProps: {
                items: [
                    {
                        key: 'sharetotwitter',
                        text: 'Share to Twitter',
                    },
                    {
                        key: 'sharetofacebook',
                        text: 'Share to Facebook',
                    },
                    {
                        key: 'sharetoemail',
                        text: 'Share to Email',
                        subMenuProps: {
                            items: [
                                {
                                    key: 'sharetooutlook_1',
                                    text: 'Share to Outlook',
                                    title: 'Share to Outlook',
                                },
                                {
                                    key: 'sharetogmail_1',
                                    text: 'Share to Gmail',
                                    title: 'Share to Gmail',
                                },
                            ],
                        },
                    },
                ],
            },
            text: 'Share',
        },
        {
            key: 'shareSplit',
            split: true,
            'aria-roledescription': 'split button',
            subMenuProps: {
                items: [
                    {
                        key: 'sharetotwittersplit',
                        text: 'Share to Twitter',
                    },
                    {
                        key: 'sharetofacebooksplit',
                        text: 'Share to Facebook',
                    },
                    {
                        key: 'sharetoemailsplit',
                        text: 'Share to Email',
                        subMenuProps: {
                            items: [
                                {
                                    key: 'sharetooutlooksplit_1',
                                    text: 'Share to Outlook',
                                    title: 'Share to Outlook',
                                },
                                {
                                    key: 'sharetogmailsplit_1',
                                    text: 'Share to Gmail',
                                    title: 'Share to Gmail',
                                },
                            ],
                        },
                    },
                ],
            },
            text: 'Share w/ Split',
        },
    ];
});
//# sourceMappingURL=ContextualMenu.Submenu.Example.js.map