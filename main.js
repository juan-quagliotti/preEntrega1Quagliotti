
let bienvenida;
let validacion = true

function nombre(){
    
    do{
    bienvenida = prompt('Hola! bienvenido a tu simulador de ingresos totales, por favor ingresa tu nombre.')
        if (bienvenida.toLowerCase() !=""){
        alert('ingresaste tu nombre como '+bienvenida);validacion=false;simulador()
        } else{
        alert('debes ingresar tu nombre para continuar')
        console.error('no se reconoce el nombre')
        break
        
        }


    }
while(validacion)

}
nombre()

function simulador(){
    let respuesta1 = parseInt(prompt('hola ' + bienvenida + ', ingresa la cantidad de producto que quieres vender ' )) 
    let respuesta2 = parseFloat(prompt('ingresaste la cantidad de ' + respuesta1 + ' ahora ingresa el precio del producto al que quieras vender')) 
    if(!isNaN(respuesta1) && !isNaN(respuesta2)){
    let ingresototal = respuesta1*respuesta2
    alert(bienvenida +', el ingreso total que obtienes es ' + ingresototal.toFixed(2))
    }
    else{
        alert('los datos ingresados no son validos')
    }


}










