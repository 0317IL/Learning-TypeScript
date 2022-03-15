type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const pessoa = {
  nome:'Luis',
  sobrenome: 'Bastos',
  idade: 32,
  altura: 183,
  peso: 79,
};

const nome = obterChave(pessoa, 'nome');
const idade = obterChave(pessoa, 'idade');

console.log(nome, idade);
