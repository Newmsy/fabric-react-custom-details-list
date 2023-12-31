define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, ContextualMenu_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var keys = [
        'newItem',
        'share',
        'mobile',
        'enablePrint',
        'enableMusic',
        'newSub',
        'emailMessage',
        'calendarEvent',
        'disabledNewSub',
        'disabledEmailMessage',
        'disabledCalendarEvent',
        'splitButtonSubMenuLeftDirection',
        'emailMessageLeft',
        'calendarEventLeft',
        'disabledPrimarySplit',
    ];
    exports.ContextualMenuCheckmarksExample = function () {
        var _a = React.useState({}), selection = _a[0], setSelection = _a[1];
        var onToggleSelect = React.useCallback(function (ev, item) {
            var _a;
            ev && ev.preventDefault();
            if (item) {
                setSelection(tslib_1.__assign(tslib_1.__assign({}, selection), (_a = {}, _a[item.key] = selection[item.key] === undefined ? true : !selection[item.key], _a)));
            }
        }, [selection]);
        var menuItems = React.useMemo(function () { return [
            {
                key: keys[0],
                text: 'New',
                canCheck: true,
                isChecked: selection[keys[0]],
                onClick: onToggleSelect,
            },
            {
                key: keys[1],
                text: 'Share',
                canCheck: true,
                isChecked: selection[keys[1]],
                onClick: onToggleSelect,
            },
            {
                key: keys[2],
                text: 'Mobile',
                canCheck: true,
                isChecked: selection[keys[2]],
                onClick: onToggleSelect,
            },
            {
                key: 'divider_1',
                itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
            },
            {
                key: keys[3],
                text: 'Print',
                canCheck: true,
                isChecked: selection[keys[3]],
                onClick: onToggleSelect,
            },
            {
                key: keys[4],
                text: 'Music',
                canCheck: true,
                isChecked: selection[keys[4]],
                onClick: onToggleSelect,
            },
            {
                key: keys[5],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    items: [
                        {
                            key: keys[6],
                            text: 'Email message',
                            canCheck: true,
                            isChecked: selection[keys[6]],
                            onClick: onToggleSelect,
                        },
                        {
                            key: keys[7],
                            text: 'Calendar event',
                            canCheck: true,
                            isChecked: selection[keys[7]],
                            onClick: onToggleSelect,
                        },
                    ],
                },
                text: 'Split Button',
                canCheck: true,
                isChecked: selection[keys[5]],
                split: true,
                onClick: onToggleSelect,
            },
            {
                key: keys[8],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    items: [
                        {
                            key: keys[9],
                            text: 'Email message',
                            canCheck: true,
                            isChecked: selection[keys[9]],
                            onClick: onToggleSelect,
                        },
                        {
                            key: keys[10],
                            text: 'Calendar event',
                            canCheck: true,
                            isChecked: selection[keys[10]],
                            onClick: onToggleSelect,
                        },
                    ],
                },
                text: 'Split Button',
                canCheck: true,
                isChecked: selection[keys[8]],
                split: true,
                onClick: onToggleSelect,
                disabled: true,
            },
            {
                key: keys[11],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    directionalHint: ContextualMenu_1.DirectionalHint.leftCenter,
                    items: [
                        {
                            key: keys[12],
                            text: 'Email message',
                            canCheck: true,
                            isChecked: selection[keys[12]],
                            onClick: onToggleSelect,
                        },
                        {
                            key: keys[13],
                            text: 'Calendar event',
                            canCheck: true,
                            isChecked: selection[keys[13]],
                            onClick: onToggleSelect,
                        },
                    ],
                },
                text: 'Split Button Left Menu',
                canCheck: true,
                isChecked: selection[keys[11]],
                split: true,
                onClick: onToggleSelect,
            },
            {
                key: keys[12],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    items: [
                        {
                            key: keys[12],
                            name: 'Email message',
                            canCheck: true,
                            isChecked: selection[keys[12]],
                            onClick: onToggleSelect,
                        },
                    ],
                },
                name: 'Split Button Disabled Primary',
                split: true,
                primaryDisabled: true,
            },
            {
                key: keys[13],
                iconProps: {
                    iconName: selection[keys[13]] ? 'SingleBookmarkSolid' : 'SingleBookmark',
                },
                name: selection[keys[13]] ? 'Toogled command no checkmark' : 'Toogle command no checkmark',
                canCheck: false,
                isChecked: selection[keys[13]],
                onClick: onToggleSelect,
            },
        ]; }, [selection, onToggleSelect]);
        var menuProps = React.useMemo(function () { return ({
            shouldFocusOnMount: true,
            items: menuItems,
        }); }, [menuItems]);
        return React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
    };
});
//# sourceMappingURL=ContextualMenu.Checkmarks.Example.js.map