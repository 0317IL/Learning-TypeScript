/*O tipo void é usado onde não há entrega de dados. Por exemplo,
se uma função não retornar nenhum valor, você poderá especificar
void como tipo de retorno.*/

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Carlos',
  sobrenome: 'Luis',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luis', 'Carlos');
pessoa.exibirNome();

export { pessoa };
