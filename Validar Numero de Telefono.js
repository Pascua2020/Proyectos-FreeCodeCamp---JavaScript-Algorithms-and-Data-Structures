function telephoneCheck(str) {
  console.log("El numero ingresado es : "+str);
  const expresionesRegulares = /^(1\s?)?(\(\d\d\d\)|\d\d\d)[\s\-]?\d\d\d[\s\-]?\d\d\d\d$/;

  /*
  ^ : principio.
  \s : espacio en blanco.
  ? : 0 o 1 veces.
  \d : numero.
  \(  \)  : parentesis.
  | : condicion O
  \- : guion.
  $ : final.

  EJ:
  ^(1\s?) : 1 / 1_
  ---
  (\(\d\d\d\) : (555)
  O
  \d\d\d : 555
  ---
  \s\- : _-
  \d\d\d : 555
  \s\- : _-
  \d\d\d\d$ : 5555

  Total : 1 (555) - 555 - 5555
  */
  
  if(expresionesRegulares.test(str)){
    console.log("El numero es valido.");
  }
  else{
  console.log("El numero es invalido.");
  }

  return expresionesRegulares.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));