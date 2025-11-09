# Mock Interview Challenges

A collection of coding challenges designed for mock technical interviews. Each challenge includes clear instructions, test cases, and a minimal test framework.

## 📁 Project Structure

```
mock-interview/
├── challange-1/          # Challenge 1: Total Steps Aggregator
│   ├── instruction.md   # Problem description and requirements
│   ├── utils.ts         # Function to implement (stub provided)
│   ├── main_test.ts     # Unit tests
│   └── unit_test.ts     # Minimal test framework
├── challange-2/          # Challenge 2: Group by Category
│   ├── instruction.md   # Problem description and requirements
│   ├── utils.ts         # Function to implement (stub provided)
│   ├── main_test.ts     # Unit tests
│   └── unit_test.ts     # Minimal test framework
└── answers/              # Reference solutions (for interviewers)
    ├── challange-1-answer.ts
    └── challange-2-answer.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Running Tests

Navigate to the challenge directory and run:

```bash
npx tsx main_test.ts
```

Or if you have `ts-node` installed globally:

```bash
ts-node main_test.ts
```

## 📋 Challenges

### Challenge 1: Total Steps Aggregator
**Difficulty:** Easy  
**Estimated Time:** 10-15 minutes

Complete the `totalSteps` function that aggregates step counts from a fitness tracker. The function should handle both individual numbers and arrays of numbers, while ignoring negative values.

**Location:** `challange-1/`

### Challenge 2: Group by Category
**Difficulty:** Medium  
**Estimated Time:** 20-25 minutes

Implement the `groupByCategory` function that organizes items by their category. This challenge focuses on object manipulation and array grouping.

**Location:** `challange-2/`

### Test Framework

The included `unit_test.ts` provides a minimal testing framework with:
- `describe()` - Group related tests
- `it()` - Define individual test cases
- `assert.strictEqual()` - Make assertions
- `withSubmit` - Flag to run additional submit test cases

### Reference Solutions

Solutions are available in the `answers/` directory for reference. These should **not** be shared with candidates during the interview.

## 🧪 Running All Tests

To run tests for a specific challenge:

```bash
# Challenge 1
cd challange-1
npx tsx main_test.ts

# Challenge 2
cd challange-2
npx tsx main_test.ts
```

To run with all submit test cases:

```bash
# PowerShell
$env:SUBMIT="true"; npx tsx main_test.ts

# Bash/Linux/Mac
SUBMIT=true npx tsx main_test.ts
```

## 📝 Notes

- Each challenge is self-contained with its own test framework
- Tests are designed to fail initially (stub implementations)
- Clear error messages help guide candidates
- Solutions are intentionally excluded from challenge directories
