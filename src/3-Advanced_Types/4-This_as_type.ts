export class Calculadora {
  constructor(public number: number){}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

const teste = new Calculadora(10);

teste.add(10).sub(5).mul(4).div(2);
console.log(teste);
