import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
var DayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
    isRequiredErrorMessage: 'Start date is required.',
    invalidInputErrorMessage: 'Invalid date format.',
};
var controlClass = mergeStyleSets({
    control: {
        margin: '0 0 15px 0',
        maxWidth: '300px',
    },
});
var firstDayOfWeek = DayOfWeek.Sunday;
var desc = 'This field is required. One of the support input formats is year dash month dash day.';
export var DatePickerInputExample = function () {
    var _a = React.useState(null), value = _a[0], setValue = _a[1];
    var onSelectDate = function (date) {
        setValue(date);
    };
    var onClick = function () {
        setValue(null);
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Text input allowed by default when use keyboard navigation. Mouse click the TextField will popup DatePicker, click the TextField again will dismiss the DatePicker and allow text input."),
        React.createElement(DatePicker, { className: controlClass.control, label: "Start date", isRequired: false, allowTextInput: true, ariaLabel: desc, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, value: value, onSelectDate: onSelectDate }),
        React.createElement(DefaultButton, { onClick: onClick, text: "Clear" })));
};
//# sourceMappingURL=DatePicker.Input.Example.js.map