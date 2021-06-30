function random(){
    return Math.floor(Math.random() * 10);
}

let a = random();
let b = random();
let c = random();
let d = random();
let e = random();

console.log("min is "+ Math.min(a,b,c,d,e));
console.log("max is " + Math.max(a,b,c,d,e));