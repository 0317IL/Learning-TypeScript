/*
  A palavra chave static define um método estático para a classe.
  Métodos estáticos não são chamados na instâncias da classe. Em vez
  disso, eles são chamados na própria classe. Geralmente, são funções
  utilitárias, como funções para criar ou clonar objetos.
*/

export class Pessoa {
  static idadepadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadepadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Luis', 'Carlos', 24, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Carlos', 'Luis');

console.log(pessoa);
console.log(pessoa2);
