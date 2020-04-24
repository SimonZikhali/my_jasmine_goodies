function add(...args){
    var sum = 0,i = 0
    for (i = 0; i < args.length; i++){
        sum += args[i]
    }  
    return sum 
}
function multiply(...args){
    var product =args[0]
    for (i=1;i<args.length;i++){
    product *= args[i]
}
    return product
}
module.exports = {add,multiply}



