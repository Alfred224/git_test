const reverseString = function(str) {
    let rev = "";
    for (a of str) {
        rev = a + rev;
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
