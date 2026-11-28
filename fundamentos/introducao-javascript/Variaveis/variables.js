/* 
let age = 20; //number
let fullname = 'Lindomar'; //String
let isValid = true; //boolear
let xablau; //undefined
let value = null; //null

console.log(age);
console.log(fullname);
console.log(isValid);
console.log(xablau);
console.log(value);
*/


/*  [ABRE COMENTARIO]
Existem 3 maneiras de declarar uma variável em JS.

            var userEmail = 'user@email.com';

            let userId = 78945;

            const userLocation = 'Brasil';
[FECHA COMENTARIO] */ 

// Exemplo de código, troque "VAR" por "LET" e "CONST" e veja o resultado.

if (true) {
    // Início do escopo do if
    var userAge = '20';
    console.log(userAge); //20
    // Fim do escopo do if
}

console.log(userAge); //20

//O Var permite que você insira mais de um valor, isso pode ocasionar bugs em caso de desatenção ao código.
var userName = 'Isabella';
console.log(userName);

var userName = 'Lucas';
console.log(userName);
// O ES6 corrige o problema, fazendo com que uma variável com um nome específico só possa ser declarada uma única vez dentro de um escopo.

// ===== DIFERENÇA ENTRE O CONST E O LET

// O Const é utilizado para variáveis constantes, as quais não se permite reatribuir o valor, já o LET permite a reatribuição do valor. Rode o código como exemplo, trocando let e const:

/* [ABRE COMENTARIO]
const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';

console.log(favoriteLanguage); /// TypeError: Assignment to constant variable. 


let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';

console.log(favoriteTechnology);

[FECHA COMENTARIO] */


let patientId = 50; // Experimente utilizar '50' no lugar de 50
let isEnrolled = true;
let patientEmail = 'ana@email.com';

console.log('O tipo de variável do ID de paciente é ' + typeof patientId);

console.log(typeof patientAge);  // Undefined