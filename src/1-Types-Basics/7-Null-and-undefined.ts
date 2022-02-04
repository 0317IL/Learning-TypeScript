/*O Null significa um valor vazio ou inexistente. A ausência de valor
aqui é intencional. O TypeScript não torna uma variável automaticamente
nula. Temos que atribuir Null à variável para torná-la nula  */

/*O Undefined significa que uma variável foi declarada, mas ainda
não recebeu um valor. As variáveis ​​indefinidas não possuem nenhum valor.
É uma ausência não intencional de qualquer valor. Sempre que
declaramos uma variável sem inicializá-la com um valor, o TypeScript a
inicializa como undefined. */

export function createPerson(
  firstName: string, //Abertura da função
  lastName?: string, //undefined
): {
  //Anotation
  firstName: string;
  lastName?: string; //undefined
} {
  //Corpo da função
  return {
    firstName,
    lastName,
  };
}

export function square(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareNumber = square(2);
const squareString = square('t');

if (squareNumber === null) {
  console.log('Conta inválida');
} else {
  console.log('squareNumber: ' + squareNumber);
}

if (squareString === null) {
  console.log('squareString: Conta inválida');
} else {
  console.log(squareString);
}
