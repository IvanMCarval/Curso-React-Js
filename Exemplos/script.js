//var nome = "ivan";

/*var x = 0;

while(x <br 10){
    document.write("</br>O Valor de x e:" + x);
    x++;
}

for (a = 0; a <br 10; a++){
    document.write("</br>O Valor de x e:" + a);
}*/

/*document.write("</br> Escolha seu pedido: </br>")
document.write("</br> 0 - Sorvete / 1 - Suco </br>")
document.write("</br> 2 - Coca-Cola / 3 - Agua </br></br>")

function pedir() {
    x = prompt("O que deseja pedir?");

    switch (x) {
        case "0":
            alert("O x vale 0 !")
            break;
        case "1":
            alert("O x vale 1 !")
            break;
        case "2":
            alert("O x vale 2 !")
            break;
        case "3":
            alert("O x vale 3 !")
            break;
    }
}*/

/*function acao() {
    document.write("Executando ...<br/>")
}

//setInterval(acao, 1000);
setTimeout(acao, 3000);*/

/*var nome = ''

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome: ")
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;*/

function cadastroPessoa(info) {
    let novosDados = {...info, cargo: 'Dev', Status: 1, codigo: 123456}
    return novosDados;
}

cadastroPessoa({nome: 'Ivan', sobrenome: 'Silva', anoInicio: 2045});