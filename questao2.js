let ax2 = 3;
let bx = 5;
let c = 12;
let delta = 0;


function bhaskara(a,b,c){

delta = Math.pow(b,2) - 4*a*c;

let x1 = (- b + Math.sqrt(delta)) / (2*a);
let x2 = (- b - Math.sqrt(delta)) / (2*a);
let result= [x1,x2]

if(delta < 0){
return res = "Delta é negativo";

}else{
    return result
    }
}

 let final  = bhaskara(ax2,bx,c)
window.alert(final)

