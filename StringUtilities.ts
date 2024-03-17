function isNonEmptyString(string: string): boolean {
    let flag: boolean = false;
    if (typeof string === "string" && string.length > 0) flag = true;
    return flag;
}

function formatNumberToCurrency(amount: number): string {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
    const money = formatter.format(amount);
    return money;
}

function doStringsMatch(a: string, b: string): boolean {
    let flag: boolean = false;
    if (a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0) flag = true;
    return flag;
}

// Extracts a list (array of strings) from a parent string with a colon(:) and period(.)
function extractArrayListFromString(string: string): Array<string> {
    const start: number = string.indexOf(':');
    const end: number = string.indexOf('.', start + 1);
    const listStr: string = string.slice(start + 1, end);
    const listArrWSpaces: Array<string> = listStr.split(',');
    const list: Array<string> = listArrWSpaces.map(e => e.trim());
    return list;
}

function buildStringListFromArray(array: Array<string>): string {
    let str: string = "";
    array.forEach((e, i) => {
        if (i === array.length - 1) {
            str += e;
        } else {
            str += e + ", ";
        }
    });
    return str;
}

function validateEmailAddress(email: string): boolean {
    let flag: boolean = false;
    const emailRegex: RegExp = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) flag = true;
    return flag;
}

export default {
    buildStringListFromArray,
    doStringsMatch,
    extractArrayListFromString,
    formatNumberToCurrency,
    isNonEmptyString,
    validateEmailAddress
};