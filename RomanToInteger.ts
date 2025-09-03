function romanToInt(s: string): number {
  const romanValues = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  const reversedString: string[] = s.split("").reverse();
  let total: number = 0;
  let previousValue: number = 0;

  reversedString.forEach((numeral, index) => {
    //get current value
    const englishNumber: number = romanValues.get(numeral) || 0;

    if (previousValue > englishNumber) {
      //if the previous value is greater than the current value,
      //we know we this is the syntax where a value is one unit less than the next value
      //e.g IV = 4
      //so we subtract the current value from the total instead of adding it
      total -= englishNumber;
    } else {
      total += englishNumber;
    }
    previousValue = englishNumber;
  });

  return total;
}

//test cases
console.log("expected output: 3", romanToInt("III")); // Output: 3
console.log("expected output: 4", romanToInt("IV")); // Output: 4
console.log("expected output: 9", romanToInt("IX")); // Output: 9
console.log("expected output: 58", romanToInt("LVIII")); // Output: 58
console.log("expected output: 1994", romanToInt("MCMXCIV")); // Output: 1994
