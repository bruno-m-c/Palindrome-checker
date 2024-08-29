const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');
const bubble1 = document.getElementById('bubble')

function checkPalindrome() {
  if (palindromeInput.value === '') {
    alert('Please input a value');
    return;
  }
  const cleanPalindromeInput = palindromeInput.value.replace(/[!+-_.:();"',?*/><\s]/gi, "").toLowerCase();
  let result = `<strong>${palindromeInput.value}</strong> ${cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("") ? `is` : `is not`} a palindrome `;
  output.style.display = "block";
  output.innerHTML = result;
  palindromeInput.value = '';
  cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("") ? `is` : bubble1.classList.remove('hide')
}

check.addEventListener("click", checkPalindrome);
palindromeInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    checkPalindrome();
  }
});