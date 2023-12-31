"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Icon_1 = require("office-ui-fabric-react/lib-commonjs/Icon");
var Callout_1 = require("office-ui-fabric-react/lib-commonjs/Callout");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Text_1 = require("office-ui-fabric-react/lib-commonjs/Text");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var react_hooks_1 = require("@uifabric/react-hooks");
var stackTokens = {
    childrenGap: 4,
    maxWidth: 300,
};
var labelCalloutStackStyles = { root: { padding: 20 } };
var iconButtonStyles = { root: { marginBottom: -3 } };
var iconStyles = { root: { marginBottom: -3 } };
var iconProps = { iconName: 'Info' };
var getDescriptionStyles = Utilities_1.memoizeFunction(function (theme) { return ({
    root: { color: theme.palette.green, fontWeight: Styling_1.FontWeights.bold },
}); });
var onRenderDescription = function (props) {
    var theme = Styling_1.getTheme();
    return (React.createElement(Text_1.Text, { variant: "small", styles: getDescriptionStyles(theme) }, props.description));
};
var onWrapDefaultLabelRenderer = function (props, defaultRender) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack_1.Stack, { horizontal: true, verticalAlign: "center", tokens: stackTokens },
            React.createElement("span", null, defaultRender(props)),
            React.createElement(Icon_1.Icon, { iconName: "Globe", title: "Globe", ariaLabel: "Globe", styles: iconStyles }))));
};
var CustomLabel = function (props) {
    var _a = react_hooks_1.useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
    var descriptionId = react_hooks_1.useId('description');
    var iconButtonId = react_hooks_1.useId('iconButton');
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack_1.Stack, { horizontal: true, verticalAlign: "center", tokens: stackTokens },
            React.createElement("span", { id: props.id }, props.label),
            React.createElement(Button_1.IconButton, { id: iconButtonId, iconProps: iconProps, title: "Info", ariaLabel: "Info", onClick: toggleIsCalloutVisible, styles: iconButtonStyles })),
        isCalloutVisible && (React.createElement(Callout_1.Callout, { target: '#' + iconButtonId, setInitialFocus: true, onDismiss: toggleIsCalloutVisible, ariaDescribedBy: descriptionId, role: "alertdialog" },
            React.createElement(Stack_1.Stack, { tokens: stackTokens, horizontalAlign: "start", styles: labelCalloutStackStyles },
                React.createElement("span", { id: descriptionId }, "The custom label includes an IconButton that displays this Callout on click."),
                React.createElement(Button_1.DefaultButton, { onClick: toggleIsCalloutVisible }, "Close"))))));
};
exports.TextFieldCustomRenderExample = function () {
    var labelId = react_hooks_1.useId('label');
    var onRenderLabel = function (props) { return React.createElement(CustomLabel, tslib_1.__assign({ id: labelId }, props)); };
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(TextField_1.TextField, { "aria-labelledby": labelId, label: "Custom label rendering", onRenderLabel: onRenderLabel, description: "Click the (i) icon!" }),
        React.createElement(TextField_1.TextField, { label: "Wrapping default label renderer", onRenderLabel: onWrapDefaultLabelRenderer }),
        React.createElement(TextField_1.TextField, { label: "Custom description rendering", description: "A colorful description!", onRenderDescription: onRenderDescription })));
};
//# sourceMappingURL=TextField.CustomRender.Example.js.map