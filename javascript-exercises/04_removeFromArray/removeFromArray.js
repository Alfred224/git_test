const removeFromArray = function() {
    let arg = [];
    for (a of arguments) arg.push(a);
    const arr = arg[0];
    const rem = arg.slice(1);
    const result = arr.filter(item => !(rem.includes(item)));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
