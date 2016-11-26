'use strict';

var lowercaseMaxCode = 'z'.charCodeAt();
var uppercaseMaxCode = 'Z'.charCodeAt();
var rotationAmount = 13;
var teachers = 'Teachers open the door, but you must enter by yourself.';

function encryptCharCode(charCode, maxCode) {
  var resultCode = charCode + rotationAmount;

  if (resultCode - maxCode > 0) {
    resultCode -= 2 * rotationAmount;
  }

  return resultCode;
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
  var index;

  for (index = 0; index < string.length; ++index) {
    result += encryptChar(string[index]);
  }

  return result;
}

/* eslint no-console: "off" */
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
console.log(encryptChar('*') === '*');

console.log(rot13(teachers));
console.log(rot13(rot13(teachers)));
