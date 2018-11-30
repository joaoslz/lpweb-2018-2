class ItemPedidoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event) {
        
        event.preventDefault();
      
        let item = new ItemPedido(
            this._inputNome.value,
            this._inputQuantidade.value,
            this._inputValor.value  
        );

        // adiciona no objeto pedido ...
        
        console.log(item );
    }
}