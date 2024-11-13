
const palindromes = function (str) {
  let punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s+/g,"").toLowerCase();
  let reversedString = finalString.split("").reverse().join("");

  console.log(finalString);
  console.log(reversedString);
  return finalString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
