const links = document.querySelector (".header-menu a");

// Confronta o URL com o HREF. Se TRUE faz um sublinhado nos títulos do header.
function ativarLink(link){
const url = location.href;
const href = link.href;

// includes ele compara a url com o href. Se no href tiver os mesmos caracteres que url, ele executa o doido.
if (url.includes (href)){
link.classList.add ("ativo");
}
}

links.forEach(ativarLink);





// PEGAR VALORES DA URL DA PAGINA ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
const elemento = document.getElementById(parametro);

// Um verificador para ver se o elemento realmente existe. Se o elemento existe, ele marca a caixinha de check
if (elemento) {
elemento.checked = true;
}
}

parametros.forEach (ativarProduto);