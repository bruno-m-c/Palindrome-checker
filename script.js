const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');

function checkPalindrome() {
  const cleanPalindromeInput = palindromeInput.value.replace(/[!+-.:;"',?*/><\s]/gi, "").toLowerCase();
  let result = `<strong>${palindromeInput.value}</strong> ${cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("") ? `is` : `is not`} a palindrome `;
  output.style.display = "block";
  output.innerHTML = result;
}

check.addEventListener("click", checkPalindrome);
