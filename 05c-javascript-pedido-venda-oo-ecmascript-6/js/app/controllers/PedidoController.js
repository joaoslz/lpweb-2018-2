class PedidoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome' );
        this._inputQuantidade = $('#quantidade' );
        this._inputValor = $('#valor' );

        this._pedido = new Pedido(); 

        this._pedidoView = new PedidoView($('#js-pedidoVendaView') );
        this._pedidoView.update(this._pedido );
    }
    
    adiciona(event ) {
        
        event.preventDefault();
      
        let item = new ItemPedido(
            this._inputNome.value,
            this._inputQuantidade.value,
            this._inputValor.value  
        );
         // adiciona no objeto pedido ...
        this._pedido.adiciona(item ); 
        this._pedidoView.update(this._pedido );

        this._limpaFormulario();
        console.log(item );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = '';

        this._inputNome.focus();
    }
}