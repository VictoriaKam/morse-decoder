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
    let arr = expr.split('');
    let size = 10;

    let subarr = [];

    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        subarr[i] = arr.slice((i * size), (i * size) + size);
        if (!subarr[i].includes('*')) {
            for (let m = 0; m < subarr[i].length; m++) {
                if (m % 2 == 0) {
                    subarr[i][m] = subarr[i][m] + subarr[i][m + 1];
                    subarr[i][m + 1] = '';
                    if (subarr[i][m] == '10') {
                        subarr[i][m] = '.';
                    } else if (subarr[i][m] == '11') {
                        subarr[i][m] = '-';
                    } else if (subarr[i][m] == '00') {
                        subarr[i][m] = '';
                    }
                }
            }
        }
        subarr[i] = subarr[i].join('');
        if (subarr[i] == "**********") {
            subarr[i] = ' ';
        }
        for (key in MORSE_TABLE) {
            if (subarr[i] == key) {
                subarr[i] = MORSE_TABLE[key];
            }
        }
    }

    return subarr.join('');
}


module.exports = {
    decode
}
