// import Store from "store.js";
import Store from "./store.js";
import { reducer } from "./reducer.js";
// import {increment,decrement} from "./a"
console.log("hello");
const store = new Store(reducer,{
    count:0,
    todos:[],
    // auth:{
    //     token:"jaskjfdl",
    //     userEmail:""
    // },
    // products:[],
});

let counter= document.getElementById("containerdiv");
let inc= document.getElementById("increment");
let dce = document.getElementById("Decrement")
let add = document.getElementById("Add");
let subtract= document.getElementById("Substract")
let multiply = document.getElementById("Multiply")
let divide = document.getElementById("divide")
let x = document.getElementById("inputvalue")

counter.innerText=store.getState().count

inc.addEventListener("click",function(){
    // console.log("hello")
    store.dispatch({type:"INCREMENT"});
    counter.innerText=store.getState().count
})
dce.addEventListener("click",function(){
    store.dispatch({type:"DCEREMENT"});
    counter.innerText=store.getState().count
})

add.addEventListener("click",function(){
    let X = x.value
    store.dispatch({type:"ADD",value:X});
    counter.innerText=store.getState().count
})
subtract.addEventListener("click",function(){
    let X = x.value
    store.dispatch({type:"SUBSTRACT",value:X});
    counter.innerText=store.getState().count
    
})
multiply.addEventListener("click",function(){
    let X = x.value
    store.dispatch({type:"MULTIPLY",value:X});
    counter.innerText=store.getState().count
    
})
divide.addEventListener("click",function(){
    let X = x.value
    store.dispatch({type:"DIVIDE",value:X});
    counter.innerText=store.getState().count
    
})