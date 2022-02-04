btnPlanetas = document.querySelector(".btnPlanetas");
btnAsteroides = document.querySelector(".btnAsteroides");
btnEstrelas = document.querySelector(".btnEstrelas");
btnGalaxias = document.querySelector(".btnGalaxias");
modalNaoImp = document.querySelector(".modalNaoImp");

btnAsteroides.onclick = function() {
    modalNaoImp.classList.toggle("modalNaoImpLigada");
}

btnEstrelas.onclick = function() {
    modalNaoImp.classList.toggle("modalNaoImpLigada");
}

btnGalaxias.onclick = function() {
    modalNaoImp.classList.toggle("modalNaoImpLigada");
}

btnPlanetas.onclick = function() {
    window.location.href = "../planet/";
}

document.onclick = function(event) {
    if (event.target == modalNaoImp) {
        modalNaoImp.classList.toggle("modalNaoImpLigada");
    }
}

