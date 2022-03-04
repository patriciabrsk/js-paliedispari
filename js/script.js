/**
 * Palidroma:
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
 */

/**
 * Function that determines whether a word is a palindrome.
 * @param {*} string - The word 
 * @returns true or false if the word is a palindrome
 */
function isPalindrome(string) {
    // Storing all unwanted non-alphanumeric characters into a variable called regex
    let regex = /[\W_]/g;

    // Using the replace() method, which takes the regex pattern and replaces it with an empty string.
    // Removing all unwanted non-alphanumeric characters
    let str = string.replace(regex, '');

    // Reversing a string: converting it to an array of characters with a split() method, 
    // then reverse the characters with reverse() in the array, 
    // and then join() to join them all back together into a string
    let reversedString = str.split('').reverse().join('');
    // console.log(reversedString);
    
    if (reversedString === str) {
        // console.log('It is a palindrome');
        return true;
    }
    // console.log('It is not a palindrome');
    return false;
}
// isPalindrome('gaga');

checkBtn = document.getElementById('check');

// Click event for check button
checkBtn.addEventListener('click',
    function() {
        // Get text input from user
        const word = document.querySelector('.text').value;
        const message = document.getElementById('message');

        // When the word inserted by the user is a palindrome 
        if (isPalindrome(word)) {

            // it prints a "It is a palindrome." string to the HTML output
            message.innerHTML = "It is a palindrome."
            message.classList.add('text-success');
            message.classList.remove('text-warning');
        
        // If the word is not a palindrome
        } else {

         // it prints a "It is not a palindrome." string to the HTML output
        message.innerHTML = "It is not a palindrome."
        message.classList.add('text-warning');
        message.classList.remove('text-success');

        }
    }
);

/**
 * Pari e Dispari
 * 
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto. 
 * 
 **/

/**
 * Function that checks if a number is even or odd.
 * @param {*} number - the number to check
 * @returns 'even' if number is even and 'odd' if it is odd
 */
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return 'even';
    } 
    return 'odd';
}

// Select play button element from DOM
checkBtn2 = document.getElementById('play');

// Click event for play button
checkBtn2.addEventListener('click', () => {
        const toggleValue = document.querySelector('[name="options-outlined"]:checked').value;
        console.log(toggleValue);
        const inputNumber = document.querySelector('.number').valueAsNumber;
        const compNum = Math.floor(Math.random() * 5) + 1;
        const result = document.getElementById('result');
        let sum = inputNumber + compNum;

        // When sum is even
        if (isEvenOrOdd(sum) === toggleValue) {
            // it prints "You win." string to the HTML output
            console.log(toggleValue);
            console.log(sum);
            result.innerHTML = "You win!"
            result.classList.add('text-success');
            result.classList.remove('text-warning');

        // If the sum is odd it prints:
        } else {

            // it prints a "It is not a palindrome." string to the HTML output
            result.innerHTML = "You lose."
            result.classList.add('text-warning');
            result.classList.remove('text-success');
            // console.log(isEvenOrOdd(sum));
            // console.log(isEvenOrOdd(toggleValue));
        }
    }
);