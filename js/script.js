const galeriaImg = document.querySelectorAll
  (".galeria li img");

function trocarImg(evento) {
  const imgPrincipal = document.querySelector(".img-principal-galeria img");
  const pegarImg = evento.currentTarget;
  imgPrincipal.src = pegarImg.src;
  imgPrincipal.alt = pegarImg.alt;
 }
function clicarIamgem(imagem) {
  
  imagem.addEventListener("click", trocarImg)
}
 galeriaImg.forEach(clicarIamgem)
