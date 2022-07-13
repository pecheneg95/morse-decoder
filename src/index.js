const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let res = [];
  while (expr.length > 0) {
    res.push(expr.slice(0, 10));
    expr = expr.slice(10, expr.length);
  }
 res = res.map((el) => { 
    return  el.replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-')
  });
 res = res.map((el) => { 
    if (el !== `**********`) {
        return el.replace(el, MORSE_TABLE[el])
    } else {
        return el.replace(el, ' ')
    }
  });

  return res.join('');
}

module.exports = {
  decode,
};
