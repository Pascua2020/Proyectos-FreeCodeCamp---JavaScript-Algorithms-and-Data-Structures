function palindrome(str) {

  // Hago filtro para reemplazar - W : caracteres que no son alfanumericos basicos.
  // _ : espacios. g : variable global.
  var filtro = /[\W_]/g;
  console.log("Palabra sin modificar : "+str);

  // Convierto palabra a minuscula
  var alReves = str.toLowerCase();
  console.log(alReves);

   // Reemplazo caracteres que no quiero por espacios.
  var alReves2 = alReves.replace(filtro,"");
  console.log(alReves2);

  // Invierto la palabra
  var alReves3 = alReves2.split("").reverse().join("");
  console.log(alReves3);

  // Invierto nuevamente la palabra,de forma que obtengo la original con modificaciones.
  var original = alReves3.split("").reverse().join("");

  console.log("Original ( Modificada ) : "+original,"Alreves: "+alReves3);

  if(alReves3 === original){
  console.log("Es un Palindromo.");
  return true;}
  else{
  console.log("No es un Palindromo.");
  return false;}
}

console.log(palindrome("_Eye_"));
console.log(palindrome("gta V"));