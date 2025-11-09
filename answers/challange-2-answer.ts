// Solution for Challenge 2: Group by Category

export function groupByCategory(items: Array<{ name: string; category: string }>): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  
  for (const item of items) {
    if (!result[item.category]) {
      result[item.category] = [];
    }
    result[item.category].push(item.name);
  }
  
  return result;
}

