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
