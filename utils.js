const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const percentage = (a, b) => {
  return (a / b) * 100;
};

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

const fibonacci = (length) => {
  var sequence = [0, 1];
  for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};

module.exports = {
  add,
  substract,
  multiply,
  divide,
  percentage,
  factorial,
  fibonacci,
};
