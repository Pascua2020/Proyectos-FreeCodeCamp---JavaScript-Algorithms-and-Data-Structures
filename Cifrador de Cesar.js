function rot13(palabraCifrada) {

  console.log("La palabra cifrada es : "+palabraCifrada);
  var palabraDescifrada = "";

  for ( var cadaLetra = 0;cadaLetra < palabraCifrada.length; cadaLetra++){
    var codigoASCII = palabraCifrada[cadaLetra].charCodeAt();

    //console.log(codigoASCII);
    if(codigoASCII >= 65 && codigoASCII <= 90){
      if(codigoASCII == 65){
        palabraDescifrada += "N";}
      else if(codigoASCII == 66){
        palabraDescifrada += "O";}
      else if(codigoASCII == 67){
        palabraDescifrada += "P";}
      else if(codigoASCII == 68){
        palabraDescifrada += "Q";}
      else if(codigoASCII == 69){
        palabraDescifrada += "R";}
      else if(codigoASCII == 70){
        palabraDescifrada += "S";}
      else if(codigoASCII == 71){
        palabraDescifrada += "T";}
      else if(codigoASCII == 72){
        palabraDescifrada += "U";}
      else if(codigoASCII == 73){
        palabraDescifrada += "V";}
      else if(codigoASCII == 74){
        palabraDescifrada += "W";}
      else if(codigoASCII == 75){
        palabraDescifrada += "X";}
      else if(codigoASCII == 76){
        palabraDescifrada += "Y";}
      else if(codigoASCII == 77){
        palabraDescifrada += "Z";}
      else if(codigoASCII == 78){
        palabraDescifrada += "A";}
      else if(codigoASCII == 79){
        palabraDescifrada += "B";}
      else if(codigoASCII == 80){
        palabraDescifrada += "C";}
      else if(codigoASCII == 81){
        palabraDescifrada += "D";}
      else if(codigoASCII == 82){
        palabraDescifrada += "E";}
      else if(codigoASCII == 83){
        palabraDescifrada += "F";}
      else if(codigoASCII == 84){
        palabraDescifrada += "G";}
      else if(codigoASCII == 85){
        palabraDescifrada += "H";}
      else if(codigoASCII == 86){
        palabraDescifrada += "I";}
      else if(codigoASCII == 87){
        palabraDescifrada += "J";}
      else if(codigoASCII == 88){
        palabraDescifrada += "K";}
      else if(codigoASCII == 89){
        palabraDescifrada += "L";}
      else if(codigoASCII == 90){
        palabraDescifrada += "M";}
    }
    
    // No es una letra.Se agrega el mismo caracter que el original.
    else{
      palabraDescifrada += palabraCifrada[cadaLetra];
    }
  }
  //console.log("La palabra en realidad es : "+palabraDescifrada);
  palabraCifrada=palabraDescifrada;
  return palabraCifrada;
}

console.log(rot13("SERR PBQR PNZC"));
//console.log(descifrar("SERR CVMMN!"));
//console.log(descifrar("SERR YBIR?"));
//console.log(descifrar("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));