"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hooks_1 = require("@uifabric/react-hooks");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Checkbox_1 = require("office-ui-fabric-react/lib-commonjs/Checkbox");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
require("./ContextualMenuExample.scss");
var DIRECTION_OPTIONS = [
    { key: ContextualMenu_1.DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
    { key: ContextualMenu_1.DirectionalHint.topCenter, text: 'Top Center' },
    { key: ContextualMenu_1.DirectionalHint.topRightEdge, text: 'Top Right Edge' },
    { key: ContextualMenu_1.DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
    { key: ContextualMenu_1.DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
    { key: ContextualMenu_1.DirectionalHint.bottomCenter, text: 'Bottom Center' },
    { key: ContextualMenu_1.DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
    { key: ContextualMenu_1.DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
    { key: ContextualMenu_1.DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
    { key: ContextualMenu_1.DirectionalHint.leftCenter, text: 'Left Center' },
    { key: ContextualMenu_1.DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
    { key: ContextualMenu_1.DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
    { key: ContextualMenu_1.DirectionalHint.rightCenter, text: 'Right Center' },
    { key: ContextualMenu_1.DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' },
];
var checkboxStyles = { root: { margin: '10px 0' } };
exports.ContextualMenuDirectionalExample = function () {
    var _a = React.useState(false), isBeakVisible = _a[0], setIsBeakVisible = _a[1];
    var _b = React.useState(false), useDirectionalHintForRTL = _b[0], setUseDirectionalHintForRTL = _b[1];
    var _c = React.useState(ContextualMenu_1.DirectionalHint.bottomLeftEdge), directionalHint = _c[0], setDirectionalHint = _c[1];
    var _d = React.useState(ContextualMenu_1.DirectionalHint.bottomLeftEdge), directionalHintForRTL = _d[0], setDirectionalHintForRTL = _d[1];
    var onShowBeakChange = react_hooks_1.useConstCallback(function (event, isVisible) {
        setIsBeakVisible(isVisible);
    });
    var onUseRtlHintChange = react_hooks_1.useConstCallback(function (event, isVisible) {
        setUseDirectionalHintForRTL(isVisible);
    });
    var onDirectionalChanged = react_hooks_1.useConstCallback(function (event, option) {
        setDirectionalHint(option.key);
    });
    var onDirectionalRtlChanged = react_hooks_1.useConstCallback(function (event, option) {
        setDirectionalHintForRTL(option.key);
    });
    var menuProps = React.useMemo(function () { return ({
        isBeakVisible: isBeakVisible,
        directionalHint: directionalHint,
        directionalHintForRTL: useDirectionalHintForRTL ? directionalHintForRTL : undefined,
        gapSpace: 0,
        beakWidth: 20,
        directionalHintFixed: false,
        items: menuItems,
    }); }, [isBeakVisible, directionalHint, directionalHintForRTL]);
    return (React.createElement("div", { className: "ms-ContextualMenuDirectionalExample" },
        React.createElement("div", { className: "ms-ContextualMenuDirectionalExample-configArea" },
            React.createElement(Checkbox_1.Checkbox, { styles: checkboxStyles, label: "Show beak", checked: isBeakVisible, onChange: onShowBeakChange }),
            React.createElement(Dropdown_1.Dropdown, { label: "Directional hint", selectedKey: directionalHint, options: DIRECTION_OPTIONS, onChange: onDirectionalChanged }),
            Utilities_1.getRTL() && (React.createElement(Checkbox_1.Checkbox, { label: "Use RTL directional hint", checked: useDirectionalHintForRTL, onChange: onUseRtlHintChange })),
            Utilities_1.getRTL() && (React.createElement(Dropdown_1.Dropdown, { label: "Directional hint for RTL", selectedKey: directionalHintForRTL, options: DIRECTION_OPTIONS, onChange: onDirectionalRtlChanged, disabled: !useDirectionalHintForRTL }))),
        React.createElement("div", { className: "ms-ContextualMenuDirectionalExample-buttonArea" },
            React.createElement(Button_1.DefaultButton, { text: "Show context menu", menuProps: menuProps }))));
};
var menuItems = [
    {
        key: 'newItem',
        text: 'New',
    },
    {
        key: 'divider_1',
        itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
    },
    {
        key: 'rename',
        text: 'Rename',
    },
    {
        key: 'edit',
        text: 'Edit',
    },
    {
        key: 'properties',
        text: 'Properties',
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
    },
];
//# sourceMappingURL=ContextualMenu.Directional.Example.js.map