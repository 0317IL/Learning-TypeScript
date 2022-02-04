/*As Tuplas representam uma estrutura de dados simples parecida com
um Array. A grande diferença entra as duas é que nos array’s nós
trabalhamos somente com um tipo de dado e com as tuplas com
diferentes tipos.  */

//---- TUPLE ----
const dados: [number, string] = [1, 'Carlos'];
const dados2: [number, string, string] = [2, 'Luis', 'Carlos'];
const dados3: [number, string, string?] = [3, 'Julios'];
const dados4: [number, string, ...string[]] = [4, 'João'];

dados[0] = 100;
dados[1] = 'Lurdes';
dados[2] = 'Marcos'; //A tupla não aceita adição de valores.
console.log(dados);

dados2[2] = 'Marcos';
console.log(dados2);

console.log(dados3);

dados4[3] = 'Ingrid';
dados4[5] = 'Mario';
console.log(dados4);

/* O prefixo readonlyé usado para tornar uma propriedade como somente
leitura. Os membros somente leitura podem ser acessados ​​fora da classe,
mas seu valor não pode ser alterado. Como os membros somente leitura não
podem ser alterados fora da classe, eles precisam ser inicializados na
declaração ou inicializados dentro do construtor da classe. */

//---- READONLY ARRAY ----
const array: readonly string[] = ['Luis', 'Eduardo'];
const array2: ReadonlyArray<string> = ['Marcos', 'Duca'];

console.log(array);
console.log(array2);
