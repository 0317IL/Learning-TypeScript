/*
  GETTER: A sintaxe get é associado a uma função que será chamada quando
  a propriedade em questão for acessada e solicitada de forma dinâmica.
  É possível utilizá-la para retornar o status de uma variável interna,
  sem utilizar métodos de forma explícita.

  SETTER: Geralmente usados junto com os getters, os setters são utilizados
  para definirem valores para uma propriedade específica.
*/

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    console.log('Chamou setter');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('Chamou getter');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luis', 'Carlos', 24, '000.000.000-00');
pessoa.cpf = '123.456.789-12'; //SETTER
console.log(pessoa.cpf); //GETTER
