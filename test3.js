(function () {
  const sum = (a, b, c) => a + b + c;

  const add = (x) => {
    // TODO: Implement this function by using `sum` function above
  };

  const sumResult = sum(1, 2, 3);
  const addResult = add(1)(2)(3);

  console.log(sumResult, addResult);
})();
