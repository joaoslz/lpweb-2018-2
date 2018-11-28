
let inputs = [ 
    document.querySelector('#nome').value,
    document.querySelector('#quantidade').value,
    document.querySelector('#valor').value 
];

let tBody = document.querySelector('#tbodyItemPedido');

btnCadastro.addEventListener('click',  function (event ) {
    event.preventDefault();
    criaLinhaItemItemPedido();
});

function criaLinhaItemItemPedido() {
    let trItemPedido = document.createElement('tr');
    
    inputs.forEach(campo => criaCelulaTabela(trItemPedido, campo )  );
    criaCelulaSubTotal(trItemPedido );
   
    adicionaNovoItemNaTabelaPedidoVendas(trItemPedido );
}

function adicionaNovoItemNaTabelaPedidoVendas(trItemPedido ) {
    tBody.appendChild( trItemPedido );
}


function criaTd() {
    return document.createElement('td');

}

function criaCelulaTabela(trItemPedido, input ) {
    let td =  criaTd();
    td.textContent = input;

    trItemPedido.appendChild(td);
}

function criaCelulaSubTotal(trItemPedido ) {
   let subTotal =  calculaSubTotal(  inputs[1], inputs[2] );
   
   let tdSubTotal = criaTd();
   tdSubTotal.textContent = subTotal;
   trItemPedido.appendChild(tdSubTotal );
}

function calculaSubTotal(quantidade, valor ) {
    return quantidade * valor;
}



/*
let btnCadastrItemPedidoo = document.querySelector('#btnCadastrItemPedidoo');

btnCadastrItemPedidoo.addEventListener('click', cadastrItemPedidoaProduto  );

function cadastrItemPedidoaProduto(event ) {
    event.preventDefault();
    console.log(inputs );
}
*/