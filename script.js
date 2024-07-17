const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');

function checkPalindrome() {
  const cleanPalindromeInput = palindromeInput.replace(/[+-.:;"',?*/><\s]/gi, "").toLowerCase();
  let result = `<strong>${palindromeInput}<strong/> ${cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("") ? `is` : `is not`} a palindrome `;
  output.style.display = "block";
  output.innerText = result;
}

check.addEventListener("click", checkPalindrome);
