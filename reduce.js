// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => sum += number, 0);
};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => product *= number, 1);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce((sum, number) => sum += number, 0) / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((min, current) => {
    return current < min ? current : min;
  }, numbers[0]);
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((max, current) => {
    return current > max ? current : max;
  }, numbers[0]);
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.reduce((sum, current) => {
    return current > 0 ? sum + current : sum;
  }, 0);
};

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce((sum, current) => sum + Math.pow(current, 2), 0);
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.reduce((sum, current) => {
    return current & 1 ? sum + current : sum;
  }, 0);
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((count, current) => {
    return current < 0 ? count + 1 : count;
  }, 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce((sum, current) => {
    return (current & 1) === 0 ? sum + Math.pow(current, 2) : sum;
  }, 0);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((accumulator, current) => accumulator + current, "");
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  }, words[0] || "");
};

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((accumulator, current) => accumulator ?
    accumulator + "," + current : current, "");
};

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((accumulator, current) =>
    current + " " + accumulator, "");
};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((accumulator, current) => {
    if (accumulator) {
      return accumulator + " " + current;
    }

    return current;
  }, "");
};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((accumulator, current) => accumulator + current, "");
};

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {
  return words.reduce((accumulator, current) => {
    const vowels = [...current].filter(letter =>
      "aeiouAEIOU".includes(letter)).join("");
    return accumulator + vowels;
  }, "");
};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce((camelCase, current) => camelCase + current.at(0).toUpperCase() + current.slice(1));
};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {
  return words.reduce((accumulator, current) => accumulator + [...current].reverse().join(""), "");
};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce((accumulator, current) => {
    accumulator.push(current, current);
    return accumulator;
  }, []);
};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce((accumulator, current) => accumulator.concat(current), []);
};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce((accumulator, current) => accumulator.concat(current), []);
};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {
  return strings.reduce((accumulator, string) => {
    const length = string.length;
    if (!accumulator[length]) {
      accumulator[length] = [];
    }

    accumulator[length].push(string);
    return accumulator;
  }, {});
};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {
  return strings.reduce((counts, string) => {
    counts[string] = (counts[string] || 0) + 1;
    return counts;
  }, {});
};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {
  return objects.reduce((merged, obj) => {
    const keys = Object.keys(obj);
    keys.map((key) => merged[key] = (merged[key] || 0) + obj[key]);
    return merged;
  }, {});
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {
  return keys.reduce((accumulator, key, index) => {
    return Object.assign(accumulator, { [key]: values[index] });
  }, {});
};


// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return keys.reduce((object, key, index) => {
    object[key] = values[index];
    return object;
  }, {});
};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (object) {
  return Object.keys(object).reduce((inverted, key) => {
    inverted[object[key]] = key;
    return inverted;
  }, {});
};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { };

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

// flattenToObject([["a", 1], ["b", 2], ["c", 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { };

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { };

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { };

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, "a", 2, "b", 3, "c", 4]) => { number: [1, 2, 3, 4], string: ["a", "b", "c"] }
const groupByType = function (array) { };

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { "a.b.c": 1, "d.e": 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {
  const counts = numbers.reduce((accumulator, number) => {
    accumulator[number] = (accumulator[number] || 0) + 1;
    return accumulator;
  }, {});

  return numbers.find(num => counts[num] === 1);
};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {
  return words.reduce((vowelCounts, word) => {
    [...word].reduce((accumulator, char) => {
      if ('aeiou'.includes(char.toLowerCase())) {
        accumulator[char.toLowerCase()]++;
      }

      return accumulator;
    }, vowelCounts);
    return vowelCounts;
  }, { a: 0, e: 0, i: 0, o: 0, u: 0 });
};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {
  const flatNumbers = nestedNumbers.flat(Infinity);

  const sum = flatNumbers.reduce((acc, num) => acc + num, 0);
  return sum / flatNumbers.length;
};

// cartesianProduct([1, 2], ["a", "b"]) => [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
const cartesianProduct = function (arr1, arr2) { };

// groupByDate([{ date: "2024-01-01", value: 10 }, { date: "2024-01-01", value: 20 }, { date: "2024-01-02", value: 30 }]) => { "2024-01-01": [10, 20], "2024-01-02": [30] }
const groupByDate = function (records) { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { };

// sumByCategory([{ category: "A", value: 10 }, { category: "B", value: 20 }, { category: "A", value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { };
