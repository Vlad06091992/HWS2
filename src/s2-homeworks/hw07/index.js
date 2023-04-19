// Hello world => helloWorld

let word = "Hello world"

function camel(str){
let res = str.split(' ').map(el=> el[0].toUpperCase() + el.slice(1) )





let str2 = res.join('')

let res3 = str2[0].toLowerCase() + str2.slice(1)

return res3

}

console.log(camel(word))