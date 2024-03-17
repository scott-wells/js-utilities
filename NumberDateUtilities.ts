const floatNum: number = 19.48893;
const dateStr: string = "2024-03-17";
const dateStr2: string = "2024-03-17";
const dateStr3: string = "2024-01-01";

function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function roundNumberToDecimalPlace(number: number, decimalPlace: number): number {
    const numToRound = number * (10**decimalPlace);
    let roundedNum = Math.round(numToRound);
    roundedNum /= (10**decimalPlace);
    return roundedNum;
}

/**
 * Extract a date from a string ("YYYY-MM-DD", "YYYY/MM/DD", etc)
 * @param {string} dateString 
 * @param {string} delimiter 
 * @returns {Date} The new date after performing the calculation.
 */
function extractDate(dateString: string, delimiter: string): Date {
    const dateArr = dateString.split(delimiter);
    const year = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const day = Number(dateArr[2]);
    return new Date(year, month - 1, day);
}

/**
 * Add or subtract days from Date by passing negative or positive integer(days)
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add or subtract.
 * @returns {Date} The new date after performing the calculation.
 */ 
function calculateDaysFromDate(date: Date, days: number): Date {
    const result = new Date(date.getTime());
    const currentDay = date.getDate();
        result.setDate(currentDay + days);
    return result;
}

/**
 * Compare if two dates are equal, greater, or less than (ignores HH:MM:SS:ms).
 * @param {Date} a - Date to compare.
 * @param {Date} b - Date to compare against.
 * @returns {boolean} Returns 0 if equal, -1 if less than, 1 if greater than.
 */
function compareDates(a: Date, b: Date): number {
    const date1 = new Date(a.getTime()).setHours(0,0,0,0);
    const date2 = new Date(b.getTime()).setHours(0,0,0,0);
    let result = 0;
    if (date1 === date2) result = 0;
    if (date1 < date2) result = -1;
    if (date1 > date2) result = 1;
    return result;
}

export default {
    getRandomNumberInRange,
    roundNumberToDecimalPlace,
    extractDate,
    calculateDaysFromDate,
    compareDates
};