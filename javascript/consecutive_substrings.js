function consecutiveSubstrings(string) {
  let results = [];
  for (let i = 0; i < string.length; i++) {
    const substrings = []
    for (let j = 1; j < string.length+1; j++) {
      if (string.slice(i, j).length > 0) {
        substrings.push(string.slice(i, j))
      }
    }
    results = results.concat(substrings)
  }
  return results;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
