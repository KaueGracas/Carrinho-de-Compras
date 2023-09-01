let produtos = ["iphone", "ipad", "mac", "watch", "tv", "airpods"];
let precos = [8990.00, 9799.00, 13999.00, 4599.00, 2249.00, 1499.00];
let quantidades = [0, 0, 0, 0, 0, 0];

function adicionarProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  quantidades[index] += quantidade;
}

function removerProduto(produto, quantidade) {
    let index = produtos.indexOf(produto);
    quantidades[index] -= quantidade;
  }

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += precos[i] * quantidades[i];
  }
  return total;
}