"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Calendar_1 = require("office-ui-fabric-react/lib-commonjs/Calendar");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var DateMath_1 = require("office-ui-fabric-react/lib-commonjs/utilities/dateMath/DateMath");
var dayPickerStrings = {
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
    weekNumberFormatString: 'Week number {0}',
    prevMonthAriaLabel: 'Previous month',
    nextMonthAriaLabel: 'Next month',
    prevYearAriaLabel: 'Previous year',
    nextYearAriaLabel: 'Next year',
    prevYearRangeAriaLabel: 'Previous year range',
    nextYearRangeAriaLabel: 'Next year range',
    closeButtonAriaLabel: 'Close',
};
var divStyle = {
    height: 'auto',
};
var buttonStyle = {
    margin: '17px 10px 0 0',
};
var dateRangeString = null;
exports.CalendarInlineExample = function (props) {
    var _a = React.useState(), selectedDateRange = _a[0], setSelectedDateRange = _a[1];
    var _b = React.useState(), selectedDate = _b[0], setSelectedDate = _b[1];
    var onSelectDate = function (date, dateRangeArray) {
        setSelectedDate(date);
        setSelectedDateRange(dateRangeArray);
    };
    var goPrevious = function () {
        var goPreviousSelectedDate = selectedDate || new Date();
        var dateRangeArray = DateMath_1.getDateRangeArray(goPreviousSelectedDate, props.dateRangeType, Calendar_1.DayOfWeek.Sunday);
        var subtractFrom = dateRangeArray[0];
        var daysToSubtract = dateRangeArray.length;
        if (props.dateRangeType === Calendar_1.DateRangeType.Month) {
            subtractFrom = new Date(subtractFrom.getFullYear(), subtractFrom.getMonth(), 1);
            daysToSubtract = 1;
        }
        var newSelectedDate = DateMath_1.addDays(subtractFrom, -daysToSubtract);
        return {
            goPreviousSelectedDate: newSelectedDate,
        };
    };
    var goNext = function () {
        var goNextSelectedDate = selectedDate || new Date();
        var dateRangeArray = DateMath_1.getDateRangeArray(goNextSelectedDate, props.dateRangeType, Calendar_1.DayOfWeek.Sunday);
        var newSelectedDate = DateMath_1.addDays(dateRangeArray.pop(), 1);
        return {
            goNextSelectedDate: newSelectedDate,
        };
    };
    var onDismiss = function () {
        return selectedDate;
    };
    if (selectedDateRange) {
        var rangeStart = selectedDateRange[0];
        var rangeEnd = selectedDateRange[selectedDateRange.length - 1];
        dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
    }
    return (React.createElement("div", { style: divStyle },
        React.createElement("div", null,
            "Selected date(s): ",
            React.createElement("span", null, !selectedDate ? 'Not set' : selectedDate.toLocaleString())),
        React.createElement("div", null,
            "Selected dates:",
            React.createElement("span", null,
                " ",
                !dateRangeString ? 'Not set' : dateRangeString)),
        (props.minDate || props.maxDate) && (React.createElement("div", null,
            "Date boundary:",
            React.createElement("span", null,
                ' ',
                props.minDate ? props.minDate.toLocaleDateString() : 'Not set',
                "-",
                props.maxDate ? props.maxDate.toLocaleDateString() : 'Not set'))),
        props.restrictedDates && (React.createElement("div", null,
            "Disabled date(s):",
            React.createElement("span", null,
                ' ',
                props.restrictedDates.length > 0
                    ? props.restrictedDates.map(function (d) { return d.toLocaleDateString(); }).join(', ')
                    : 'Not set'))),
        React.createElement(Calendar_1.Calendar, { onSelectDate: onSelectDate, onDismiss: onDismiss, isMonthPickerVisible: props.isMonthPickerVisible, dateRangeType: props.dateRangeType, autoNavigateOnSelection: props.autoNavigateOnSelection, showGoToToday: props.showGoToToday, value: selectedDate, firstDayOfWeek: props.firstDayOfWeek ? props.firstDayOfWeek : Calendar_1.DayOfWeek.Sunday, strings: dayPickerStrings, highlightCurrentMonth: props.highlightCurrentMonth, highlightSelectedMonth: props.highlightSelectedMonth, isDayPickerVisible: props.isDayPickerVisible, showMonthPickerAsOverlay: props.showMonthPickerAsOverlay, showWeekNumbers: props.showWeekNumbers, minDate: props.minDate, maxDate: props.maxDate, restrictedDates: props.restrictedDates, showSixWeeksByDefault: props.showSixWeeksByDefault, workWeekDays: props.workWeekDays }),
        props.showNavigateButtons && (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { style: buttonStyle, onClick: goPrevious, text: "Previous" }),
            React.createElement(Button_1.DefaultButton, { style: buttonStyle, onClick: goNext, text: "Next" })))));
};
//# sourceMappingURL=Calendar.Inline.Example.js.map