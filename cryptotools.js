function charToNum(x) {
  return x.charCodeAt(0) - 65;
}

function numToChar(x) {
  return String.fromCharCode(x + 65);
}

//do the caesar cipher
function caesar() {
  let pt = document.getElementById("ccinput").value.toUpperCase().replace(/\s+/g,"");
  let a = parseFloat(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  document.getElementById("ccoutput").value = shiftString(pt, a, b);
}

//return a string shifted
function shiftString(s, a, b) {
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    ret += numToChar(mod(Math.round(charToNum(s[i]) * a + b), 26));
  }
  return ret;
}

//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function mod(n, m) {
  return ((n % m) + m) % m;
}

function vigenere() {
  let pt = document.getElementById("vinput").value.toUpperCase().replace(/\s+/g,"");
  let b = document.getElementById("addorsubtract").value;
  let secretword = document.getElementById("sw").value.toUpperCase().replace(/\s+/g,"");
  let ret = "";
  let c = 0;
  for (let i = 0; i < pt.length; i++) {
    if (b == "Add") {
      ret += numToChar(mod(charToNum(pt[i]) + charToNum(secretword[c]), 26));
    }
    if (b == "Sub") {
      ret += numToChar(mod(charToNum(pt[i]) - charToNum(secretword[c]), 26));
    }
    c = mod(c + 1, secretword.length);
  }
  document.getElementById("voutput").value = ret;
}
