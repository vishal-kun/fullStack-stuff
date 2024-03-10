/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

const a =  str1.toUpperCase().split("");
const b =  str2.toUpperCase().split("");

  if (a.length !== b.length) {
    return false;
  } else {

    a.sort();
    b.sort();

    
    return a.join("") === b.join("");;
  }

}


module.exports = isAnagram;
