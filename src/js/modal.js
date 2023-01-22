const btnTrailer = document.querySelector(".btn-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkTrailer = video.src;

console.log(linkTrailer);

btnTrailer.addEventListener("click", ()=>{
    modalAbertoFechado()
    video.setAttribute("src", linkTrailer)
});

fecharModal.addEventListener("click", ()=>{
    modalAbertoFechado()
    video.setAttribute("src", "")
});

function modalAbertoFechado(){
    modal.classList.toggle("aberto")
}