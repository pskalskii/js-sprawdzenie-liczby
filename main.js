function checkNumber(n) {
  if (n >= 100 && n <= 200) {
    return "Liczba znajduje się w przedziale";
  } else {
    return "Liczba nie znajduje się w przedziale";
  }
}

console.log(checkNumber(40));
console.log(checkNumber(160));
console.log(checkNumber(150));
console.log(checkNumber(220));
