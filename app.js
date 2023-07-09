// 변수선언방식
// 변수만들때 let, const, var차이
// let 재선언 금지, 재할당 가능
// const 재선언 금지, 재할당 금지
// var 재선언 가능, 재할당 가능

const b = 5;
const c = 2;
const d = 1;

let a = b;
console.log(a);
let a = c;
console.log(a);
//재선언 금지

let a = b;
a = c;
console.log(a);
//재할당은 가능

const a = b;
console.log(a);
const a = c;
console.log(a);
//재선언 금지

const a = b;
a = c;
console.log(a);
//재할당 금지

var a = b;
var a = c;
a = d;
console.log(a);
//재선언, 재할당 가능