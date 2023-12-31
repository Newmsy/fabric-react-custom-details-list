"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hooks_1 = require("@uifabric/react-hooks");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Callout_1 = require("office-ui-fabric-react/lib-commonjs/Callout");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var Icon_1 = require("office-ui-fabric-react/lib-commonjs/Icon");
var stylesImport = require("./ContextualMenuExample.scss");
// tslint:disable-next-line:no-any
var styles = stylesImport;
exports.ContextualMenuIconExample = function () {
    var _a = React.useState(false), showCallout = _a[0], setShowCallout = _a[1];
    var onShowCallout = react_hooks_1.useConstCallback(function () { return setShowCallout(true); });
    var onHideCallout = react_hooks_1.useConstCallback(function () { return setShowCallout(false); });
    var menuItems = react_hooks_1.useConst([
        {
            key: 'openInWord',
            text: 'Open in Word',
            onRenderIcon: function (props) {
                return (React.createElement("span", { className: styles.iconContainer },
                    React.createElement(Icon_1.Icon, { iconName: 'WordLogoFill16', className: styles.logoFillIcon }),
                    React.createElement(Icon_1.Icon, { iconName: 'WordLogo16', className: styles.logoIcon })));
            },
        },
        {
            key: 'newItem',
            iconProps: {
                iconName: 'Add',
            },
            text: 'New',
        },
        {
            key: 'upload',
            onClick: onShowCallout,
            iconProps: {
                iconName: 'Upload',
                style: {
                    color: 'salmon',
                },
            },
            text: 'Upload (Click for popup)',
            title: 'Upload a file',
        },
        {
            key: 'divider_1',
            itemType: ContextualMenu_1.ContextualMenuItemType.Divider,
        },
        {
            key: 'share',
            iconProps: {
                iconName: 'Share',
            },
            text: 'Share',
        },
        {
            key: 'print',
            iconProps: {
                iconName: 'Print',
            },
            text: 'Print',
        },
        {
            key: 'music',
            iconProps: {
                iconName: 'MusicInCollectionFill',
            },
            text: 'Music',
        },
    ]);
    var menuProps = react_hooks_1.useConst({
        shouldFocusOnMount: true,
        items: menuItems,
    });
    return (React.createElement("div", null,
        React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps }),
        showCallout && (React.createElement(Callout_1.Callout, { setInitialFocus: true, onDismiss: onHideCallout },
            React.createElement(Button_1.DefaultButton, { onClick: onHideCallout, text: "Hello Popup" })))));
};
//# sourceMappingURL=ContextualMenu.Icon.Example.js.map