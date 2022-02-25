type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'Título 1',
  text: 'Texto 1',
};

const documento2: Documento = {
  title: 'Título 2',
  text: 'Texto 2',
  date: new Date(),
};

console.log(documento.date?.toDateString() ?? 'Não possui data');
console.log(documento2.date?.toDateString() ?? 'Não possui data');

