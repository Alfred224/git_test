const leapYears = function(x) {
    if (x % 4 == 0) {
        if (x % 100 == 0) {
            return x % 400 == 0;
        } else return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
