const  m = require('./cal')
const n = require('./logic')
function test(n){
console.log(Math.sqrt(n))
}
test(4);
console.log(m.add(5,6))
console.log(m.mul(5,6))
console.log(n.tbl(5))
console.log(n.even(6))
console.log(m.div(8,2))