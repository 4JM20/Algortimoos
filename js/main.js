function area_circulo(){
    var r = 0;
    var a = 0;
    r = parseInt(prompt("Digite el radio del circulo cm"));
    a = Math.PI*(r*r);

    alert("El area del circulo es :" + a);
}
function area_esfera(){
    var r = 0;
    var a = 0;
    r = parseInt(prompt("Digite el radio de la esfera "));
    a = 4*Math.PI*(r*r);
    alert("El area de la esfera es igual a : " + a);

}
function area_rectangulo(){
    var b =0;
    var a = 0;
    b = parseInt(prompt("Digite la base del rectangulo"));
    a = parseInt(prompt("Digite la altura del rectangulo"));
    result = b*a;
    alert("El area del rectangulo es : " + result);
    

}

function volumen_esfera(){
    var v = 0;
    var r = 0;
    r = parseInt(prompt("Digite el radio de la esfera "));
    v = (4/3)*Math.PI* (r^3);
    alert ("El volumen de las esfera es:" + v);

}
function volumen_cilindro(){
    var r = 0;
    var h = 0;
    r = parseInt(prompt("Digite el radio del cilindro"));
    h = parseInt(prompt("Digite la altura del cilindro"));
    result = Math.PI*(r^2)*h;
    alert ("El volumen del cilindro es: "+ result);
}