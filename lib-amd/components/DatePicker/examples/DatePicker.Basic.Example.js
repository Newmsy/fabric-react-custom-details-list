define(["require", "exports", "react", "office-ui-fabric-react/lib/Dropdown", "office-ui-fabric-react"], function (require, exports, React, Dropdown_1, office_ui_fabric_react_1) {
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
    var controlClass = office_ui_fabric_react_1.mergeStyleSets({
        control: {
            margin: '0 0 15px 0',
            maxWidth: '300px',
        },
    });
    exports.DatePickerBasicExample = function () {
        var _a = React.useState(office_ui_fabric_react_1.DayOfWeek.Sunday), firstDayOfWeek = _a[0], setFirstDayOfWeek = _a[1];
        var onDropdownChange = function (event, option) {
            setFirstDayOfWeek(office_ui_fabric_react_1.DayOfWeek[option.key]);
        };
        return (React.createElement("div", null,
            React.createElement(office_ui_fabric_react_1.DatePicker, { className: controlClass.control, firstDayOfWeek: firstDayOfWeek, strings: DayPickerStrings, placeholder: "Select a date...", ariaLabel: "Select a date" }),
            React.createElement(Dropdown_1.Dropdown, { className: controlClass.control, label: "Select the first day of the week", options: [
                    {
                        text: 'Sunday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Sunday],
                    },
                    {
                        text: 'Monday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Monday],
                    },
                    {
                        text: 'Tuesday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Tuesday],
                    },
                    {
                        text: 'Wednesday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Wednesday],
                    },
                    {
                        text: 'Thursday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Thursday],
                    },
                    {
                        text: 'Friday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Friday],
                    },
                    {
                        text: 'Saturday',
                        key: office_ui_fabric_react_1.DayOfWeek[office_ui_fabric_react_1.DayOfWeek.Saturday],
                    },
                ], selectedKey: office_ui_fabric_react_1.DayOfWeek[firstDayOfWeek], onChange: onDropdownChange })));
    };
});
//# sourceMappingURL=DatePicker.Basic.Example.js.map