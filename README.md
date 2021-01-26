# probability-table

An easy way to handle probability lookup tables

```js
import Table = from 'probability-table';

let	inst = new Table(),
	outcome;

// Percentage and the value to return 
inst.add(50,'heads');
inst.add(50,'tails');


//Accepts a number from 0 - 1 exclusive
// "tails" || "heads"
outcome = inst.get(Math.random());

inst.clear();
//The total probability need not add up to 100%
inst.add(50,'heads');

// null || "heads"
outcome = inst.get(Math.random());

//Probability tables can use double as their probabilities
inst.add(99.9999,'house_wins');
inst.add(0.0001,'you_win');

```
