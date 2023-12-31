"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var FocusTrapZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusTrapZone");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var react_hooks_1 = require("@uifabric/react-hooks");
var getStackStyles = Utilities_1.memoizeFunction(function (isActive) { return ({
    root: { border: "2px solid " + (isActive ? '#ababab' : 'transparent'), padding: 10 },
}); });
var stackTokens = { childrenGap: 10 };
var fixedWidthToggleStyles = { root: { width: 200 } };
var FocusTrapComponent = function (props) {
    var _a = react_hooks_1.useBoolean(false), isActive = _a[0], toggleIsActive = _a[1].toggle;
    var zoneNumber = props.zoneNumber, children = props.children;
    var onStringButtonClicked = function () {
        alert("Button " + zoneNumber + " clicked");
    };
    return (React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !isActive, forceFocusInsideTrap: false },
        React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: stackTokens, styles: getStackStyles(isActive) },
            React.createElement(Toggle_1.Toggle, { checked: isActive, onChange: toggleIsActive, label: 'Enable trap zone ' + zoneNumber, onText: "On (toggle to exit)", offText: "Off", 
                // Set a width on these toggles in the horizontal zone to prevent jumping when enabled
                styles: zoneNumber >= 2 && zoneNumber <= 4 ? fixedWidthToggleStyles : undefined }),
            React.createElement(Button_1.DefaultButton, { onClick: onStringButtonClicked, text: "Zone " + zoneNumber + " button" }),
            children)));
};
exports.FocusTrapZoneNestedExample = function () { return (React.createElement("div", null,
    React.createElement(FocusTrapComponent, { zoneNumber: 1 },
        React.createElement(FocusTrapComponent, { zoneNumber: 2 },
            React.createElement(FocusTrapComponent, { zoneNumber: 3 }),
            React.createElement(FocusTrapComponent, { zoneNumber: 4 })),
        React.createElement(FocusTrapComponent, { zoneNumber: 5 })))); };
//# sourceMappingURL=FocusTrapZone.Nested.Example.js.map