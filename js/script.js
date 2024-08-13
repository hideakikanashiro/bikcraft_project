const links = document.querySelectorAll(".header-menu a");

// Confronta o URL com o HREF. Se TRUE faz um sublinhado nos títulos do header.
function ativarLink(link) {
   const url = location.href;
   const href = link.href;

   // includes ele compara a url com o href. Se no href tiver os mesmos caracteres que url, ele executa o doido.
   if (url.includes(href)) {
      link.classList.add("ativo");
   }
}

links.forEach(ativarLink);





// PEGAR VALORES DA URL DA PAGINA ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
   const elemento = document.getElementById(parametro);

   // Um verificador para ver se o elemento realmente existe. Se o elemento existe, ele marca a caixinha de check
   if (elemento) {
      elemento.checked = true;
   }
}

parametros.forEach(ativarProduto);




// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
   const pergunta = event.currentTarget;
   const controls = pergunta.getAttribute("aria-controls");
   const resposta = document.getElementById(controls);

   // podemos usar tbm um document.querySelector ('#${controls}');
   // ${} usamos quando queremos escrever de forma literária como se fosse uma string e não no caso uma variável 
   resposta.classList.toggle("ativa");
   const ativa = resposta.classList.contains('ativa');
   pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
   pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas);



// BICICLETAS IMAGENS CARROSSEL
const galeria = document.querySelectorAll('.bicicleta-img img');
const galeriaContainer = document.querySelector('.bicicleta-img');

function trocarImagem(event) {
   const img = event.currentTarget;
   const media = matchMedia('(min-width: 1000px)').matches;
   if (media) {
      galeriaContainer.prepend(img);
      console.log (galeriaContainer)
   }
}

function eventosGaleria(img) {
   img.addEventListener('click', trocarImagem);
}


galeria.forEach(eventosGaleria)




// ANIMATION
// executar somente se existir um script simple-anime.js
if (window.SimpleAnime){
   new SimpleAnime();
}