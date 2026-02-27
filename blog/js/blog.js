import {artigos} from "/js/dados/artigos.js";

const blogPostTemplate = document.getElementById("blogPostTemplate");

function showPosts(posts){
    const postsContainer = document.getElementById("blogPosts");
    postsContainer.innerHTML = "";
    for (let post of posts) {
        let postElement = blogPostTemplate.content.cloneNode(true);
        postElement.querySelector("img").src = post.imagem;
        postElement.querySelector("img").alt = `Imagem do artigo ${post.titulo}`;
        postElement.querySelector("h3").textContent = post.titulo;
        postElement.querySelector(".postExcerpt").textContent = post.resumo;
        postElement.querySelector(".postDate").textContent = post.data.toLocaleDateString("pt-BR");
        postElement.querySelector("a").href = post.link;
        postsContainer.appendChild(postElement);
    }
}


let filterArtigos = document.getElementById("filterForm");
let assuntoField = document.getElementById("assuntoField");
let dataField = document.getElementById("dataField");
let especialidadeSelect = document.getElementById("especialidadeSelect");
let conteudoSelect = document.getElementById("conteudoSelect");
let btnFilter = document.querySelector(".btnFilter");

btnFilter.addEventListener("click", function(){
    let filteredPosts = artigos;

    if(assuntoField.value){
        filteredPosts = filteredPosts.filter(post => post.titulo.toLowerCase().includes(assuntoField.value.toLowerCase()));
    }

    if(dataField.value){
        filteredPosts = filteredPosts.filter(post => post.data.getTime() === new Date(dataField.value+"T00:00:00").getTime());
    }

    if(especialidadeSelect.value !== "Especialidade"){
        filteredPosts = filteredPosts.filter(post => post.especialidade === especialidadeSelect.value);
    }

    if(conteudoSelect.value !== "Conteúdo"){
        filteredPosts = filteredPosts.filter(post => post.conteudo === conteudoSelect.value);
    }

    showPosts(filteredPosts);
});


showPosts(artigos);



