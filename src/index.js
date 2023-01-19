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
  const phrase = [];

  for (let i = 0; i < expr.length; i += 10) {
    const letter = expr.slice(i, i + 10);
    phrase.push(binaryFormToDotsAndDashes(letter));
  }

  return phrase.map((item) => (item === " " ? item : MORSE_TABLE[item])).join("");
}

function binaryFormToDotsAndDashes(binaryForm) {
  if (binaryForm === "**********") return " ";

  let result = "";
  for (let i = 0; i < binaryForm.length; i += 2) {
    const symbol = binaryForm.slice(i, i + 2);

    if (symbol === "00") result += "";
    if (symbol === "10") result += ".";
    if (symbol === "11") result += "-";
  }

  return result;
}

module.exports = {
  decode,
};
