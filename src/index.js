const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let messageConverted = [];
    let getSubArraysFromArray = (arr, size) => {
        let subArray = [];
        for (let i = 0; i < expr.length; i += size) {
            subArray.push(arr.slice(i, i + size));
        }
        return subArray;
    }
    expr.split("**********").map((word) => {
        let lettersArray = getSubArraysFromArray(word.split(''), 10);
        let decodedWord = lettersArray.map((letter) => {
            let morseKey = letter.join('').replace(/10/g, '.').replace(/11/g, '-').replace(/0+/, '');
            return MORSE_TABLE[morseKey];
        })
        messageConverted.push(decodedWord.join(''));
    });

    console.log(messageConverted.join(" "));
    return messageConverted.join(" ");
}

module.exports = {
    decode
}