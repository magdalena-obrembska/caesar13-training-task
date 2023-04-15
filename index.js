const ASCII_START = 65;
const ASCII_END = 122;
const KEY = 13;
const ALPHABET_LENGTH = 26;

function getAlphabet() {
    let alphabet = '';
    for (let i = ASCII_START; i <= ASCII_END; i++)
        alphabet += String.fromCharCode(i) + ""
    return alphabet.split('');
}

function caesar13(message) {
    if (typeof message !== 'string' || message.length == 0) 
        throw new Error('Message is not a string!');

    const alphabet = getAlphabet();
    let result = '';
    for (let i = 0; i < message.length; i++) {
        result += String.fromCharCode(((alphabet.indexOf(message[i]) + KEY) % ALPHABET_LENGTH) + ASCII_START);
    }
    return result;
}
export {caesar13};
