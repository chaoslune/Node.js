const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('C'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(/\w/g, 'e')) // /\w/g estudar RegExr

console.log('Ana,Maria,Pedro'.split(','))