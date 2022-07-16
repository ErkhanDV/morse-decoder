const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let result = '';
  let decodeArr = [];
  let dec = Object.values(MORSE_TABLE);
  Object.keys(MORSE_TABLE).forEach(elem => {
    let newChar = '0000000000';
    for (let char of elem) {
      newChar += (char == '-') ? '11' : '10';
    }
    decodeArr.push(newChar.slice(-10));
  });
  for (let i = 0; i < expr.length; i += 10) {
    let symbol = expr.slice(i, i + 10);
    if (symbol == '**********') {
      result += ' ';
    } else {
      decodeArr.forEach((elem, i) => {
        if (elem == symbol) {
          result += dec[i];
        }
      })
    }
  }
  return result;
}

module.exports = {
    decode
}
