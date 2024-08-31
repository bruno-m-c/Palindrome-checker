const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');
const bubble1 = document.getElementById('bubble');
const cont5 = document.getElementsByClassName("CONT5")[0];

function checkPalindrome() {
  if (palindromeInput.value === '') {
    alert('Please input a value');
    return;
  }
  const cleanPalindromeInput = palindromeInput.value.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let result = `<strong>${palindromeInput.value}</strong> ${cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("") ? `is` : `is not`} a palindrome `;
  output.style.display = "block";
  output.innerHTML = result;
  palindromeInput.value = '';
  bubble1.classList.remove('hide');
  cont5.classList.add('move');
}

check.addEventListener("click", checkPalindrome);
palindromeInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    checkPalindrome();
  }
});