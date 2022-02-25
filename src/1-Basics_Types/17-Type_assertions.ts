/* RECOMENDADO */

//Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

//Type assertion
//Usar tiver certeza da existência do elemento
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

//HTMLElemente
//Usar tiver certeza da existência do elemento
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* NÃO RECOMENDADO */

//Type assertion
const body3 = document.querySelector('body') as unknown as number;

// Non-null assertion(!)
const body4 = document.querySelector('body')!;
body4.style.background = 'red';
