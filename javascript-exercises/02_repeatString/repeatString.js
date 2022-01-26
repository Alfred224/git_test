const repeatString = function(string="", multiples=0) {
    let answer = "";
    let i = 0;
    while (i < multiples) {
        answer += string;
        i++;
    }
    if (Math.sign(multiples) == -1) return "ERROR";
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
