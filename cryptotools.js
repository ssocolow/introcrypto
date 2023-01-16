function charToNum(x) {
  return x.charCodeAt(0) - 65;
}

function numToChar(x) {
  return String.fromCharCode(x + 65);
}

//do the caesar cipher
function caesar() {
  let pt = document.getElementById("ccinput").value.toUpperCase().replace(/\s+/g,"");
  //let a = parseFloat(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  document.getElementById("ccoutput").value = shiftString(pt, b);
}

//return a string shifted
function shiftString(s, b) {
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    ret += numToChar(mod(Math.round(charToNum(s[i]) + b), 26));
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

//invert a two by two matrix in Z26 for hill cipher
function invert() {
  let a = document.getElementById("x11").value;
  let b = document.getElementById("x12").value;
  let c = document.getElementById("x21").value;
  let d = document.getElementById("x22").value;

  let check = mod(a*d - b*c, 26);
  if (check == 0 || check == 2 || check == 13) {
    document.getElementById("hc1").innerHTML = "won't work";
    document.getElementById("hc2").innerHTML = "";
    console.error("not going to work: ", check);
  } else {

    let h = -10;

    for (let i = 0; i < 26; i++) {
      if (mod(i*check,26) == 1) {
        h = i;
      }
    }
    console.log("h: " + h);
    console.log("inverse matrix is: " + mod(h*d,26) + " " + mod((-1)*h*b,26) + "\n" + mod((-1)*h*c,26) + " " + mod(h*a,26));
    document.getElementById("hc1").innerHTML = mod(h*d,26) + " , " + mod((-1)*h*b,26);
    document.getElementById("hc2").innerHTML = mod((-1)*h*c,26) + " , " + mod(h*a,26);
  }    
}

function mult() {
  let a1 = document.getElementById("a1").value;
  let b1 = document.getElementById("b1").value;
  let c1 = document.getElementById("c1").value;
  let d1 = document.getElementById("d1").value;

  let a2 = document.getElementById("a2").value;
  let b2 = document.getElementById("b2").value;
  let c2 = document.getElementById("c2").value;
  let d2 = document.getElementById("d2").value;

  let a3 = mod(a1*a2+b1*c2,26);
  let b3 = mod(a1*b2+b1*d2,26);
  let c3 = mod(c1*a2+d1*c2,26);
  let d3 = mod(c1*b2+d1*d2,26);

  console.log("multiplied matrix is:\n" + a3 + " " + b3 + "\n" + c3 + " " + d3);
  console.log(numToChar(a3) + " " + numToChar(c3) + " " + numToChar(b3) + " " + numToChar(d3));
  document.getElementById("hc3").innerHTML = a3 + " , " + b3;
  document.getElementById("hc4").innerHTML = c3 + " , " + d3;
  document.getElementById("hcr2").innerHTML += ": " + numToChar(a3) + " " + numToChar(c3) + " " + numToChar(b3) + " " + numToChar(d3);

}
