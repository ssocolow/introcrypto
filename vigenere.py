ciphertext = "NRUATWYAHJSEDIODIITLWCIJDOIPRADPANTOEOOPEGTNCWASDOBYAPFRALLWHSQNHWDTDPIJGENDEOBUWCEHLWKQGNLVEEYZZEOYOPXAGPIPDEHQOXGIKFSEYTDPOXAAPEENDENGEZAHAYOIPNWZNASAOEOHZOGQONTNZEHASIZOEJZRZPRXFTPSENPIOLNEPRAYCAMEPHEAYTDPSAEWKAUNXPKCTWYTZTFBDUEESEYSWYDBYCNJPPLNWWYOTSKYEGYOSDTDLTPSEDTDZPNKCDACWWDCKYSPCUYEEZMYDFMWYIJEEHWICPNYPWDPRALSPSEKCDACOBYAPFRALPLLRAYTHJCKXEOQRKXAOZUNNEKFTOTDAZFKFROPLRPSWYDEDMKCEIJSPPREZUO"
key = "LAW"
plaintext = ""

def charToInt(c):
  return ord(c) - 65

def intToChar(i):
  return chr(i + 65)


def main():
  global plaintext
  i = 0
  for c in ciphertext:
    plaintext += intToChar((charToInt(c) - charToInt(key[i])) % 26)
    i = (i + 1) % 3
  print(plaintext)
main()

print(charToInt("B"))
print(charToInt("Z"))
print(intToChar(0))
print(intToChar(24))
