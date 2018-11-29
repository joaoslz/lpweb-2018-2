
/* var idade = 18;
var temCarteira = true;

if(idade >= 18 && temCarteira) {
    var msg = 'Pode dirigir';
    console.log(msg);
}
alert(msg); // exibe 'Pode dirigir'. */


// correção antes do ECMAScript 6

/* var idade = 18;
var temCarteira = true;

(function() {
    if(idade >= 18 && temCarteira) {
        var msg = 'Pode dirigir';
        console.log(msg);
    }
})();

alert(msg); // exibe undefined */


let idade = 18;
//let idade = 21
let temCarteira = true;

if(idade >= 18 && temCarteira) {
    let msg = 'Pode dirigir';
    console.log(msg);
}
alert(msg); // exibe 'Pode dirigir'.
