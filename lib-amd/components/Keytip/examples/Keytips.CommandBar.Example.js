define(["require", "exports", "react", "office-ui-fabric-react/lib/CommandBar", "office-ui-fabric-react/lib/components/Keytip/examples/KeytipSetup", "office-ui-fabric-react/lib/Modal", "office-ui-fabric-react/lib/MessageBar", "@uifabric/react-hooks"], function (require, exports, React, CommandBar_1, KeytipSetup_1, Modal_1, MessageBar_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var commandBarFarItemsProps = [
        {
            key: 'farItem1',
            text: 'Options',
            iconProps: {
                iconName: 'SortLines',
            },
            keytipProps: KeytipSetup_1.keytipMap.CommandButton3Keytip,
            subMenuProps: {
                items: [
                    {
                        key: 'emailMessage',
                        text: 'Send Email',
                        iconProps: {
                            iconName: 'Mail',
                        },
                        keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip1,
                    },
                    {
                        key: 'calendarEvent',
                        text: 'Make Calendar Event',
                        iconProps: {
                            iconName: 'Calendar',
                        },
                        keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip2,
                        subMenuProps: {
                            items: [
                                {
                                    key: 'testButton',
                                    text: 'Add to Outlook',
                                    keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip3,
                                },
                                {
                                    key: 'testButton2',
                                    text: 'Go to Bing',
                                    keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip4,
                                    href: 'http://www.bing.com',
                                    target: '_blank',
                                },
                            ],
                        },
                    },
                    {
                        key: 'splitButtonTest',
                        text: 'Other...',
                        split: true,
                        keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip5,
                        subMenuProps: {
                            items: [
                                {
                                    key: 'splitButtonSubMenu1',
                                    text: 'Submenu Item w/o Keytip',
                                },
                                {
                                    key: 'splitButtonSubMenu2',
                                    text: 'Submenu Item w/o Keytip',
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ];
    exports.KeytipsCommandBarExample = function () {
        var _a = react_hooks_1.useBoolean(false), showModal = _a[0], toggleShowModal = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(false), showMessageBar = _b[0], toggleShowMessageBar = _b[1].toggle;
        var commandBarItems = react_hooks_1.useConst(function () { return [
            {
                key: 'commandBarItem1',
                text: 'New',
                iconProps: {
                    iconName: 'Add',
                },
                onClick: toggleShowModal,
                keytipProps: KeytipSetup_1.keytipMap.CommandButton1Keytip,
            },
            {
                key: 'commandBarItem2',
                text: 'Upload',
                iconProps: {
                    iconName: 'Upload',
                },
                onClick: toggleShowMessageBar,
                keytipProps: KeytipSetup_1.keytipMap.CommandButton2Keytip,
            },
        ]; });
        return (React.createElement(React.Fragment, null,
            React.createElement(CommandBar_1.CommandBar, { items: commandBarItems, farItems: commandBarFarItemsProps }),
            showMessageBar && React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.success }, "Success Uploading"),
            React.createElement(Modal_1.Modal, { isOpen: showModal, onDismiss: toggleShowModal, isBlocking: false },
                React.createElement("h3", null, "New Modal"))));
    };
});
//# sourceMappingURL=Keytips.CommandBar.Example.js.map