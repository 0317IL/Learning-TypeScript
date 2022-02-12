export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não escreve sem ferramenta');
      return;
    }

    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} escrevendo`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} digitando`);
  }
}

const escritor = new Escritor('Luis');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Remington');

console.log(escritor);
console.log(caneta);
console.log(maquinaEscrever);

escritor.ferramenta = caneta;
escritor.escrever();

escritor.ferramenta = maquinaEscrever;
escritor.escrever();
