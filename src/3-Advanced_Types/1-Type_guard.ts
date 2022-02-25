/* Os Type Guards são úteis para modelar situações em que os valores podem se
  sobrepor nos tipos que podem assumir.
*/

type Pessoa = {tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostrarNome(obj: PessoaOuAnimal): void {
  //if ('nome' in obj) console.log(obj.nome);
  //if (obj instanceof aluno) console.log(obj.nome);

  switch (obj.tipo) {
    case 'pessoa':
      console.log('Nome: ' + obj.nome);
      return;
    case 'animal':
      console.log('Cor: ' + obj.cor);
      return;
  }
}

mostrarNome(new Aluno('João'));
mostrarNome({tipo: 'animal', cor: 'Branco'});
mostrarNome({tipo: 'pessoa', nome: 'LUiz'});
