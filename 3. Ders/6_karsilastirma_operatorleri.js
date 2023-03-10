let x = 5

let a = x == 5  //output: true
let b = x == "5" // output: true
let c = x === "5" // output: false,  hem değerinin hem de tipinin eşit olması gerekiyor
let d = x !== "5" // output: false,  tipinin ya da değerinin eşit olmaması
console.log(a, b, c, d)