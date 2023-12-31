"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateValues_1 = require("../dateValues/DateValues");
var TimeConstants_1 = require("../dateValues/TimeConstants");
var Utilities_1 = require("../../Utilities");
/**
 * Returns a date offset from the given date by the specified number of days.
 * @param date - The origin date
 * @param days - The number of days to offset. 'days' can be negative.
 * @returns A new Date object offset from the origin date by the given number of days
 */
function addDays(date, days) {
    var result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
}
exports.addDays = addDays;
/**
 * Returns a date offset from the given date by the specified number of weeks.
 * @param date - The origin date
 * @param weeks - The number of weeks to offset. 'weeks' can be negative.
 * @returns A new Date object offset from the origin date by the given number of weeks
 */
function addWeeks(date, weeks) {
    return addDays(date, weeks * TimeConstants_1.default.DaysInOneWeek);
}
exports.addWeeks = addWeeks;
/**
 * Returns a date offset from the given date by the specified number of months.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param date - The origin date
 * @param months - The number of months to offset. 'months' can be negative.
 * @returns A new Date object offset from the origin date by the given number of months
 */
function addMonths(date, months) {
    var result = new Date(date.getTime());
    var newMonth = result.getMonth() + months;
    result.setMonth(newMonth);
    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
    // Loop until we back up to a day the new month has.
    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
    if (result.getMonth() !==
        ((newMonth % TimeConstants_1.default.MonthInOneYear) + TimeConstants_1.default.MonthInOneYear) % TimeConstants_1.default.MonthInOneYear) {
        result = addDays(result, -result.getDate());
    }
    return result;
}
exports.addMonths = addMonths;
/**
 * Returns a date offset from the given date by the specified number of years.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param date - The origin date
 * @param years - The number of years to offset. 'years' can be negative.
 * @returns A new Date object offset from the origin date by the given number of years
 */
function addYears(date, years) {
    var result = new Date(date.getTime());
    result.setFullYear(date.getFullYear() + years);
    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
    // Loop until we back up to a day the new month has.
    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
    if (result.getMonth() !==
        ((date.getMonth() % TimeConstants_1.default.MonthInOneYear) + TimeConstants_1.default.MonthInOneYear) % TimeConstants_1.default.MonthInOneYear) {
        result = addDays(result, -result.getDate());
    }
    return result;
}
exports.addYears = addYears;
/**
 * Returns a date that is the first day of the month of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the first day of the month.
 */
function getMonthStart(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}
exports.getMonthStart = getMonthStart;
/**
 * Returns a date that is the last day of the month of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the last day of the month.
 */
function getMonthEnd(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, 0);
}
exports.getMonthEnd = getMonthEnd;
/**
 * Returns a date that is the first day of the year of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the first day of the year.
 */
function getYearStart(date) {
    return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0);
}
exports.getYearStart = getYearStart;
/**
 * Returns a date that is the last day of the year of the provided date.
 * @param date - The origin date
 * @returns A new Date object with the day set to the last day of the year.
 */
function getYearEnd(date) {
    return new Date(date.getFullYear() + 1, 0, 0, 0, 0, 0, 0);
}
exports.getYearEnd = getYearEnd;
/**
 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param date - The origin date
 * @param month - The 0-based index of the month to set on the date.
 * @returns A new Date object with the given month set.
 */
function setMonth(date, month) {
    return addMonths(date, month - date.getMonth());
}
exports.setMonth = setMonth;
/**
 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
 * @returns True if the two dates represent the same date (regardless of time-of-day), false otherwise.
 */
function compareDates(date1, date2) {
    if (!date1 && !date2) {
        return true;
    }
    else if (!date1 || !date2) {
        return false;
    }
    else {
        return (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate());
    }
}
exports.compareDates = compareDates;
/**
 * Compare the date parts of two dates
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @returns A negative value if date1 is earlier than date2, 0 if the dates are equal, or a positive value
 * if date1 is later than date2.
 */
function compareDatePart(date1, date2) {
    return getDatePartHashValue(date1) - getDatePartHashValue(date2);
}
exports.compareDatePart = compareDatePart;
/**
 * Gets the date range array including the specified date. The date range array is calculated as the list
 * of dates accounting for the specified first day of the week and date range type.
 * @param date - The input date
 * @param dateRangeType - The desired date range type, i.e., day, week, month, etc.
 * @param firstDayOfWeek - The first day of the week.
 * @param workWeekDays - The allowed days in work week. If not provided, assumes all days are allowed.
 * @param daysToSelectInDayView - The number of days to include when using dateRangeType === DateRangeType.Day
 * for multiday view. Defaults to 1
 * @returns An array of dates representing the date range containing the specified date.
 */
