let nota;
let lista = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];


nota = prompt("informe sua nota: ");

if(nota < 0 || nota > 100){
   window.alert("a nota informada é invalida!. Deve estar entre 0 e 100");
}

if(nota>= 38){
for(let x=0; x< lista.length;x++){

if((lista[x] - nota) < 3){

    while(nota < lista[x]){
        nota++
            }
    
        }

    }
   
}


if(nota < 40){
    window.alert("automaticamente reprovado por nota menor que 40!");
}

if(nota >= 40 && nota <= 100){
window.alert("voce foi aprovado pela nota "+nota)
}
