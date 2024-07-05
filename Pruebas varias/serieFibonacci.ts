const Fibonacci = (numero: number) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Serie de Fibonacci:");
  if (numero <= 1) {
    console.log(numero);
  }
  for (let i = 1; i <= numero; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

Fibonacci(0);
