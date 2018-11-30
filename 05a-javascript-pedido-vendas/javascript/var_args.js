
let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista2.forEach( function(fruta) {
    lista1.push(fruta);
} );

lista2.forEach( fruta => lista1.push(fruta) );

lista1.push(...lista2);


console.log(lista1);
//["banana", "laranja", "mamão", "caju", "tangerina", "abacaxi"]

/*
O método push de todo array 
aceita receber os dados que você deseja 
incluir separados por vírgula, ou seja, 
a função está preparada para receber N 
elementos. Quando passamos a lista2 para 
lista1.push com o spread operator, 
cada item da lista será passado como 
um parâmetro para lista.push:
*/

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;                                            
}

 console.log(somaDoisNumeros(10,30) ); // exibe 40!


 let numeros = [10, 30];
 console.log(somaDoisNumeros(numeros[0], numeros[1]));

/*
Usamos ... antes do array passado como parâmetro. 
Cada item do array será passado para cada parâmetro 
recebido pela função. 

Inclusive isso vale para o constructor de uma classe.
*/

numeros = [10,30, 40];
console.log(somaDoisNumeros(...numeros));



function somatorio(...numeros ) {

    let total = 0; 
    numeros.forEach(numero => total += numero );
    return total ;                                            
}

console.log(somatorio(4, 8, 9));
console.log(numeros );


/* let numeros = [3,2,11,20,8,7];
Sua tarefa: criar uma nova lista com a mesma quantidade de números, 
mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar. */


// solução 01:

let numeros2 = [3,2,11,20,8,7];
let novosNumeros = [];

numeros2.forEach(item => {

    if(item % 2) { // só entra no IF se o resultado for diferente de zero
        novosNumeros.push(item * 2);
    } else {
        novosNumeros.push(item);
    }
});
console.log('Solução 01');
console.log(novosNumeros);

// solução 02: programação funcional 

let numeros3 = [3,2,11,20,8,7];

let novosNumeros3 = numeros3.map(  item =>  item % 2 ? item * 2 : item  );

console.log('Solução 02');
console.log(novosNumeros3);




