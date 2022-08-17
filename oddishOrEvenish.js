const oddishOrEvenish = (numbers) => {
  sum = numbers
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    });
  const isSumWhat = sum % 2 === 0;
  return isSumWhat ? "even" : "odd";
};
console.log(oddishOrEvenish(246));
