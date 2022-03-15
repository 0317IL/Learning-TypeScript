interface Pessoa<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: Pessoa<string, number> = {
  nome: 'Carlos',
  sobrenome: 'Ricardo',
  idade: 12,
}

const aluno2: Pessoa<number, string> = {
  nome: 123,
  sobrenome: 321,
  idade:  'oi',
}

const aluno3: Pessoa = {
  nome: 'Luis',
  sobrenome: 'Eduardo',
  idade:  30,
}

console.log(aluno);
console.log(aluno2);
console.log(aluno3);


