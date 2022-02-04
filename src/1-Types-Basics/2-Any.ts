/* Any é a cláusula de escape do Typescript. Você pode usar any para
declarar uma seção do seu código para ser dinâmica ou semelhante ao
JavaScript, ou para contornar as limitações do sistema de tipos. */

//Utilizar 'any' somente em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
