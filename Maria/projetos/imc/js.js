
function Imc() {
var nome = document.getElementById('nome').value;
var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura').value;
if(nome ==''||peso==''||altura==''){
    window.alert('Preencha todos os campos!!!')
    return false;
}
var x = (peso/(altura*altura)).toFixed(2);
var peso_min = ((altura*altura)*18.5).toFixed(2);
var peso_max = ((altura*altura)*24.9).toFixed(2);
if(x<17){
    document.getElementById('resultado').innerHTML=nome+' você está muito abaixo do peso, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}else if(x>=17 && x <=18.49){
    document.getElementById('resultado').innerHTML=nome+' você está abaixo do peso, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}else if(x>=18.5 && x <= 24.99){
    document.getElementById('resultado').innerHTML=nome+' você está com o peso normal, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}else if(x>=25 && x <= 29.99){
    document.getElementById('resultado').innerHTML=nome+' você está acima do peso, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}else if(x>=30 && x <= 34.99){
    document.getElementById('resultado').innerHTML=nome+' você tem obesidade nível 1, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}else if(x>=35 && x <= 39.99){
    document.getElementById('resultado').innerHTML=nome+' você tem obesidade nível 2, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}else if(x >= 40){
    document.getElementById('resultado').innerHTML=nome+' você tem obesidade nível 3, com IMC '+ x +' Procure manter o seu peso entre '+peso_min+'kg é '+peso_max+'kg.';
}
}
