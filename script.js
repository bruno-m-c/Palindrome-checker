const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');

function cleanInputString(str) {
    const regex = /[+-.:;"',?*/><\s]/gi;
    return str.replace(regex, '').toLowerCase();
  }

function checkPalindrome() {
  const inputContainer = palindromeInput.value;
  const reverseInputContainer = inputContainer.reverse();
  if(inputContainer === reverseInputContainer) {
    output.innerText = `${palindromeInput.value} is a palindrome`
  } else {
    output.innerText = `${palindromeInput.value} is not a palindrome`
  }
}

check.addEventListener("click",checkPalindrome);
