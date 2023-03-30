console.log("calcular orcamento")

// Manipulação do DOM
let inputQtde = document.querySelector("#qtde")
let inputLayoutNorte = document.querySelector("#layout-norte")
let inputLayoutNordeste = document.querySelector("#layout-nordeste")
let inputLayoutCentro = document.querySelector("#layout-centro")
let inputLayoutSudeste = document.querySelector("#layout-sudeste")
let inputLayoutSul = document.querySelector("#layout-sul")
let inputPrazo = document.querySelector("#prazo")

inputQtde.addEventListener("change", atualizarOrcamento)
inputLayoutNorte.addEventListener("change", atualizarOrcamento)
inputLayoutNordeste.addEventListener("change", atualizarOrcamento)
inputLayoutCentro.addEventListener("change", atualizarOrcamento)
inputLayoutSudeste.addEventListener("change", atualizarOrcamento)
inputLayoutSul.addEventListener("change", atualizarOrcamento)
inputPrazo.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = inputQtde.value*250
    let norte = inputLayoutNorte.checked
    let nordeste = inputLayoutNordeste.checked
    let centro = inputLayoutCentro.checked
    let sudeste = inputLayoutSudeste.checked
    let sul = inputLayoutSul.checked
    let prazo = inputPrazo.value
    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML =  `Prazo (${prazo} dias)` //template literals
    
    console.log(nordeste)
    if(norte) preco+=inputQtde.value * 40
    if(nordeste) preco+=inputQtde.value * 40
    if(centro) preco += inputQtde.value * 20
    if(sudeste) preco+=inputQtde.value * 10
    if(sul) preco+=inputQtde.value * 20


   let taxaDeUrgencia = 1 - prazo*.066667
 
    preco *=   1 + taxaDeUrgencia
    

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}