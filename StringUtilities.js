var str = "This is a test string";
var str2 = "";
var str3 = "This is a test string";
var strList = "This is a list of items: burger, fries, soda, milkshake, hotdog.";
var strArr = extractArrayListFromString(strList);
var number = 199.9999;
var email1 = "abeLincoln@gmail.com";
var email2 = "abeLincoln@gmail .com";
function isNonEmptyString(string) {
    var flag = false;
    if (typeof string === "string" && string.length > 0)
        flag = true;
    return flag;
}
function formatNumberToCurrency(amount) {
    var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    var money = formatter.format(amount);
    return money;
}
function doStringsMatch(a, b) {
    var flag = false;
    if (a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0)
        flag = true;
    return flag;
}
// Extracts a list (array of strings) from a parent string with a colon(:) and period(.)
function extractArrayListFromString(string) {
    var start = string.indexOf(':');
    var end = string.indexOf('.', start + 1);
    var listStr = string.slice(start + 1, end);
    var listArrWSpaces = listStr.split(',');
    var list = listArrWSpaces.map(function (e) { return e.trim(); });
    return list;
}
function buildStringListFromArray(array) {
    var str = "";
    array.forEach(function (e, i) {
        if (i == array.length - 1) {
            str += e;
        }
        else {
            str += e + ", ";
        }
    });
    return str;
}
function validateEmailAddress(email) {
    var flag = false;
    var emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email))
        flag = true;
    return flag;
}
console.log(validateEmailAddress(email1), validateEmailAddress(email2));
