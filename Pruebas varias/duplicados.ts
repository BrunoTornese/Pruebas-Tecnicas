const eliminarDuplicados = (numeros: number[]) => {
  let noDuplicados = [...new Set(numeros)];
  console.log(noDuplicados);
};

eliminarDuplicados([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5,
  4, 3, 2, 1,
]);
