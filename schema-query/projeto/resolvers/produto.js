module.exports = {
    precoComDesconto(produto) {
        if(produto.desconto != 0) {
          return produto.preco - produto.preco * produto.desconto / 100
        }
        else {
          return produto.preco
        }
      }
}