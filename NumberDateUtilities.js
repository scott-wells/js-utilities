function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function roundNumberToDecimalPlace(number, decimalPlace) {
    var numToRound = number * (Math.pow(10, decimalPlace));
    var roundedNum = Math.round(numToRound);
    roundedNum /= (Math.pow(10, decimalPlace));
    return roundedNum;
}
/**
 * Extract a date from a string ("YYYY-MM-DD", "YYYY/MM/DD", etc)
 * @param {string} dateString
 * @param {string} delimiter
 * @returns {Date} The new date after performing the calculation.
 */
function extractDate(dateString, delimiter) {
    var dateArr = dateString.split(delimiter);
    var year = Number(dateArr[0]);
    var month = Number(dateArr[1]);
    var day = Number(dateArr[2]);
    return new Date(year, month - 1, day);
}
/**
 * Add or subtract days from Date by passing negative or positive integer(days)
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add or subtract.
 * @returns {Date} The new date after performing the calculation.
 */
function calculateDaysFromDate(date, days) {
    var result = new Date(date.getTime());
    var currentDay = date.getDate();
    result.setDate(currentDay + days);
    return result;
}
/**
 * Compare if two dates are equal, greater, or less than (ignores HH:MM:SS:ms).
 * @param {Date} a - Date to compare.
 * @param {Date} b - Date to compare against.
 * @returns {boolean} Returns 0 if equal, -1 if less than, 1 if greater than.
 */
function compareDates(a, b) {
    var date1 = new Date(a.getTime()).setHours(0, 0, 0, 0);
    var date2 = new Date(b.getTime()).setHours(0, 0, 0, 0);
    var result = 0;
    if (date1 === date2)
        result = 0;
    if (date1 < date2)
        result = -1;
    if (date1 > date2)
        result = 1;
    return result;
}
/**
 * Takes two dates and calculates difference in milliseconds.
 * @param {Date} a - Older date
 * @param {Date} b - Newer date
 * @returns {number} Returns result in milliseconds.
 */
function calculateDifferenceOfDates(a, b) {
    var num1 = Number(a);
    var num2 = Number(b);
    return num1 - num2;
}
function convertMillisecsToDays(milliseconds) {
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerDay);
}
function convertMillisecsToHours(milliseconds) {
    var millisecondsPerHour = 1000 * 60 * 60;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerHour);
}
function convertMillisecsToMinutes(milliseconds) {
    var millisecondsPerMinute = 1000 * 60;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerMinute);
}
function convertMillisecsToSeconds(milliseconds) {
    var millisecondsPerSecond = 1000;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerSecond);
}
var SetPerformanceTimer = /** @class */ (function () {
    function SetPerformanceTimer() {
        this.startTicker = 0;
    }
    SetPerformanceTimer.prototype.start = function () {
        var ticker = window.performance.now();
        console.log("--> Start Performance Timer");
        this.startTicker = ticker;
        return;
    };
    SetPerformanceTimer.prototype.end = function () {
        var ticker = window.performance.now();
        var diff = ticker - this.startTicker;
        console.log("--> End Performance Timer");
        console.log("Time Elapsed: ", diff + "ms");
        return;
    };
    return SetPerformanceTimer;
}());
// export {
//     getRandomNumberInRange,
//     roundNumberToDecimalPlace,
//     extractDate,
//     calculateDaysFromDate,
//     compareDates,
//     SetPerformanceTimer
// };
