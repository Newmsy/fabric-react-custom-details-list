"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var DatePicker_1 = require("office-ui-fabric-react/lib-commonjs/DatePicker");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
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
var controlClass = Styling_1.mergeStyleSets({
    control: {
        margin: '0 0 15px 0',
        maxWidth: '300px',
    },
});
var onFormatDate = function (date) {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
};
var desc = 'This field is required. One of the support input formats is year dash month dash day.';
var firstDayOfWeek = DatePicker_1.DayOfWeek.Sunday;
exports.DatePickerFormatExample = function () {
    var _a = React.useState(null), value = _a[0], setValue = _a[1];
    var onSelectDate = function (date) {
        setValue(date);
    };
    var onClick = function () {
        setValue(null);
    };
    var onParseDateFromString = function (val) {
        var date = value || new Date();
        var values = (val || '').trim().split('/');
        var day = val.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
        var month = val.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
        var year = val.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
        if (year < 100) {
            year += date.getFullYear() - (date.getFullYear() % 100);
        }
        return new Date(year, month, day);
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "Applications can customize how dates are formatted and parsed. Formatted dates can be ambiguous, so the control will avoid parsing the formatted strings of dates selected using the UI when text input is allowed. In this example, we are formatting and parsing dates as dd/MM/yy."),
        React.createElement(DatePicker_1.DatePicker, { className: controlClass.control, label: "Start date", isRequired: false, allowTextInput: true, ariaLabel: desc, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, value: value, onSelectDate: onSelectDate, formatDate: onFormatDate, parseDateFromString: onParseDateFromString }),
        React.createElement(Button_1.DefaultButton, { onClick: onClick, text: "Clear" }),
        React.createElement("div", null, (value || '').toString())));
};
//# sourceMappingURL=DatePicker.Format.Example.js.map