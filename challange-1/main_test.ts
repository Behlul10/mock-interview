import { describe, it, assert, withSubmit, runTests } from "./unit_test";
import { totalSteps } from "./utils";

type Entry = number | number[];

interface TestCase {
  input: Entry[];
  expected: number;
}

function formatInput(input: Entry[]): string {
  const parts = input.map((e) =>
    Array.isArray(e) ? `[${e.join(", ")}]` : `${e}`
  );
  return parts.join(", ");
}

describe("totalSteps", () => {
  const runCases: TestCase[] = [
    {
      input: [3000, [2000, 1500, 0], 5000],
      expected: 11500,
    },
    {
      input: [[1000, 2000], [3000], 4000],
      expected: 10000,
    },
    {
      input: [0, [0, 0], 0],
      expected: 0,
    },
  ];

  const submitCases: TestCase[] = [
    ...runCases,
    {
      input: [],
      expected: 0,
    },
    {
      input: [[-100, 200], -50, 0, [0, 0, 300]],
      expected: 500,
    },
    {
      input: [5000, [2500, -10, 2500], 0, [1000, 1000, -1000], 500],
      expected: 12500,
    },
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i + 1}: totalSteps([${formatInput(input)}])`, () => {
      const result = totalSteps(input);
      if (result !== expected) {
        console.log("Input:");
        console.log(`  [${formatInput(input)}]`);
        console.log("\nExpected:");
        console.log(`  ${expected}`);
        console.log("Actual:");
        console.log(`  ${result}`);
      }
      assert.strictEqual(result, expected);
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

