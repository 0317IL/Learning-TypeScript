/*
  PUBLIC: É declarado por padrão e logo não precisa ser passado ao parâmetro.
      É necessário quando for utlizar um atalho;
  PRIVATE: É acessado somente onde é declarado, utilizado no encapsulamento;
  READONLY: Só pode ser lido e não modificado;
*/

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = []; //Acessado apenas nessa classe
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

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Google', '11.111.111/0001-11');

const colaborador = new Colaborador('Luis', 'Carlos');
const colaborador2 = new Colaborador('Carlos', 'Luis');
const colaborador3 = new Colaborador('Eduardo', 'Carlos');
const colaborador4 = new Colaborador('Carlos', 'Eduardo');

empresa.addColaborador(colaborador);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);
empresa.addColaborador(colaborador4);
empresa.addColaborador({
  nome: 'Flávio',
  sobrenome: 'Boussas',
});

empresa.showColaboradores();

console.log(empresa);
