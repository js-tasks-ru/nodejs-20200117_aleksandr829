function sum(a, b) {
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    throw new TypeError('TypeError');
  }
  return a + b;
}

module.exports = sum;
