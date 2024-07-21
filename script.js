const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');


function checkPalindrome() {
  if (palindromeInput.value === '') {
    alert('Please input a value');
    return;
  }
  const cleanPalindromeInput = palindromeInput.value.replace(/[!+-.:;"',?*/><\s]/gi, "").toLowerCase();
  let result = `<strong>${palindromeInput.value}</strong> ${cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("") ? `is` : `is not`} a palindrome `;
  output.style.display = "block";
  output.innerHTML = result;
  palindromeInput.value = ''
}

check.addEventListener("click", checkPalindrome);
palindromeInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    checkPalindrome();
  }
});