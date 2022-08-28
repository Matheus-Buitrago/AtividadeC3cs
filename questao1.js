let valor_a;
let valor_b;
let valor_c;

valor_a = prompt("informe o valor de a: ");
valor_b = prompt("informe o valor de b: ");
valor_c = prompt("informe o valor de c: ");

if((valor_a == valor_b && valor_a == valor_c) && 
(valor_b == valor_a && valor_b == valor_c) &&
(valor_c == valor_a && valor_c == valor_b)){

    window.alert("os valores representao um tringulo Equilatero!")

}else if((valor_a == valor_b || valor_a == valor_c)||
(valor_b == valor_a || valor_b == valor_c)||
(valor_c == valor_a || valor_c == valor_b)){

    window.alert("os valores representao um tringulo Isoceles!")

}else if((valor_a != valor_b && valor_a != valor_c) && 
(valor_b != valor_a && valor_b != valor_c) &&
(valor_c != valor_a && valor_c != valor_b)){

    window.alert("os valores representao um tringulo Escaleno!")

}
