define(["require", "exports", "react", "office-ui-fabric-react/lib/DatePicker", "office-ui-fabric-react/lib/utilities/dateMath/DateMath", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, DatePicker_1, DateMath_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var today = new Date(Date.now());
    var minDate = DateMath_1.addMonths(today, -1);
    var maxDate = DateMath_1.addYears(today, 1);
    var description = "When date boundaries are set (via minDate and maxDate props) the DatePicker will not allow\nout-of-bounds dates to be picked or entered. In this example, the allowed dates are\n" + minDate.toLocaleDateString() + "-" + maxDate.toLocaleDateString();
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
        isRequiredErrorMessage: 'Field is required.',
        invalidInputErrorMessage: 'Invalid date format.',
        isOutOfBoundsErrorMessage: "Date must be between " + minDate.toLocaleDateString() + "-" + maxDate.toLocaleDateString(),
    };
    var controlClass = Styling_1.mergeStyleSets({
        control: {
            margin: '0 0 15px 0',
            maxWidth: '300px',
        },
    });
    var firstDayOfWeek = DatePicker_1.DayOfWeek.Sunday;
    exports.DatePickerBoundedExample = function () { return (React.createElement("div", null,
        React.createElement("p", null, description),
        React.createElement(DatePicker_1.DatePicker, { className: controlClass.control, isRequired: false, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Select a date...", ariaLabel: "Select a date", minDate: minDate, maxDate: maxDate, allowTextInput: true }))); };
});
//# sourceMappingURL=DatePicker.Bounded.Example.js.map