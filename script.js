const keycheck = (e) => {
    if(e.keyCode === 13){
        convertToRoman();
    }
}
function convertToRoman() {
    var num= document.querySelector("#numtorom").value;
    var roman = "";
    romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
    
    for (var i = 0; i < numbers.length; i++) {
    while (num >= numbers[i]) {
    roman += romanNumeral[i];
    num -= numbers[i];
    }
    }
    
    document.getElementById("output").innerHTML =roman;
    //return roman;
   }