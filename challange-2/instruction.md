# Group by Category

Complete the `groupByCategory` function. You're building a feature for an e-commerce site that needs to organize products by their category.

Given an array of items, each with a `name` and `category`, group all items by their category and return an object where:
- Keys are category names
- Values are arrays of item names in that category

## Rules

- Items should be grouped by their `category` property
- The result should be an object (Record) where keys are category strings and values are arrays of item names
- Items in the same category should appear in the same order as in the input array
- If a category has no items, it should not appear in the result
- Categories are case-sensitive

## Examples

```javascript
const items = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Pants", category: "Clothing" }
];

console.log(groupByCategory(items));
// {
//   "Electronics": ["Laptop", "Phone"],
//   "Clothing": ["Shirt", "Pants"]
// }
```

```javascript
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" }
];

console.log(groupByCategory(items));
// {
//   "Fruit": ["Apple", "Banana"],
//   "Vegetable": ["Carrot"]
// }
```

## Expected behavior

- Input is an array of objects, each with `name` and `category` properties
- Return an object where keys are category names and values are arrays of item names
- Tip: Use an object or Map to accumulate items by category

## Instructions

Write your code in `utils.ts` to implement the `groupByCategory` function.

To run the unit tests:

```bash
npx tsx main_test.ts
```

