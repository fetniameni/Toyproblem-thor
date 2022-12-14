/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



 var commonCharacters = function(string1, string2) {
  let result = "";

  if (string1 === string2) {
    result = string1;
  } else if (string1.length === 0 || string2.length === 0) {
    result = "";
  } else {

    for (let i = 0; i < string1.length; i++) {
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] === string2[j] && !result.includes(string2[j])) {
          result=result+string2[j];
        }
      }
    }
  }
  return result;
};
    