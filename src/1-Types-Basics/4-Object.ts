/* Em JavaScript, a maneira fundamental de agrupar e transmitir
dados é por meio de objetos. No TypeScript, nós os representamos
por meio de tipos de objetos . */

const objeto: {
  //Tipos
  nome: string;
  telefone: number;
  idade?: number;
  [key: string]: unknown;
} = {
  //Dados
  nome: 'Carlos',
  telefone: 912345678,
};

console.log(objeto);

objeto.idade = 18;
objeto.endereco = 'Rua Lima';

console.log(objeto);
