export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Brinquedo', 20);
const produto3 = new Produto('Bola', 35);

const carrinhoCompras = new CarrinhoDeCompras();
carrinhoCompras.inserirProdutos(produto, produto2, produto3);

console.log(carrinhoCompras);
console.log('Total : ' + carrinhoCompras.valorTotal());
