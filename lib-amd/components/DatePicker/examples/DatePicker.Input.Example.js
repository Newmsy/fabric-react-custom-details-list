define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/DatePicker", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Button_1, DatePicker_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    var firstDayOfWeek = DatePicker_1.DayOfWeek.Sunday;
    var desc = 'This field is required. One of the support input formats is year dash month dash day.';
    exports.DatePickerInputExample = function () {
        var _a = React.useState(null), value = _a[0], setValue = _a[1];
        var onSelectDate = function (date) {
            setValue(date);
        };
        var onClick = function () {
            setValue(null);
        };
        return (React.createElement("div", null,
            React.createElement("p", null, "Text input allowed by default when use keyboard navigation. Mouse click the TextField will popup DatePicker, click the TextField again will dismiss the DatePicker and allow text input."),
            React.createElement(DatePicker_1.DatePicker, { className: controlClass.control, label: "Start date", isRequired: false, allowTextInput: true, ariaLabel: desc, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, value: value, onSelectDate: onSelectDate }),
            React.createElement(Button_1.DefaultButton, { onClick: onClick, text: "Clear" })));
    };
});
//# sourceMappingURL=DatePicker.Input.Example.js.map