function getDateRangeArray(date, dateRangeType, firstDayOfWeek, workWeekDays, daysToSelectInDayView) {
    if (daysToSelectInDayView === void 0) { daysToSelectInDayView = 1; }
    var datesArray = new Array();
    var startDate;
    var endDate = null;
    if (!workWeekDays) {
        workWeekDays = [DateValues_1.DayOfWeek.Monday, DateValues_1.DayOfWeek.Tuesday, DateValues_1.DayOfWeek.Wednesday, DateValues_1.DayOfWeek.Thursday, DateValues_1.DayOfWeek.Friday];
    }
    daysToSelectInDayView = Math.max(daysToSelectInDayView, 1);
    switch (dateRangeType) {
        case DateValues_1.DateRangeType.Day:
            startDate = getDatePart(date);
            endDate = addDays(startDate, daysToSelectInDayView);
            break;
        case DateValues_1.DateRangeType.Week:
        case DateValues_1.DateRangeType.WorkWeek:
            startDate = getStartDateOfWeek(getDatePart(date), firstDayOfWeek);
            endDate = addDays(startDate, TimeConstants_1.default.DaysInOneWeek);
            break;
        case DateValues_1.DateRangeType.Month:
            startDate = new Date(date.getFullYear(), date.getMonth(), 1);
            endDate = addMonths(startDate, 1);
            break;
        default:
            return Utilities_1.assertNever(dateRangeType);
    }
    // Populate the dates array with the dates in range
    var nextDate = startDate;
    do {
        if (dateRangeType !== DateValues_1.DateRangeType.WorkWeek) {
            // push all days not in work week view
            datesArray.push(nextDate);
        }
        else if (workWeekDays.indexOf(nextDate.getDay()) !== -1) {
            datesArray.push(nextDate);
        }
        nextDate = addDays(nextDate, 1);
    } while (!compareDates(nextDate, endDate));
    return datesArray;
}
exports.getDateRangeArray = getDateRangeArray;
/**
 * Checks whether the specified date is in the given date range.
 * @param date - The origin date
 * @param dateRange - An array of dates to do the lookup on
 * @returns True if the date matches one of the dates in the specified array, false otherwise.
 */
function isInDateRangeArray(date, dateRange) {
    for (var _i = 0, dateRange_1 = dateRange; _i < dateRange_1.length; _i++) {
        var dateInRange = dateRange_1[_i];
        if (compareDates(date, dateInRange)) {
            return true;
        }
    }
    return false;
}
exports.isInDateRangeArray = isInDateRangeArray;
/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param navigatedDate - A date to find the week number for.
 * @param firstDayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param firstWeekOfYear - The first week of the year (1-2)
 * @returns The weeks number array for the current month.
 */
function getWeekNumbersInMonth(weeksInMonth, firstDayOfWeek, firstWeekOfYear, navigatedDate) {
    var selectedYear = navigatedDate.getFullYear();
    var selectedMonth = navigatedDate.getMonth();
    var dayOfMonth = 1;
    var fistDayOfMonth = new Date(selectedYear, selectedMonth, dayOfMonth);
    var endOfFirstWeek = dayOfMonth +
        (firstDayOfWeek + TimeConstants_1.default.DaysInOneWeek - 1) -
        adjustWeekDay(firstDayOfWeek, fistDayOfMonth.getDay());
    var endOfWeekRange = new Date(selectedYear, selectedMonth, endOfFirstWeek);
    dayOfMonth = endOfWeekRange.getDate();
    var weeksArray = [];
    for (var i = 0; i < weeksInMonth; i++) {
        // Get week number for end of week
        weeksArray.push(getWeekNumber(endOfWeekRange, firstDayOfWeek, firstWeekOfYear));
        dayOfMonth += TimeConstants_1.default.DaysInOneWeek;
        endOfWeekRange = new Date(selectedYear, selectedMonth, dayOfMonth);
    }
    return weeksArray;
}
exports.getWeekNumbersInMonth = getWeekNumbersInMonth;
/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param date - A date to find the week number for.
 * @param firstDayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param firstWeekOfYear - The first week of the year (1-2)
 * @returns The week's number in the year.
 */
function getWeekNumber(date, firstDayOfWeek, firstWeekOfYear) {
    // First four-day week of the year - minumum days count
    var fourDayWeek = 4;
    switch (firstWeekOfYear) {
        case DateValues_1.FirstWeekOfYear.FirstFullWeek:
            return getWeekOfYearFullDays(date, firstDayOfWeek, TimeConstants_1.default.DaysInOneWeek);
        case DateValues_1.FirstWeekOfYear.FirstFourDayWeek:
            return getWeekOfYearFullDays(date, firstDayOfWeek, fourDayWeek);
        default:
            return getFirstDayWeekOfYear(date, firstDayOfWeek);
    }
}
exports.getWeekNumber = getWeekNumber;
/**
 * Gets the date for the first day of the week based on the given date assuming
 * the specified first day of the week.
 * @param date - The date to find the beginning of the week date for.
 * @returns A new date object representing the first day of the week containing the input date.
 */
