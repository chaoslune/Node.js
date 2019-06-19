/* Let tem valor local, dentro do escopo específico
    Usar preferencialmente let
    Let faz com a variável não possa ser usada mais de uma vez
    no mesmo arquivo
*/

var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

/* Const declara uma constante, uma variável que não pode ter o valor
alterado
*/

const c = 5
//c = 50
console.log(c);