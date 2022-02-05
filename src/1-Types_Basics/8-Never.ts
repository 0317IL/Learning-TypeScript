/* O tipo never é usado quando se tem certeza de que algo nunca irá ocorrer.
Por exemplo, você escreve uma função que não retornará ao seu ponto final
ou sempre lançará uma exceção. */

export function criaErro(): never {
  throw new Error('Erro qualquer');
}
criaErro();

//Module mode
export default 1;
