let n = prompt("informe um numero: ");
let lista = []

function calcular(n2){
for(let x = 0; x < n2; x++){

    if(x % 5 == 0){
        lista[x] = "luidy";
    
    }else if(x % 9 == 0){
        lista[x] = "Moura";
    
    }else if(x % 5 == 0 && x % 9 == 0){
        lista[x] = "LuidMoura";

    }else{lista[x] = x}

    window.alert(lista[x])
    }   
}

window.alert(calcular(n));
