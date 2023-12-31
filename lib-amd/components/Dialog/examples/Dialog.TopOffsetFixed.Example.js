define(["require", "exports", "react", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/ChoiceGroup", "@uifabric/react-hooks"], function (require, exports, React, Dialog_1, Button_1, ChoiceGroup_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modelProps = {
        isBlocking: true,
        topOffsetFixed: true,
    };
    var options = [
        {
            key: 'A',
            iconProps: { iconName: 'CalendarDay' },
            text: 'Day',
        },
        {
            key: 'B',
            iconProps: { iconName: 'CalendarWeek' },
            text: 'Week',
        },
        {
            key: 'C',
            iconProps: { iconName: 'Calendar' },
            text: 'Month',
        },
    ];
    exports.DialogTopOffsetFixedExample = function () {
        var _a = react_hooks_1.useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
        var _b = React.useState('A'), optionSelected = _b[0], setOptionSelected = _b[1];
        var onChange = function (ev, option) {
            setOptionSelected(option.key);
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
            React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, modalProps: modelProps },
                React.createElement(ChoiceGroup_1.ChoiceGroup, { label: "Pick one icon", options: options, onChange: onChange, required: true }),
                optionSelected === 'A' && (React.createElement("div", null,
                    React.createElement("h1", null, "Description"),
                    React.createElement("div", null,
                        ' ',
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        ' '))),
                optionSelected === 'B' && (React.createElement("div", null,
                    React.createElement("h1", null, "Description"),
                    React.createElement("div", null,
                        ' ',
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        ' '))),
                optionSelected === 'C' && (React.createElement("div", null,
                    React.createElement("h1", null, "Description"))),
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: toggleHideDialog, text: "Save" }),
                    React.createElement(Button_1.DefaultButton, { onClick: toggleHideDialog, text: "Cancel" })))));
    };
});
//# sourceMappingURL=Dialog.TopOffsetFixed.Example.js.map