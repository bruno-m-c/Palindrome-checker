const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');

function cleanInputString(str) {
    const regex = /[+-.:;"',?*/><\s]/i/g;
    return str.replace(regex, '');
  }

