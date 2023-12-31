define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Link", "office-ui-fabric-react/lib/OverflowSet"], function (require, exports, React, Button_1, Link_1, OverflowSet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noOp = function () { return undefined; };
    var onRenderItem = function (item) {
        return (React.createElement(Link_1.Link, { role: "menuitem", styles: { root: { marginRight: 10 } }, onClick: item.onClick }, item.name));
    };
    var onRenderOverflowButton = function (overflowItems) {
        var buttonStyles = {
            root: {
                minWidth: 0,
                padding: '0 4px',
                alignSelf: 'stretch',
                height: 'auto',
            },
        };
        return (React.createElement(Button_1.IconButton, { role: "menuitem", title: "More options", styles: buttonStyles, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } }));
    };
    exports.OverflowSetBasicReversedExample = function () { return (React.createElement(OverflowSet_1.OverflowSet, { "aria-label": "Basic Menu Example", role: "menubar", items: [
            {
                key: 'item3',
                name: 'Link 3',
                onClick: noOp,
            },
            {
                key: 'item2',
                name: 'Link 2',
                onClick: noOp,
            },
            {
                key: 'item1',
                name: 'Link 1',
                onClick: noOp,
            },
        ], overflowItems: [
            {
                key: 'item4',
                name: 'Overflow Link 1',
                onClick: noOp,
            },
            {
                key: 'item5',
                name: 'Overflow Link 2',
                onClick: noOp,
            },
        ], onRenderOverflowButton: onRenderOverflowButton, onRenderItem: onRenderItem, overflowSide: 'start' })); };
});
//# sourceMappingURL=OverflowSet.BasicReversed.Example.js.map