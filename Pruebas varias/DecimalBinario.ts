const Binario = (num: number): number[] => {
  let binarios: number[] = [];

  if (num === 0) {
    binarios.push(0);
  } else if (num === 1) {
    binarios.push(1);
  } else {
    while (num > 0) {
      binarios.push(num % 2);
      num = Math.floor(num / 2);
    }
    binarios.reverse();
  }

  return binarios;
};

console.log(Binario(12034256456320));
