
let inputs = [ 
    document.querySelector('#nome').value,
    document.querySelector('#quantidade').value,
    document.querySelector('#valor').value 
];


btnCadastro.addEventListener('click',  function (event ) {
    event.preventDefault();
    console.log(inputs );

    inputs.forEach(input => console.log(input) );

});




/*
let btnCadastro = document.querySelector('#btnCadastro');

btnCadastro.addEventListener('click', cadastraProduto  );

function cadastraProduto(event ) {
    event.preventDefault();
    console.log(inputs );
}
*/