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

// Chiedere all’utente di inserire una parola
const word = document.querySelector('.text');

function isPalindrome(string) {
    // Storing all unwanted non-alphanumeric characters into a variable called regex
    let regex = /[\W_]/g;

    // Using the replace() method, which takes our regex pattern and replace it with an empty string.
    // Removing all unwanted non-alphanumeric characters
    let str = string.replace(regex, '');

    let reversedString = str.split('').reverse().join('');
    // console.log(reversedString);
    
    if (reversedString === str) return true;
    return false;
}
isPalindrome("gag9");

// Pari e Dispari