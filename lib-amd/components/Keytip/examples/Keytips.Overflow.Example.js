define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/components/Keytip/examples/KeytipSetup", "office-ui-fabric-react/lib/OverflowSet", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, KeytipSetup_1, OverflowSet_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var overflowSetStyles = { root: { marginBottom: 28 } };
    var commandBarButtonStyles = { root: { padding: '10px' } };
    var initialItems = [
        {
            key: 'item1',
            name: 'Link 1',
            onClick: function () {
                return;
            },
            keytipProps: KeytipSetup_1.keytipMap.OverflowButton1,
        },
        {
            key: 'item2',
            name: 'Link 2',
            onClick: function () {
                return;
            },
            keytipProps: KeytipSetup_1.keytipMap.OverflowButton2,
        },
        {
            key: 'item3',
            name: 'Link 3',
            onClick: function () {
                return;
            },
            keytipProps: KeytipSetup_1.keytipMap.OverflowButton3,
        },
    ];
    var initialOverflowItems = [
        {
            key: 'item5',
            name: 'Overflow Link 1',
            keytipProps: tslib_1.__assign(tslib_1.__assign({}, KeytipSetup_1.keytipMap.OverflowButton5), { onExecute: function (el) {
                    if (el) {
                        el.click();
                    }
                    else {
                        console.log('first overflow item');
                    }
                } }),
            onClick: function () {
                console.log('first overflow item');
            },
        },
        {
            key: 'item6',
            name: 'Overflow Link 2',
            keytipProps: tslib_1.__assign(tslib_1.__assign({}, KeytipSetup_1.keytipMap.OverflowButton6), { onExecute: function (el) {
                    if (el) {
                        el.click();
                    }
                    else {
                        console.log('second overflow item');
                    }
                } }),
            onClick: function () {
                console.log('second overflow item');
            },
            subMenuProps: {
                items: [
                    {
                        key: 'overflowSubMenu1',
                        name: 'Overflow Submenu Item 1',
                        keytipProps: KeytipSetup_1.keytipMap.OverflowSubMenuButton1,
                    },
                    {
                        key: 'overflowSubMenu2',
                        name: 'Overflow Submenu Item 2',
                    },
                ],
            },
        },
    ];
    exports.KeytipsOverflowExample = function () {
        var _a = React.useState(initialItems), items = _a[0], setItems = _a[1];
        var _b = React.useState(initialOverflowItems), overflowItems = _b[0], setOverflowItems = _b[1];
        var onRenderItem = function (item) { return (React.createElement(Button_1.CommandBarButton, tslib_1.__assign({ role: "menuitem" }, item, { styles: commandBarButtonStyles, menuProps: item.subMenuProps }), item.name)); };
        var onRenderOverflowButton = function () {
            return (React.createElement(Button_1.CommandBarButton, { menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems }, keytipProps: KeytipSetup_1.keytipMap.OverflowButton4 }));
        };
        var onToggleOverflowItems = React.useCallback(function () {
            if (overflowItems.length) {
                setItems(items.concat(overflowItems));
                setOverflowItems([]);
            }
            else {
                setOverflowItems(items.slice(-2));
                setItems(items.slice(0, -2));
            }
        }, [items, overflowItems]);
        return (React.createElement("div", null,
            React.createElement("p", null, "Keytips in an overflow will have a special behavior. When a keytip goes into the overflow button menu, it will also register a 'persisted' keytip that can be accessed from the top level as a shortcut. A shortcut to a normal button item will trigger that button. A shortcut to a menu button item will open the overflow button menu and then open that item's menu as well. In this example triggering 'T' and 'Y' will show off this functionality (see console messages)."),
            React.createElement(OverflowSet_1.OverflowSet, { role: "menubar", styles: overflowSetStyles, items: items, overflowItems: overflowItems, keytipSequences: KeytipSetup_1.keytipMap.OverflowButton4.keySequences, onRenderOverflowButton: onRenderOverflowButton, onRenderItem: onRenderItem }),
            React.createElement("p", null, "When an item is moved out of the overflow well, it behaves as a normal keytip."),
            React.createElement(Button_1.DefaultButton, { text: 'Move overflow items', onClick: onToggleOverflowItems })));
    };
});
//# sourceMappingURL=Keytips.Overflow.Example.js.map