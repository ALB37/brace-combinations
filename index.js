const validCombinations = num => {

  let combinations = new Set();

  const _helper = (index, openNum, closedNum, string) => {
    if (index < 2 * num){
      if (openNum > 0){
        _helper(index + 1, openNum - 1, closedNum, string + '{');
      }
      if (openNum < closedNum && closedNum > 0){
        _helper(index + 1, openNum, closedNum - 1, string + '}');
      }
    } else {
      combinations.add(string);
    }

  };
  _helper(0, num, num, '');
  return combinations;
};

module.exports = validCombinations;