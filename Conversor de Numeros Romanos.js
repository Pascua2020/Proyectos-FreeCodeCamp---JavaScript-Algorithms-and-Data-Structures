function convertToRoman(num) {
 const numerosRomanos = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']

var total="";
for ( var i in numerosRomanos)
{
  //console.log(numerosRomanos[i]);
    
    if(num >= 1000){
    total+=numerosRomanos[0];
    //console.log("num: "+num);
    num-=1000;
    }
    else if(num >= 900){
    total+=numerosRomanos[1];
    //console.log("num: "+num);
    num-=900;
    }
    else if(num >= 500){
    total+=numerosRomanos[2];
    //console.log("num: "+num);
    num-=500;
    }
    else if(num >= 400){
    total+=numerosRomanos[3];
    //console.log("num: "+num);
    num-=400;
    }
    else if(num >= 100){
    total+=numerosRomanos[4];
    //console.log("num: "+num);
    num-=100;
    }
    else if(num >= 90){
    total+=numerosRomanos[5];
    //console.log("num: "+num);
    num-=90;
    }
    else if(num >= 50){
    total+=numerosRomanos[6];
    //console.log("num: "+num);
    num-=50;
    }
    else if(num >= 40){
    total+=numerosRomanos[7];
    //console.log("num: "+num);
    num-=40;
    }
    else if(num >= 10){
    total+=numerosRomanos[8];
    //console.log("num: "+num);
    num-=10;
    }
    else if(num >= 9){
    total+=numerosRomanos[9];
    //console.log("num: "+num);
    num-=9;
    }
    else if(num >= 5){
    total+=numerosRomanos[10];
    //console.log("num: "+num);
    num-=5;
    }
    else if(num >= 4){
    total+=numerosRomanos[11];
    //console.log("num: "+num);
    num-=4;
    }
    else if(num >= 1){
    total+=numerosRomanos[12];
    //console.log("num: "+num);
    num-=1;
    }
  

}
  console.log(total);
  return total;

 //console.log(numerosRomanos);
}

console.log(convertToRoman(2));