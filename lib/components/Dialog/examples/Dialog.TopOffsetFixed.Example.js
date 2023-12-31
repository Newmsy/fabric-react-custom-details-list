import * as React from 'react';
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { useBoolean } from '@uifabric/react-hooks';
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
export var DialogTopOffsetFixedExample = function () {
    var _a = useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
    var _b = React.useState('A'), optionSelected = _b[0], setOptionSelected = _b[1];
    var onChange = function (ev, option) {
        setOptionSelected(option.key);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, modalProps: modelProps },
            React.createElement(ChoiceGroup, { label: "Pick one icon", options: options, onChange: onChange, required: true }),
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
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: toggleHideDialog, text: "Save" }),
                React.createElement(DefaultButton, { onClick: toggleHideDialog, text: "Cancel" })))));
};
//# sourceMappingURL=Dialog.TopOffsetFixed.Example.js.map