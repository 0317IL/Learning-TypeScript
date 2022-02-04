/* eslint-disable */
let nome: string = 'Luis'; //Qualquer tipo de string
let idade: number = 10; // Qualquer número
let adulto: boolean = true; //True ou false
let simbolo: symbol = Symbol('Qualquer-symbol') //symbol

//ARRAY
let arrayNumeros: Array<number> = [1,2,3]
              //number[] = [1,2,3]
let arrayString: Array<string> = ['a', 'b']
            // string[] = ['a', 'b']
//OBJETO
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'j',
  adulto: true,
}

//FUNÇÕES
function soma(x: number, y: number){
  return x + y
}

