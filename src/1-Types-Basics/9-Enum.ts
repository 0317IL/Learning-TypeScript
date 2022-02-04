/*Enums são um dos poucos recursos que o TypeScript possui que não é uma
extensão de nível de tipo do JavaScript.

Enums permitem que um desenvolvedor defina um conjunto de constantes
nomeadas. O uso de enums pode facilitar a documentação da intenção ou
criar um conjunto de casos distintos. O TypeScript fornece enumerações
numéricas e baseadas em string.*/

enum Cores {
  VERMELHO,
  AZUL,
  VERDE,
  ROXO = 'ROXO',
  ROSA = 4,
  PRETO,
}

console.log(Cores);
console.log(Cores[2]);
console.log(Cores.ROXO);

//Ao criar 2 enum com o mesmo nome ele junta.
enum Cores {
  BRANCO = 6,
  AMARELO,
  CINZA,
}

console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.VERMELHO);
