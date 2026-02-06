// var f = require('fs')
// f.writeFileSync('./test.txt',"Aniket Batule")
// var s = f.readFileSync('./test.txt',"utf-8")
// console.log(s)

const { Console } = require('console')
var f = require('fs')
f.writeFileSync('./demo.txt',"Welcome to Node Baby")

var s = f.readFileSync("./demo.txt")
console.log(s)