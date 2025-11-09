import { describe, it, assert, withSubmit, runTests } from "./unit_test";
import { groupByCategory } from "./utils";

interface Item {
  name: string;
  category: string;
}

function deepEqual(actual: any, expected: any): boolean {
  if (actual === expected) return true;
  if (typeof actual !== "object" || typeof expected !== "object") return false;
  if (actual === null || expected === null) return false;

  const actualKeys = Object.keys(actual).sort();
  const expectedKeys = Object.keys(expected).sort();

  if (actualKeys.length !== expectedKeys.length) return false;

  for (const key of actualKeys) {
    if (!expectedKeys.includes(key)) return false;
    if (!Array.isArray(actual[key]) || !Array.isArray(expected[key])) return false;
    if (actual[key].length !== expected[key].length) return false;
    for (let i = 0; i < actual[key].length; i++) {
      if (actual[key][i] !== expected[key][i]) return false;
    }
  }

  return true;
}

describe("groupByCategory", () => {
  const runCases: Array<{ input: Item[]; expected: Record<string, string[]> }> = [
    {
      input: [
        { name: "Laptop", category: "Electronics" },
        { name: "Shirt", category: "Clothing" },
        { name: "Phone", category: "Electronics" },
        { name: "Pants", category: "Clothing" },
      ],
      expected: {
        Electronics: ["Laptop", "Phone"],
        Clothing: ["Shirt", "Pants"],
      },
    },
    {
      input: [
        { name: "Apple", category: "Fruit" },
        { name: "Banana", category: "Fruit" },
        { name: "Carrot", category: "Vegetable" },
      ],
      expected: {
        Fruit: ["Apple", "Banana"],
        Vegetable: ["Carrot"],
      },
    },
    {
      input: [
        { name: "Book1", category: "Books" },
        { name: "Book2", category: "Books" },
        { name: "Book3", category: "Books" },
      ],
      expected: {
        Books: ["Book1", "Book2", "Book3"],
      },
    },
  ];

  const submitCases: Array<{ input: Item[]; expected: Record<string, string[]> }> = [
    ...runCases,
    {
      input: [],
      expected: {},
    },
    {
      input: [
        { name: "Item1", category: "A" },
        { name: "Item2", category: "B" },
        { name: "Item3", category: "A" },
        { name: "Item4", category: "C" },
        { name: "Item5", category: "B" },
      ],
      expected: {
        A: ["Item1", "Item3"],
        B: ["Item2", "Item5"],
        C: ["Item4"],
      },
    },
    {
      input: [
        { name: "Case1", category: "CaseSensitive" },
        { name: "Case2", category: "casesensitive" },
      ],
      expected: {
        CaseSensitive: ["Case1"],
        casesensitive: ["Case2"],
      },
    },
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i + 1}: groupByCategory(${input.length} items)`, () => {
      const result = groupByCategory(input);
      if (!deepEqual(result, expected)) {
        console.log("Input:");
        console.log(JSON.stringify(input, null, 2));
        console.log("\nExpected:");
        console.log(JSON.stringify(expected, null, 2));
        console.log("Actual:");
        console.log(JSON.stringify(result, null, 2));
      }
      assert.strictEqual(deepEqual(result, expected), true);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});

// Run all tests
const { failed } = runTests();
if (typeof process !== 'undefined') {
  process.exit(failed > 0 ? 1 : 0);
}

