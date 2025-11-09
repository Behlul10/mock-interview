# Total Steps Aggregator

Complete the `totalSteps` function. You work on a fitness tracker that records daily step entries. Each entry can be:

- a number (total steps for a day), or
- an array of numbers (steps from multiple sessions that day)

Return the total steps across all entries.

## Rules

- Treat each number as steps to add to the total.
- For arrays, add up all numbers inside.
- Ignore negative values (they are bad data). Zeros are allowed and simply add 0.
- An empty array contributes 0.

## Examples

```javascript
const week = [3000, [2000, 1500, 0], 5000];
console.log(totalSteps(week));
// 3000 + (2000 + 1500 + 0) + 5000 = 11500
```

```javascript
const messy = [[-100, 200], -50, 0, [0, 0, 300]];
console.log(totalSteps(messy));
// (-100 ignored) + 200 + (-50 ignored) + 0 + (0 + 0 + 300) = 500
```

## Expected behavior

- Input is an array of numbers and/or arrays of numbers
- Return a single number: the sum of all non-negative step counts
- Tip: Use `Array.isArray()` to check if an entry is an array.

## Instructions

Write your code in `utils.ts` to implement the `totalSteps` function.

To run the unit tests:

```bash
npx tsx main_test.ts
```


