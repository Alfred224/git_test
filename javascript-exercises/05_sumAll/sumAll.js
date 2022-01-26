const sumAll = function(a, b) {
    const minv = Math.min(a, b);
    const maxv = Math.max(a, b);
    let answer = 0;
    if (Math.sign(minv) == 1 && Math.sign(maxv) == 1 && Number.isInteger(a) && Number.isInteger(b)) {
        for (let i = minv; i <= maxv; i++) answer += i;
    } else answer = "ERROR";
    return answer;
}
console.log(sumAll(1, "90"));

// Do not edit below this line
module.exports = sumAll;
