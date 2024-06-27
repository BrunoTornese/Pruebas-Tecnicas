const factorial = (numero) => {
  if (numero <= 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
