var btn = document.querySelector('.usuarioMenu');
var modal = document.querySelector('.modalGeral');

btn.onclick = function() {
    modal.classList.toggle('modalLigada');
}

var conta = document.querySelector('.conta');
conta.onclick = function() {
    alert("Função não implementada");
}

var logoff = document.querySelector('.sair');
logoff.onclick = function() {
    window.location.href = "../login/";
}

