"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Panel_1 = require("office-ui-fabric-react/lib-commonjs/Panel");
var react_hooks_1 = require("@uifabric/react-hooks");
var explanation = 'This example demonstrates detecting whether a panel was dismissed using the close button ' +
    'or using "light dismiss" (a click outside the panel area).';
exports.PanelHandleDismissTargetExample = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = react_hooks_1.useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = react_hooks_1.useConstCallback(function () { return setIsOpen(false); });
    var onDismiss = react_hooks_1.useConstCallback(function (ev) {
        if (!ev) {
            console.log('Panel dismissed.');
            return;
        }
        // Demonstrates how to do different things depending on how which element dismissed the panel
        console.log('Close button clicked or light dismissed.');
        // tslint:disable-next-line:deprecation
        var srcElement = ev.nativeEvent.srcElement;
        if (srcElement && srcElement.className.indexOf('ms-Button-icon') !== -1) {
            console.log('Close button clicked.');
        }
        if (srcElement && srcElement.className.indexOf('ms-Overlay') !== -1) {
            console.log('Light dismissed.');
        }
        dismissPanel();
    });
    return (React.createElement("div", null,
        explanation,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: openPanel }),
        React.createElement(Panel_1.Panel, { isOpen: isOpen, onDismiss: onDismiss, headerText: "Panel - Handle close button clicks or light dismissal", closeButtonAriaLabel: "Close", isLightDismiss: true },
            React.createElement("div", null,
                React.createElement("p", null, explanation),
                React.createElement("p", null, "(Check the debug console for results after dismissing the panel.)")))));
};
//# sourceMappingURL=Panel.HandleDismissTarget.Example.js.map