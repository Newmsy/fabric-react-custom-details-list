define(["require", "exports", "react", "office-ui-fabric-react/lib/DatePicker", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, DatePicker_1, Styling_1) {
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
    };
    var controlClass = Styling_1.mergeStyleSets({
        control: {
            margin: '0 0 15px 0',
            maxWidth: '300px',
        },
    });
    var firstDayOfWeek = DatePicker_1.DayOfWeek.Sunday;
    exports.DatePickerDisabledExample = function () { return (React.createElement("div", null,
        React.createElement(DatePicker_1.DatePicker, { className: controlClass.control, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Select a date...", ariaLabel: "Select a date", disabled: true }),
        React.createElement(DatePicker_1.DatePicker, { className: controlClass.control, label: "Disabled (with label)", firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Select a date...", ariaLabel: "Select a date", disabled: true }))); };
});
//# sourceMappingURL=DatePicker.Disabled.Example.js.map