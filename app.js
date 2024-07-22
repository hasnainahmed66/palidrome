function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const result = document.getElementById('result');

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if the string is equal to its reverse
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');

    if (isPalindrome) {
        result.textContent = `"${inputString}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${inputString}" is not a palindrome.`;
        result.style.color = 'red';
    }
}