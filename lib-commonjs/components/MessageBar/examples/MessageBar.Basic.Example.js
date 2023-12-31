"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var horizontalStackProps = {
    horizontal: true,
    tokens: { childrenGap: 16 },
};
var verticalStackProps = {
    styles: { root: { overflow: 'hidden', width: '100%' } },
    tokens: { childrenGap: 20 },
};
var choiceGroupStyles = {
    label: {
        maxWidth: 250,
    },
};
var DefaultExample = function () { return (React.createElement(office_ui_fabric_react_1.MessageBar, null,
    "Info/Default MessageBar.",
    React.createElement(office_ui_fabric_react_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))); };
var ErrorExample = function (p) { return (React.createElement(office_ui_fabric_react_1.MessageBar, { messageBarType: office_ui_fabric_react_1.MessageBarType.error, isMultiline: false, onDismiss: p.resetChoice, dismissButtonAriaLabel: "Close" },
    "Error MessageBar with single line, with dismiss button.",
    React.createElement(office_ui_fabric_react_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))); };
var BlockedExample = function (p) { return (React.createElement(office_ui_fabric_react_1.MessageBar, { messageBarType: office_ui_fabric_react_1.MessageBarType.blocked, isMultiline: false, onDismiss: p.resetChoice, dismissButtonAriaLabel: "Close", truncated: true, overflowButtonAriaLabel: "See more" },
    React.createElement("b", null, "Blocked MessageBar - single line, with dismiss button and truncated text."),
    " Truncation is not available if you use action buttons or multiline and should be used sparingly. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.")); };
var SevereExample = function (p) { return (React.createElement(office_ui_fabric_react_1.MessageBar, { messageBarType: office_ui_fabric_react_1.MessageBarType.severeWarning, actions: React.createElement("div", null,
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "Yes"),
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "No")) },
    "SevereWarning MessageBar with action buttons which defaults to multiline.",
    React.createElement(office_ui_fabric_react_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))); };
var SuccessExample = function () { return (React.createElement(office_ui_fabric_react_1.MessageBar, { actions: React.createElement("div", null,
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "Yes"),
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "No")), messageBarType: office_ui_fabric_react_1.MessageBarType.success, isMultiline: false },
    "Success MessageBar with single line and action buttons.",
    React.createElement(office_ui_fabric_react_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))); };
var WarningExample = function (p) { return (React.createElement(office_ui_fabric_react_1.MessageBar, { messageBarType: office_ui_fabric_react_1.MessageBarType.warning, isMultiline: false, onDismiss: p.resetChoice, dismissButtonAriaLabel: "Close", actions: React.createElement("div", null,
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "Action")) },
    "Warning MessageBar content.",
    React.createElement(office_ui_fabric_react_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))); };
var WarningExample2 = function (p) { return (React.createElement(office_ui_fabric_react_1.MessageBar, { onDismiss: p.resetChoice, dismissButtonAriaLabel: "Close", messageBarType: office_ui_fabric_react_1.MessageBarType.warning, actions: React.createElement("div", null,
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "Yes"),
        React.createElement(office_ui_fabric_react_1.MessageBarButton, null, "No")) },
    React.createElement("b", null, "Warning defaults to multiline"),
    ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.",
    React.createElement(office_ui_fabric_react_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))); };
var choiceOptions = [
    {
        key: 'default',
        text: 'Default',
    },
    {
        key: 'error',
        text: 'Error MessageBar',
    },
    {
        key: 'blocked',
        text: 'Blocked MessageBar',
    },
    {
        key: 'severe',
        text: 'SevereWarning MessageBar',
    },
    {
        key: 'success',
        text: 'Success MessageBar',
    },
    {
        key: 'warning',
        text: 'Warning MessageBar - single line',
    },
    {
        key: 'warning2',
        text: 'Warning MessageBar - multiline',
    },
    {
        key: 'all',
        text: 'Show All',
    },
];
exports.MessageBarBasicExample = function () {
    var _a = React.useState(undefined), choice = _a[0], setChoice = _a[1];
    var showAll = choice === 'all';
    var resetChoice = function () { return setChoice(undefined); };
    return (React.createElement(office_ui_fabric_react_1.Stack, tslib_1.__assign({}, horizontalStackProps),
        React.createElement(office_ui_fabric_react_1.StackItem, { disableShrink: true },
            React.createElement(office_ui_fabric_react_1.ChoiceGroup, { styles: choiceGroupStyles, label: "Select a MessageBar Example Below. To test in narrator, show one message at a time.", selectedKey: choice, 
                // tslint:disable-next-line: jsx-no-lambda
                onChange: function (e, v) { return setChoice(v.key); }, options: choiceOptions })),
        React.createElement(office_ui_fabric_react_1.Stack, tslib_1.__assign({}, verticalStackProps),
            (choice === 'default' || showAll) && React.createElement(DefaultExample, null),
            (choice === 'error' || showAll) && React.createElement(ErrorExample, { resetChoice: resetChoice }),
            (choice === 'blocked' || showAll) && React.createElement(BlockedExample, { resetChoice: resetChoice }),
            (choice === 'severe' || showAll) && React.createElement(SevereExample, { resetChoice: resetChoice }),
            (choice === 'success' || showAll) && React.createElement(SuccessExample, null),
            (choice === 'warning' || showAll) && React.createElement(WarningExample, { resetChoice: resetChoice }),
            (choice === 'warning2' || showAll) && React.createElement(WarningExample2, { resetChoice: resetChoice }))));
};
//# sourceMappingURL=MessageBar.Basic.Example.js.map