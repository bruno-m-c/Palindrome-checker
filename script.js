const check = document.getElementById('checkButton');
const palindromeInput = document.getElementById('inputBar');
const output = document.getElementById('result');
const bubble1 = document.getElementById('bubble');
const cont5 = document.getElementsByClassName("CONT5")[0];

function checkPalindrome() {
  cont5.classList.remove('move');
  bubble1.classList.add('hide');

  if (palindromeInput.value === '') {
    alert('Please input a value');
    return;
  }
  const cleanPalindromeInput = palindromeInput.value.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const isPalindrome = cleanPalindromeInput === [...cleanPalindromeInput].reverse().join("");
  let result;
  if(isPalindrome){
    result = `<strong>${palindromeInput.value}</strong> is a palindrome `;
    cont5.classList.remove('move');
    void cont5.offsetWidth;
    cont5.classList.add('move');
  } else {
    result = `<strong>${palindromeInput.value}</strong> is not a palindrome `;
    bubble1.classList.remove('hide');
  }
  output.style.display = "block";
  output.innerHTML = result;
  palindromeInput.value = '';
}

check.addEventListener("click", checkPalindrome);
palindromeInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    checkPalindrome();
  }
});