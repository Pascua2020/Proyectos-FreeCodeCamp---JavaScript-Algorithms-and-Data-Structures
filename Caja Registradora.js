const valoresMonedas = {
  // Los valores de las monedas deben multiplicarse por 100 ( EJ : 0.01 * 100 = 1),
  // ya que si no el programa da error - los resultados no son iguales -.
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {

  // PARTE 1
  // Primeras declaraciones.

  let diferencia = cash * 100 - price * 100;
  let diferenciaOriginal = diferencia;

  // variables clave a devolver al final del programa:
  let change = [];
  let status = "";

  let sumaElementos = 0;

  // Se le eliminan los ceros a la lista.
  let listaFiltrada = cid.filter(elem => elem[1] !== 0);

  // Se invierte la lista ( recordar que al final se deben devolver los valores de mayor 
  // a menor denominacion - en el caso de que sobre vuelto -.)
  listaFiltrada.reverse();

  console.log("price",price,"cash",cash);
  console.log("diferencia y diferenciaOriginal : ",diferencia);
  console.log("cid ( original ) : ",cid);
  console.log("listaFiltrada ( cid invertido y sin ceros ) : ",listaFiltrada);

  console.log("FIN PARTE 1");
  //PARTE 2
  // Bucle for de la Lista,que contiene tambien un While y un IF.

  listaFiltrada.forEach(elem => {
    let nombreMoneda = elem[0];
    let valorMoneda = elem[1] * 100;

    //console.log("nombreMoneda : ",elem[0]," , valorMoneda : ",elem[1]);

    sumaElementos += valorMoneda;

    // variable para calcular como procesar valores de monedas que terminan en decimal
    // ( pero que debido a modificaciones del programa no se muestran en decimal ).
    let monto = 0;

    while (diferencia >= valoresMonedas[nombreMoneda] && valorMoneda > 0) {
      // En el caso de QUARTER,valoresMonedas[nombreMoneda] es 0.25  .
      console.log("diferencia ",diferencia," es mayor o igual a valoresMonedas[nombreMoneda]",valoresMonedas[nombreMoneda],"y valorMoneda ",valorMoneda," es mayor a 0.");

      monto += valoresMonedas[nombreMoneda];
      diferencia -= valoresMonedas[nombreMoneda];
      valorMoneda -= valoresMonedas[nombreMoneda];

      console.log("valorMoneda (",valoresMonedas[nombreMoneda],") se agrega al monto (",monto,") y se resta a la diferencia(",diferencia,") y al valorMoneda(",valorMoneda,")");
      console.log("Monto (nuevo) : ",monto);
    }
    // Recordar que el siguiente IF se ejecuta tras terminar el WHILE,por lo que al 
    // volver a funcionar el WHILE,MONTO vuelve a ser 0 ( porque empieza con otra moneda .)
    if (monto !== 0) {
      // Se va agregando el monto de la moneda correspondiente,hasta terminar con la moneda actual para pasar a la siguiente.
      change.push([nombreMoneda, monto/100]);
      console.log("se agrega ",[nombreMoneda, monto]," al cambio,porque monto es diferente a 0.");
    }
    console.log("sumaElementos + valorMoneda(",valorMoneda,") : ",sumaElementos);
  });

  console.log("FIN PARTE 2");
  // PARTE 3
  // Se hace la condicion IF-ELSE que determina que valores clave vamos a devolver
  // ( segun el IF asignamos los valores y luego fuera del IF los devolvemos. )

  if (diferencia > 0) {
    console.log("Los fondos son insuficientes.Diferencia mayor a 0.");
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (diferencia == 0 && diferenciaOriginal == sumaElementos) {
    console.log("La caja esta cerrada.El cambio es el mismo ingresado por el usuario.");
    status = "CLOSED";
    change = cid;
  } else {
    console.log("La caja esta abierta.");
    status = "OPEN";
  }
  return { "status": status, "change": change };
}

// Mostramos la funcion a la cual llamamos,en la que se envia :
// *El precio de compra.
// *El pago.
// *El dinero en el mostrador ( dividido por sus denominaciones y la cantidad de cada una).

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