function getStartDateOfWeek(date, firstDayOfWeek) {
    var daysOffset = firstDayOfWeek - date.getDay();
    if (daysOffset > 0) {
        // If first day of week is > date, go 1 week back, to ensure resulting date is in the past.
        daysOffset -= TimeConstants_1.default.DaysInOneWeek;
    }
    return addDays(date, daysOffset);
}
exports.getStartDateOfWeek = getStartDateOfWeek;
/**
 * Gets a new date with the time portion zeroed out, i.e., set to midnight
 * @param date - The origin date
 * @returns A new date with the time set to midnight
 */
function getDatePart(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
/**
 * Helper function to assist in date comparisons
 */
function getDatePartHashValue(date) {
    // Generate date hash value created as sum of Date (up to 31 = 5 bits), Month (up to 11 = 4 bits) and Year.
    /* tslint:disable:no-bitwise */
    return date.getDate() + (date.getMonth() << 5) + (date.getFullYear() << 9);
    /* tslint:enable:no-bitwise */
}
/**
 * Helper function for getWeekNumber.
 * Returns week number for a date
 * @param date - current selected date.
 * @param firstDayOfWeek - The first day of week (0-6, Sunday = 0)
 * @param numberOfFullDays - week settings.
 * @returns The week's number in the year.
 */
function getWeekOfYearFullDays(date, firstDayOfWeek, numberOfFullDays) {
    var dayOfYear = getDayOfYear(date) - 1;
    var num = date.getDay() - (dayOfYear % TimeConstants_1.default.DaysInOneWeek);
    var lastDayOfPrevYear = new Date(date.getFullYear() - 1, DateValues_1.MonthOfYear.December, 31);
    var daysInYear = getDayOfYear(lastDayOfPrevYear) - 1;
    var num2 = (firstDayOfWeek - num + 2 * TimeConstants_1.default.DaysInOneWeek) % TimeConstants_1.default.DaysInOneWeek;
    if (num2 !== 0 && num2 >= numberOfFullDays) {
        num2 -= TimeConstants_1.default.DaysInOneWeek;
    }
    var num3 = dayOfYear - num2;
    if (num3 < 0) {
        num -= daysInYear % TimeConstants_1.default.DaysInOneWeek;
        num2 = (firstDayOfWeek - num + 2 * TimeConstants_1.default.DaysInOneWeek) % TimeConstants_1.default.DaysInOneWeek;
        if (num2 !== 0 && num2 + 1 >= numberOfFullDays) {
            num2 -= TimeConstants_1.default.DaysInOneWeek;
        }
        num3 = daysInYear - num2;
    }
    return Math.floor(num3 / TimeConstants_1.default.DaysInOneWeek + 1);
}
/**
 * Helper function for getWeekNumber.
 * Returns week number for a date
 * @param date - current selected date.
 * @param firstDayOfWeek - The first day of week (0-6, Sunday = 0)
 * @returns The week's number in the year.
 */
function getFirstDayWeekOfYear(date, firstDayOfWeek) {
    var num = getDayOfYear(date) - 1;
    var num2 = date.getDay() - (num % TimeConstants_1.default.DaysInOneWeek);
    var num3 = (num2 - firstDayOfWeek + 2 * TimeConstants_1.default.DaysInOneWeek) % TimeConstants_1.default.DaysInOneWeek;
    return Math.floor((num + num3) / TimeConstants_1.default.DaysInOneWeek + 1);
}
/**
 * Helper function for getWeekNumber.
 * Returns adjusted week day number when firstDayOfWeek is other than Sunday
 * For Week Day Number comparison checks
 * @param firstDayOfWeek - The first day of week (0-6, Sunday = 0)
 * @param dateWeekDay - shifts number forward to 1 week in case passed as true
 * @returns The day of week adjusted to `firstDayOfWeek`; e.g. when `firstDayOfWeek` is Monday (1),
 * Sunday becomes 7.
 */
function adjustWeekDay(firstDayOfWeek, dateWeekDay) {
    return firstDayOfWeek !== DateValues_1.DayOfWeek.Sunday && dateWeekDay < firstDayOfWeek
        ? dateWeekDay + TimeConstants_1.default.DaysInOneWeek
        : dateWeekDay;
}
/**
 * Returns the day number for a date in a year
 * The number of days since January 1st in the particular year.
 * @param date - A date to find the day number for.
 * @returns The day's number in the year.
 */
function getDayOfYear(date) {
    var month = date.getMonth();
    var year = date.getFullYear();
    var daysUntilDate = 0;
    for (var i = 0; i < month; i++) {
        daysUntilDate += daysInMonth(i + 1, year);
    }
    daysUntilDate += date.getDate();
    return daysUntilDate;
}
/**
 * Returns the number of days in the month
 * @param month - The month number to target (months 1-12).
 * @param year - The year to target.
 * @returns The number of days in the month.
 */
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
//# sourceMappingURL=DateMath.js.map