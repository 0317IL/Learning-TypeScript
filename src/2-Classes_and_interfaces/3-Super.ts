/*

*/

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  sala: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    const result = super.getNomeCompleto();
    return 'Aluno: ' + result;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luis', 'Carlos', 20, '000.000.000-00');
const aluno = new Aluno('Carlos', 'Luis', 17, '000.000.000-00', '201');
const cliente = new Cliente('Eduardo', 'Marcos', 35, '000.000.000-00');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
