let x = 10;
console.log(x);
function isOddOrEven(numberToCheck) {
const isEven = numberToCheck % 2 == 0;
if (isEven) 
  return console.log(`The number ${numberToCheck} is Even`), m = numberToCheck;
else m = (numberToCheck + 1);
  console.log("The number is now even at: " + m)
}
isOddOrEven(x);
console.log(m);
for (let y = 1; y <= m; y++) {
  for (let s = (m - y); s <= m - y; s++){
    str = ' ';
    console.log(str.repeat(s),"* ".repeat(y))
  }
}
for (let y = 1, z = (m - y); y <= m - 1; y++, z--){
  str = ' ';
  console.log(str.repeat(y), "* ".repeat(z))
}