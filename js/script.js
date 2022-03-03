/**
 * Palidroma:
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
    
    Pari e Dispari
        L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
        Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        Sommiamo i due numeri
        Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        Dichiariamo chi ha vinto.
    
    Consigli del giorno
        Scriviamo sempre in italiano i passaggi che vogliamo fare
        Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
 */

const result = document.getElementById('result');

function isPalindrome(string) {
    // Storing all unwanted non-alphanumeric characters into a variable called regex
    let regex = /[\W_]/g;

    // Using the replace() method, which takes our regex pattern and replace it with an empty string.
    // Removing all unwanted non-alphanumeric characters
    let str = string.replace(regex, '');

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

        const word = document.querySelector('.text').value;
        const result = document.getElementById('result');

        if (isPalindrome(word)) {
            result.innerHTML = "It is a palindrome."
            result.classList.add('text-success');

        } else {
        result.innerHTML = "It is not a palindrome."
        result.classList.add('text-warning');
        }
    }
);

// Pari e Dispari