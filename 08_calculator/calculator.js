const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  if(!nums.length) return 0;
	return nums.reduce((sum, num) => sum + num);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if(a === 0) return 1;

  let result = 1;
  for(let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
