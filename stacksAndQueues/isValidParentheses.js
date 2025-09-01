var isValid = function (s) {
  let stack = [];
  for (let ch of s) {
    if (
      (ch === ")" && stack[stack.length - 1] === "(") ||
      (ch === "}" && stack[stack.length - 1] === "{") ||
      (ch === "]" && stack[stack.length - 1] === "[")
    )
      stack.pop();
    else {
      stack.push(ch);
    }
  }
  return stack.length === 0 ? true : false;
};
// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("]")); // false

//Time complexity is O(n) and space complexity is O(n)
// Can use map for better readability

// Alternate approach using map
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let ch of s) {
    if (map[ch]) {
      stack.push(ch);
    } else {
      let top = stack.pop();
      if (ch !== map[top]) return false;
    }
  }
  return stack.length === 0 ? true : false;
};
// Example usage:
console.log(isValid("()[]{}")); // true