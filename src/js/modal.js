const btnTrailer = document.querySelector(".btn-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkTrailer = video.src;

btnTrailer.addEventListener("click", () => {
    modalAbertoFechado()
    video.setAttribute("src", linkTrailer)
});

fecharModal.addEventListener("click", () => {
    modalAbertoFechado()
    video.setAttribute("src", "")
});

function modalAbertoFechado() {
    modal.classList.toggle("aberto")
};

const observer = new IntersectionObserver(entries => {
    entries[0].target.classList.add('init-hidden-off')
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})
