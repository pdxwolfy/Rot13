"use strict";

// rot13(string):
//   for each character
//     rotate the character
//     concatenate the character to the result
//   return result
//
// rotate the character(character)
//   if character is lowercase alpha
//     rotate the ASCII character code value with 'z' as max result
//   else if character is uppercase alpha
//     rotate the ASCII character code value with 'Z' as max result
//   return character value of character code
//
// encrypt the ASCII character code value with maxLetter as max result
//   add rotation amount (13) to character code
//   if character code exceeds max result character code
//     reduce character code by 2 rotation amounts (26) to wraparound
//   return result character code

var lowercaseMaxCode = 'z'.charCodeAt();
var uppercaseMaxCode = 'Z'.charCodeAt();
var rotationAmount = 13;

function encryptCharCode(charCode, maxCode) {
  charCode += rotationAmount;
  if (charCode - maxCode > 0) {
    charCode -= 2 * rotationAmount;
  }

  return charCode;
}

function isLower(character) {
  return character >= 'a' && character <= 'z';
}

function isUpper(character) {
  return character >= 'A' && character <= 'Z';
}

function encryptChar(character) {
  var charCode = character.charCodeAt();
  if (isLower(character)) {
    charCode = encryptCharCode(charCode, lowercaseMaxCode);
  } else if (isUpper(character)) {
    charCode = encryptCharCode(charCode, uppercaseMaxCode);
  }

  return String.fromCharCode(charCode);
}

function rot13(string) {
  var result = '';
  for (var index = 0; index < string.length; ++index) {
    result += encryptChar(string[index]);
  }

  return result;
}

console.log(encryptChar('a') === 'n');
console.log(encryptChar('c') === 'p');
console.log(encryptChar('m') === 'z');
console.log(encryptChar('n') === 'a');
console.log(encryptChar('p') === 'c');
console.log(encryptChar('z') === 'm');

console.log(encryptChar('A') === 'N');
console.log(encryptChar('C') === 'P');
console.log(encryptChar('M') === 'Z');
console.log(encryptChar('N') === 'A');
console.log(encryptChar('P') === 'C');
console.log(encryptChar('Z') === 'M');

console.log(encryptChar('1') === '1');
console.log(encryptChar('*') === '\*');

var teachers = 'Teachers open the door, but you must enter by yourself.';
console.log(rot13(teachers));
console.log(rot13(rot13(teachers)));
