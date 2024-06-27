const numeros = [1, 2, 6, 87, 43, 2, 62, 90, 65, 3, 2, 87, 34];

const result = numeros.filter((number) => {
  return number % 2 === 0;
});

console.log(result);
