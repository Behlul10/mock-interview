// Minimal test framework
export const withSubmit = process.env.SUBMIT === "true";

interface Test {
  name: string;
  fn: () => void;
}

let currentSuite: { name: string; tests: Test[] } | null = null;
const suites: Array<{ name: string; tests: Test[] }> = [];

export function describe(name: string, fn: () => void) {
  currentSuite = { name, tests: [] };
  fn();
  if (currentSuite) {
    suites.push(currentSuite);
    currentSuite = null;
  }
}

export function it(name: string, fn: () => void) {
  if (!currentSuite) {
    throw new Error("it() must be called within describe()");
  }
  currentSuite.tests.push({ name, fn });
}

export const assert = {
  strictEqual(actual: any, expected: any, message?: string) {
    if (actual !== expected) {
      const msg = message || `Expected ${expected}, but got ${actual}`;
      throw new Error(msg);
    }
  },
};

// Export function to run all tests
export function runTests() {
  let passed = 0;
  let failed = 0;

  for (const suite of suites) {
    console.log(`\n${suite.name}`);
    for (const test of suite.tests) {
      try {
        test.fn();
        console.log(`  ✓ ${test.name}`);
        passed++;
      } catch (error: any) {
        console.log(`  ✗ ${test.name}`);
        console.log(`    ${error.message}`);
        failed++;
      }
    }
  }

  console.log(`\n${passed} passed, ${failed} failed`);
  return { passed, failed };
}

