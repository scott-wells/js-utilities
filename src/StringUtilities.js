function isNonEmptyString(string) {
    let flag = false;
    if (typeof string === "string" && string.length > 0)
        flag = true;
    return flag;
}
function formatNumberToCurrency(amount) {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const money = formatter.format(amount);
    return money;
}
function doStringsMatch(a, b) {
    let flag = false;
    if (a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0)
        flag = true;
    return flag;
}
// Extracts a list (array of strings) from a parent string with a colon(:) and period(.)
function extractArrayListFromString(string) {
    const start = string.indexOf(':');
    const end = string.indexOf('.', start + 1);
    const listStr = string.slice(start + 1, end);
    const listArrWSpaces = listStr.split(',');
    const list = listArrWSpaces.map(e => e.trim());
    return list;
}
function buildStringListFromArray(array) {
    let str = "";
    array.forEach((e, i) => {
        if (i === array.length - 1) {
            str += e;
        }
        else {
            str += e + ", ";
        }
    });
    return str;
}
function validateEmailAddress(email) {
    let flag = false;
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email))
        flag = true;
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
