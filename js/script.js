const links = document.querySelector (".header-menu a");

// Confronta o URL com o HREF. Se TRUE faz um sublinhado nos títulos do header.
function ativarLink(link){
const url = location.href;
const href = link.href;

if (url.includes (href)){
link.classList.add ("ativo");
}
}

links.forEach(ativarLink);