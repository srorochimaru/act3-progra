function datos(){
    var str1= Number((document.getElementById("input1")).value);
    var str2= Number((document.getElementById("input2")).value);
    var lbl = document.getElementById("resultado");
    if (isNaN(str1) || isNaN(str2)){
        lbl.innerHTML("ERROR");
    }else{
        lbl.innerHTML=("<h1>El resultado es " + sumar(str1,str2));
    }
    //document.write(str1+ " " + str2)
}

function sumar(n1, n2){
    return(n1+n2);

}