
function constroiItemPedido(pNome, pQuantidade, pValor) {

    var item = {

        nome: pNome,
        quantidade: pQuantidade,
        valor: pValor,

        getSubTotal: function () {
            return this.quantidade * this.valor;
        },

        comparaItem: function(outroItem) {

            if (this.item.nome == outroItem.nome 
                 && this.item.quantidade == outroItem.quantidade
                 && this.item.valor == outroItem.valor ) {
                     return true;
                 }
            return false;     
        }

    };

    return item;

}
