/*Os aliases criam um novo nome para um tipo. Os aliases de
tipo às vezes são semelhantes a interfaces, mas podem nomear primitivos,
uniões, tuplas e quaisquer outros tipos que você teria que escrever
manualmente. */

type Idade = number;

type Person = {
  name: string;
  age: number;
  corPreferida?: string;
};

type ColorRGB = 'Vermelhos' | 'Verde' | 'Azul';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type Cor = ColorRGB | ColorCMYK;

const pessoa: Person = {
  name: 'Carlos',
  age: 20,
};

export function setCorPreferida(pessoa: Person, cor: Cor): Person {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
