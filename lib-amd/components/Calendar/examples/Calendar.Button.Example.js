define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Callout", "office-ui-fabric-react/lib/Calendar", "office-ui-fabric-react/lib/FocusTrapZone", "@uifabric/react-hooks"], function (require, exports, React, Button_1, Callout_1, Calendar_1, FocusTrapZone_1, react_hooks_1) {
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
        weekNumberFormatString: 'Week number {0}',
        prevMonthAriaLabel: 'Previous month',
        nextMonthAriaLabel: 'Next month',
        prevYearAriaLabel: 'Previous year',
        nextYearAriaLabel: 'Next year',
        prevYearRangeAriaLabel: 'Previous year range',
        nextYearRangeAriaLabel: 'Next year range',
        closeButtonAriaLabel: 'Close',
    };
    var calendarButtonElement;
    exports.CalendarButtonExample = function (props) {
        var _a = react_hooks_1.useBoolean(false), showCalendar = _a[0], toggleShowCalendar = _a[1].toggle;
        var _b = React.useState(), selectedDate = _b[0], setSelectedDate = _b[1];
        var _c = props.showMonthPickerAsOverlay, showMonthPickerAsOverlay = _c === void 0 ? false : _c, _d = props.isDayPickerVisible, isDayPickerVisible = _d === void 0 ? true : _d, _e = props.isMonthPickerVisible, isMonthPickerVisible = _e === void 0 ? true : _e, _f = props.showGoToToday, showGoToToday = _f === void 0 ? true : _f, _g = props.buttonString, buttonString = _g === void 0 ? 'Click for Calendar' : _g, highlightCurrentMonth = props.highlightCurrentMonth, highlightSelectedMonth = props.highlightSelectedMonth;
        var onSelectDate = function (date) {
            toggleShowCalendar();
            setSelectedDate(date);
        };
        return (React.createElement("div", null,
            React.createElement("div", { ref: function (calendarBtn) { return (calendarButtonElement = calendarBtn); } },
                React.createElement(Button_1.DefaultButton, { onClick: toggleShowCalendar, text: !selectedDate ? buttonString : selectedDate.toLocaleDateString() })),
            showCalendar && (React.createElement(Callout_1.Callout, { isBeakVisible: false, className: "ms-DatePicker-callout", gapSpace: 0, doNotLayer: false, target: calendarButtonElement, directionalHint: Callout_1.DirectionalHint.bottomLeftEdge, onDismiss: toggleShowCalendar, setInitialFocus: true },
                React.createElement(FocusTrapZone_1.FocusTrapZone, { firstFocusableSelector: "ms-DatePicker-day--today", isClickableOutsideFocusTrap: true },
                    React.createElement(Calendar_1.Calendar, { onSelectDate: onSelectDate, onDismiss: toggleShowCalendar, isMonthPickerVisible: isMonthPickerVisible, value: selectedDate, firstDayOfWeek: Calendar_1.DayOfWeek.Sunday, strings: DayPickerStrings, isDayPickerVisible: isDayPickerVisible, highlightCurrentMonth: highlightCurrentMonth, highlightSelectedMonth: highlightSelectedMonth, showMonthPickerAsOverlay: showMonthPickerAsOverlay, showGoToToday: showGoToToday }))))));
    };
});
//# sourceMappingURL=Calendar.Button.Example.js.map