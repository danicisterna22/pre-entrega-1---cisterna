//SALUDO BIENVENIDA
function pedirNombre(){
    let nombre = prompt("Ingrese su nombre");
    let saludoBienvenida = `Hola ${nombre} Bienvenido`;
    let ayuda = "¿En que podemos ayudarlo?"
    alert (`${saludoBienvenida} ${ayuda}`);
}
pedirNombre ()

//REQUERIMIENTOS PARA ACCEDER AL CREDITO (EDAD)

let edad = Number(prompt("Ingrese su edad"));

if (edad <= 14){
    alert ("Usted no puede acceder al crédito solicitado");
}
else if (edad <= 17){
    alert ("Puede acceder al crédito a través de un garante");
}
else if (edad <= 65){
    alert ("Usted puede acceder al crédito");
    
}
else{
    alert ("No podrá acceder al crédito")
}


//OFRECIMIENTO DE MONTO A FINANCIAR Y CUOTAS

let montoAfinanciar = Number(prompt("Ingrese el monto que usted solicita"));
let interesTotal = 0.50 * montoAfinanciar;
let capitalEintereses = montoAfinanciar + interesTotal;
alert (`Usted abonará el importe total de ${capitalEintereses}`)
let cantidadDeCuotas = Number(prompt("Ingrese la cantidad de cuotas que desea pagar"));
 
for (let i = 1; i <= cantidadDeCuotas; i++){
let resultado = montoAfinanciar + interesTotal 
let mensaje = ` Usted pagará en la cuota ${i} : ${resultado} `;
alert (mensaje);
}


