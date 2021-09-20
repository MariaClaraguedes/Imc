
function Imc() {
    var nome = document.getElementById('nome').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if(nome ==''||peso==''||altura==''){
        window.alert('Preencha todos os campos!!!')
        return false;
    }
    var x = (peso/(altura*altura)).toFixed(2);
    if(x<17){
        document.getElementById('resultado').innerHTML=nome+' você está muito abaixo do peso, '+x+'kg/m2';
    }else if(x>=17 && x <=18.49){
        document.getElementById('resultado').innerHTML=nome+' você está abaixo do peso, '+x+'kg/m2';
    }else if(x>=18.5 && x <= 24.99){
        document.getElementById('resultado').innerHTML=nome+' você está com o peso normal, '+x+'kg/m2';
    }else if(x>=25 && x <= 29.99){
        document.getElementById('resultado').innerHTML=nome+' você está acima do peso, '+x+'kg/m2';
    }else if(x>=30 && x <= 34.99){
        document.getElementById('resultado').innerHTML=nome+' você tem obesidade nível 1, '+x+'kg/m2';
    }else if(x>=35 && x <= 39.99){
        document.getElementById('resultado').innerHTML=nome+' você tem obesidade nível 2, '+x+'kg/m2';
    }else if(x >= 40){
        document.getElementById('resultado').innerHTML=nome+' você tem obesidade nível 3, '+x+'kg/m2';
    }
    }
    // window.alert('olá mundo!')
    // window.confirm('Você esta gostando?')
    // window.prompt("Qual é o seu nome?")