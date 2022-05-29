const add = (...args)=>{
// arguments
    return  args.reduce(function(acc,cur){
        return acc + cur
    }) 
}
const sub = (...args)=>{
    // arguments
        return  args.reduce(function(acc,cur){
            return acc - cur
        }) 
}
const mult = (...args)=>{
    // arguments
        return  args.reduce(function(acc,cur){
            return acc * cur
        }) 
}
// function sumOfAll(...props) {
//   const total = props.reduce((acc, elem) => acc + elem);
//   return total;
// }


const milliseconds=(n)=>{
    const hours = Math.floor(n/3.6e+6)%60
    const minutes = Math.floor(n/60000)%60
    const  seconds = Math.floor(n/1000)%60

    if(hours>0){
        return  time = `${hours} Hours ${minutes} Minutes ${ seconds} seconds`
    }
    if(minutes>0){
        return time = `${minutes} Minutes ${ seconds} seconds`
    }
    return time = `${ seconds} seconds`

}

module.exports=  {add,sub,mult,milliseconds}

// console.log(milliseconds(60000));


