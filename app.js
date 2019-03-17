const { welcome,log } =require("hello-easy-log");

let name = "Kushal"
let code = 200;
let msg = "hi";
let data = {
    "key": "value"
};
console.log(welcome(name))
console.log(log(code,msg,data))