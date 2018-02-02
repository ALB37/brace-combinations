# brace-combinations

## Problem Statement
Implement an algorithm to print all valid (i.e.properly opened and closed) combinations of n pairs of braces.

## Getting Started
 To install this, familiarity with git and node is assumed. Fork/clone down to your machine. In the folder, run `npm i`. After importing the module, it will accept any number as input (however, depending on your machine's memory, stack overflow will likely occur around input of 15 or higher). This implementation uses a recursive approach. To test: `npm run test`.

### Example:
```javascript
validCombinations = require('./index.js');
validCombinations(3);

//returns:
//Set { {{{}}}, {{}{}}, {{}}{}, {}{{}}, {}{}{} }
```

### Credits

By Andrew Bloom. Testing with Jest.