/*O keyofoperador pega um tipo de objeto e produz uma string ou união literal
  numérica de suas chaves.

  O typeof pode ser usado em uma expressão ou em uma consulta de tipo.
  Quando usado em uma expressão, o tipo da expressão será uma string,
  portanto, o tipo primitivo string da avaliação da expressão.
*/

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  azul: 'blue',
  vermelho: 'red',
  amarelo: 'yellow',
  verde: 'green',
};

function tradutorDeCores(cor: CoresChaves, cores: CoresObj){
  return cores[cor];
}

console.log(tradutorDeCores('vermelho', coresObj))
console.log(tradutorDeCores('azul', coresObj))
console.log(tradutorDeCores('verde', coresObj))
