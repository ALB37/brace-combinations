'use strict';

const validCombinations = require('../index.js');

describe('testing that validCombinations returns expected combinations', () => {
  test('testing that correct combinations are present', () => {
    expect(validCombinations(3).has('{{}{}}')).toEqual(true);
    expect(validCombinations(3).has('{{{}}}')).toEqual(true);
    expect(validCombinations(3).has('{}{{}}')).toEqual(true);
    expect(validCombinations(3).has('{{}}{}')).toEqual(true);
    expect(validCombinations(3).has('{}{}{}')).toEqual(true);
  });
  test('testing that incorrect combinations are not present', () => {
    expect(validCombinations(3).has('}}}{{{')).toEqual(false);
    expect(validCombinations(3).has('}{}{}{')).toEqual(false);
    expect(validCombinations(3).has('}{{}{{')).toEqual(false);
    expect(validCombinations(3).has('{}}{{}')).toEqual(false);
  });
});