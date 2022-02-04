/* O Array é um tipo especial de tipo de dados que pode armazenar
vários valores de diferentes tipos de dados sequencialmente usando
uma sintaxe especial. */

//Array<T> ou T[]

export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenarString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor);
}

export function upperCase(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}

const resultado = multiplicaArgs(1, 2, 3);
const result = concatenarString('a', 'b', 'c');
const upper = upperCase('a', 'b', 'c');

console.log(resultado);
console.log(result);
console.log(upper);
