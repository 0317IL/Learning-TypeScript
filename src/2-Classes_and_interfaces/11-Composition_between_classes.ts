export class Carro {
  private readonly motor = new Motor();

  ligar() {
    this.motor.ligar();
  }

  acelerar() {
    this.motor.acelerar();
  }

  parar() {
    this.motor.parar();
  }

  desligar() {
    this.motor.desligar();
  }
}

export class Motor {
  ligar() {
    console.log('Ligado');
  }

  acelerar() {
    console.log('Acelerou');
  }

  parar() {
    console.log('Parou');
  }

  desligar() {
    console.log('Desligou');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
