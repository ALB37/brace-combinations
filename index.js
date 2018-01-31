// Problem Statement
// Implement an algorithm to print all valid(i.e.properly opened and closed) combinations of n pairs of braces.

// Example:
// Input: 3

// Output:
// {{{}}}
// {{}{}}
// {{}}{}
// {}{{}}
// {}{}{}


const validCombinations = num => {
  let open = [];
  let closed = [];
  for (let i = 0; i < num; i++) {
    open.push('{');
  }
  for (let i = 0; i < num; i++) {
    closed.push('}');
  }
  const combinations = new Set();
  const _close = (iter, open, closed, str) => {
    let newStr;
    while (closed.length > open.length){
      newStr = str + closed.pop();
      _open(open, closed, newStr);
      _close(open, closed, newStr);
    }
  };
  const _open = (iter, open, closed, str) => {
    let newStr;
    while (open.length){
      console.log(open);
      newStr = str + open.pop();
      _open(open, closed, newStr);
      _close(open, closed, newStr);
    }
    if (closed.length){
      newStr = str + closed.join('');
    }
    if (newStr)
      combinations.add(newStr);
  };
  _open(open, closed, '');
  return combinations;
};




console.log(validCombinations(3));