let numerosPares = numero =>{
    if(typeof numero==="number"){
        return numero*2
    }else{
        throw new Error("error.Ingresar un numero")
    }
}

try{
    numero=numerosPares(2)
    console.log(numero)
}catch(e){
    console.error(`el valor de e es: ${e}`)
}