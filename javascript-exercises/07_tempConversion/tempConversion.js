const ftoc = function(x) {
  let ans = (x - 32) * 5/9;
  ans = ans.toFixed(1);
  ans /= 2;
  return ans * 2;
};

const ctof = function(x) {
  let ans = x * 9/5 + 32;
  ans = ans.toFixed(1);
  ans /= 2;
  return ans * 2;
};

console.log(ctof(0))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
