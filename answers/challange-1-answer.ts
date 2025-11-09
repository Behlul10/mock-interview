// Solution for Challenge 1: Total Steps Aggregator

export function totalSteps(entries: (number | number[])[]): number {
  let total = 0;
  for(const entry of entries){
    if (Array.isArray(entry))
    {
      for(const n of entry){
        if (n >= 0) total += n;
      }
    } else if (entry >= 0){
      total += entry;
    }
  }
  return total;
}

