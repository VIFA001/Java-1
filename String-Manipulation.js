//reversestring
function reverseStrings(value_to_reverse) {
  let result = value_to_reverse.split("").reverse().join("");
  return result;
}
console.log(reverseStrings("Victory"));
console.log(reverseStrings("HAPPY"));

//counting characters in a string

function countCharacters(value_to_count) {
  let result = value_to_count.length;
  return result;
}
console.log(countCharacters("Adaeze"));

//CAPITALIZE WORDS
function capitalizeWords(sentence) {
  let result = sentence
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
  return result;
}

console.log(capitalizeWords("victory is a woman"));
