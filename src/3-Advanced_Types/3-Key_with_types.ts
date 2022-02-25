/* Para espelhar os tipos de outro type */

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
}

const carro: Car = {
  brand: 'Volkswagen',
  year: 2022,
  name: 'Nivus',
};

console.log(carro);
