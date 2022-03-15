/* O método Object.assign() é usado para copiar os valores de todas as propriedades
  próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar
  o objeto destino. */

export function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  //return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { teste: 'valor 1'};
const obj2 = { test: 'value 1' };

const unir = unirObjetos(obj1, obj2);
console.log(unir);
