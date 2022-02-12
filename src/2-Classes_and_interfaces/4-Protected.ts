/* eslint-disable no-irregular-whitespace */
/*
  PROTECTED: O protected age muito como o private, com a exceção de que
      os membros declarados protected também podem ser acessados ​​nas
      classes derivadas.
*/

export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = []; //Acessado apenas nessa classe
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Google extends Empresa {
  constructor() {
    super('Google', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Google();
const colaborador = new Colaborador('Luis', 'Carlos');
const colaborador2 = new Colaborador('Carlos', 'Luis');
const colaborador3 = new Colaborador('Eduardo', 'Carlos');
const colaborador4 = new Colaborador('Carlos', 'Eduardo');

empresa.addColaborador(colaborador);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);
empresa.addColaborador(colaborador4);
const result = empresa.popColaborador();

console.log(result);
console.log(empresa);
