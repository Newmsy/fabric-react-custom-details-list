"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dialog_1 = require("office-ui-fabric-react/lib-commonjs/Dialog");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib-commonjs/ChoiceGroup");
var react_hooks_1 = require("@uifabric/react-hooks");
var options = [
    {
        key: 'A',
        text: 'Option A',
    },
    {
        key: 'B',
        text: 'Option B',
        checked: true,
    },
    {
        key: 'C',
        text: 'Option C',
        disabled: true,
    },
];
var modelProps = {
    isBlocking: false,
    styles: { main: { maxWidth: 450 } },
};
var dialogContentProps = {
    type: Dialog_1.DialogType.largeHeader,
    title: 'All emails together',
    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
};
exports.DialogLargeHeaderExample = function () {
    var _a = react_hooks_1.useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
        React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modelProps },
            React.createElement(ChoiceGroup_1.ChoiceGroup, { options: options }),
            React.createElement(Dialog_1.DialogFooter, null,
                React.createElement(Button_1.PrimaryButton, { onClick: toggleHideDialog, text: "Save" }),
                React.createElement(Button_1.DefaultButton, { onClick: toggleHideDialog, text: "Cancel" })))));
};
//# sourceMappingURL=Dialog.LargeHeader.Example.js.map