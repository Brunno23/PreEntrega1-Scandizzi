

alert("Bienvenida/o a la sección de compras de `Chef Gina´")
//  elegir entre empanadas y budines
let seleccion = prompt("-Si desea comprar EMPANADAS ingrese 1.\n-Si desea comprar BUDINES ingrese 2.")

while ((seleccion != 0)&&(seleccion != 3)) {
    //let cantidad=0
    //let total=0
    let total=0
    let total1=0
    
    let cantEmp = 0
    let cantBud = 0
    function Empanadas() {
        let cantidad = parseInt(prompt("Ingrese el número de empanadas que desea"));
        alert("Su pedido tiene un valor de $" +  cantidad * 250 );
        return parseInt(cantidad);
    }
    function Budines() {
        let cantidad = parseInt(prompt("Ingrese el número de budines que desea"));
        alert("Su pedido tiene un valor de $" +  cantidad * 700 );
        return parseInt(cantidad);
    }
    
    //  si elige empanadas
    if (seleccion == 1) {
        var totalEmpanadas = 0

        let variedad = prompt("El valor de cada empanada es $250 y la variedad es la siguiente:\n-Carne (c)\n-Jamón y queso (jyq)\n-Árabes (a)\n-Verdura (v)\n-Matambre (m)\n-Cebolla (ce)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).")
        
        //variedad de empanadas
        while (variedad != 0) {
            switch (variedad) {
                case "c":
                    cantEmp = Empanadas();
                break;
                case "jyq": 
                    cantEmp = Empanadas();
                break;
                case "a":
                    cantEmp = Empanadas();
                break;
                case "v":
                    cantEmp = Empanadas();
                break;
                case "m":
                    cantEmp = Empanadas();
                break;
                case "ce":
                    cantEmp = Empanadas();
                break;
                default:
                    alert("Usted ha ingresado un código incorrecto. Por favor intente nuevamente.")
                    cantEmp = 0
                break;
            }
            variedad = prompt("Si desea seguir comprando, recuerde que la variedad es la siguiente:\n-Carne (c)\n-Jamón y queso (jyq)\n-Árabes (a)\n-Verdura (v)\n-Matambre (m)\n-Cebolla (ce)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).\n\nSi desea finalizar su compra, ingrese 0.")
            //  cantidad total de empanadas compradas
            total1 = cantEmp + total1
        }
    //  costo total de empanadas compradas
    totalEmpanadas = total1 * 250
    alert("Usted ha gastado $" + totalEmpanadas + " en empanadas.")
    }
        //  si elige budines
    else if (seleccion == 2 ){
        var totalBudines = 0

        let variedad = prompt("El valor de cada budín es $700 y la variedad es la siguiente:\n-Zanahoria (z)\n-Limon glaseado (lg)\n-Marmolado (m)\n-Chocolate y nueces (cn)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).")
        
        //variedad de budines
        while (variedad != 0) {
            switch (variedad) {
                case "z":
                    cantBud = Budines();
                break;
                case "lg":
                    cantBud = Budines(); 
                break;
                case "m":
                    cantBud = Budines();
                break;
                case "cn":
                    cantBud = Budines();
                break;
                default:
                    alert("Usted ha ingresado un código incorrecto. Por favor intente nuevamente.")
                    cantBud = 0
                break;
            }
            //  cantidad total de budines comprados
            variedad = prompt("Si desea seguir comprando, recuerde que la variedad es la siguiente:\n-Zanahoria (z)\n-Limon glaseado (lg)\n-Marmolado (m)\n-Chocolate y nueces (cn)\n\nPara seleccionar una variedad, coloque la letra encerrada entre ( ).\n\nSi desea finalizar su compra, ingrese 0.")
            total = parseInt(cantBud + total)
        }
    //  costo total de budines comprados
    totalBudines = parseInt(total * 700)
    alert("Usted ha gastado $" + totalBudines + " en budines.")
    }
    //  si la eleccion no es ni budines ni empanadas, error
    else {
        alert("Usted ha ingresado un código incorrecto. Por favor intente nuevamente.")
    }
    //  mensaje que aparece al final del ciclo para dar la opcion de seguir comprando
    seleccion = prompt("-Si desea comprar EMPANADAS ingrese 1.\n-Si desea comprar BUDINES ingrese 2.\n-Si ya ha realizado una compra y desea abonar el pedido, ingrese 3.")
}
alert("El valor de su pedido es el siguiente:\n-Empanadas $" + totalEmpanadas + ".\n-Budines $" + totalBudines + ".\n\nMONTO TOTAL $" + (totalBudines + totalEmpanadas) + ".")
alert("Por el momento, el unico medio de cobro del que disponemos es por transferencia.\nA continuación le mostraremos los datos de la cuenta.\nDisculpe las moelstias.")
alert("-Alias: cheff.gina\n-CBU: 1234567890098765432112\n-Titular: Cheff Gina\n-CUIT: 27-12345678-9")
alert("Muchas gracias por su compra!\nQue lo disfrute!")




