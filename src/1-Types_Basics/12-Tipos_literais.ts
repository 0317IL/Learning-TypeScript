/*Quando você declara uma variável via varou let, você está dizendo ao
compilador que existe a chance de que essa variável mude seu conteúdo.
Por outro lado, usar const para declarar uma variável informará ao
TypeScript que esse objeto nunca será alterado.*/

let x = 10; //eslint-disable-line

x = 120;
x = 'Carlos'; // Ao atribuir um 'number' a variável não aceita uma 'string'

const y = 10;

let a = 100 as const; //eslint-disable-line

const person = {
  //Os tipos foram declarados como string
  name: 'Carlos',
  lastName: 'Sobrinho',
};

const person2 = {
  name: 'Carlos' as const,
  lastName: 'Sobrinho',
};

person.name = 'Luis';
person2.name = 'Luis'; // Por ser como uma const o valor de name não pode mudar

//Module mode
export default 1;
