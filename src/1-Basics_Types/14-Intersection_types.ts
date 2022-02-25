type Nome = { nome: string };
type Sobrenome = { sobrenome: string };
type Idade = { idade: number };

type Pessoa = Nome & Sobrenome & Idade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Luis',
  sobrenome: 'Carlos',
  idade: 34,
};

console.log(pessoa);

//Module mode
export default 1;
