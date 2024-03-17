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

/**
 * Takes two dates and calculates difference in milliseconds.
 * @param {Date} a - Older date 
 * @param {Date} b - Newer date
 * @returns {number} Returns result in milliseconds.
 */
function calculateDifferenceOfDates(a: Date, b: Date): number {
    const num1 = Number(a);
    const num2 = Number(b);
    return num1 - num2;
}

function convertMillisecsToDays(milliseconds: number): number {
    const millisecondsPerDay = 1000*60*60*24;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerDay);
}

function convertMillisecsToHours(milliseconds: number): number {
    const millisecondsPerHour = 1000*60*60;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerHour);
}

function convertMillisecsToMinutes(milliseconds: number): number {
    const millisecondsPerMinute = 1000*60;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerMinute);
}

function convertMillisecsToSeconds(milliseconds: number): number {
    const millisecondsPerSecond = 1000;
    // @ts-ignore
    return Math.trunc(milliseconds / millisecondsPerSecond);
}

class SetPerformanceTimer {
    startTicker = 0;
    start() {
        const ticker = window.performance.now();
        console.log("--> Start Performance Timer");
        this.startTicker = ticker;
        return;
    }
    end() {
        const ticker = window.performance.now();
        const diff = ticker - this.startTicker;
        console.log("--> End Performance Timer");
        console.log("Time Elapsed: ", diff + "ms");
        return;
    }
}

// export {
//     getRandomNumberInRange,
//     roundNumberToDecimalPlace,
//     extractDate,
//     calculateDaysFromDate,
//     compareDates,
//     SetPerformanceTimer
// };