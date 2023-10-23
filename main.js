function TocamSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

listadeTeclas[2].onclick = TocamSomRisada;