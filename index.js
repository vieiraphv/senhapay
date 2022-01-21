
var ndata = new Date
var dia = ndata.getDate();
var mes = ndata.getMonth()+2;
var ano = ndata.getFullYear();
var hora = ndata.getHours();
var gmt = 3
var senha = ano-mes-dia-hora-gmt

 document.getElementById("textArea").innerHTML = senha
 document.getElementById("botao").innerHTML = senha

function copyToClipBoard() {
    navigator.clipboard.writeText(senha);
    alert("Aí sim chefia, copiado!"); 
    }
