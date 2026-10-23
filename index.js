const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let generateBtn = document.getElementById("generate");
let passLength = document.getElementById("length");

generateBtn.addEventListener("click", () => {
  let passWord1 = "";
  let passWord2 = "";
  let passWordLength = passLength.value;

  if (!passWordLength) {
    passWordLength === 15;
  }

  for (let i = 0; i < passWordLength; i++) {
    let randPass1 = Math.floor(Math.random() * characters.length);
    let randPass2 = Math.floor(Math.random() * characters.length);
    passWord1 += characters[randPass1];
    passWord2 += characters[randPass2];
  }

  pass1.textContent = passWord1;
  pass2.textContent = passWord2;
});

generatePass();
