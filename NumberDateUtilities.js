"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var floatNum = 19.48893;
var dateStr = "2024-03-17";
var dateStr2 = "2024-03-17";
var dateStr3 = "2024-01-01";
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
 * Extract a date from a string (Format: "2024-03-17", "2024/03/17", etc)
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
console.log(compareDates(extractDate(dateStr, '-'), extractDate(dateStr2, '-')), compareDates(extractDate(dateStr2, '-'), extractDate(dateStr3, '-')), compareDates(extractDate(dateStr3, '-'), extractDate(dateStr2, '-')));
exports.default = {
    getRandomNumberInRange: getRandomNumberInRange,
    roundNumberToDecimalPlace: roundNumberToDecimalPlace,
    extractDate: extractDate,
    calculateDaysFromDate: calculateDaysFromDate,
};
