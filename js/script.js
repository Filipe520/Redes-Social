// ID Iphone-frame
const iframe = document.getElementById("iphone-frame");

// criando a tag IMG
const img = document.createElement("img")
// Achando a imagem dentro da pasta
img.srcset = "imagens/imagens-social/tela-home.jpg"
// Add atributo ALT
img.alt = "Tela Home"
img.className = "iframe"
img.style.transition = "all ease 1s"
// inserindo o elemento dentro do HTML
iframe.insertAdjacentElement("afterbegin", img)

// Criando a Tag Ancora
const ancora = document.createElement("a")

const botaoHome = document.getElementById("botao-home")
const botaoYoutube = document.getElementById("botao-youtube")
const botaoGitHub = document.getElementById("botao-github")
const botaoInstagram = document.getElementById("botao-instagram")
const botaoTwitter = document.getElementById("botao-twitter")
const botaoFacebook = document.getElementById("botao-facebook")

botaoHome.addEventListener("click", clicouHome)
botaoYoutube.addEventListener("click", clicouYoutube)
botaoGitHub.addEventListener("click", clicouGitHub)
botaoInstagram.addEventListener("click", clicouInstagram)
botaoTwitter.addEventListener("click", clicouTwitter)
botaoFacebook.addEventListener("click", clicouFacebook)

function clicouYoutube() {
    img.srcset = "imagens/imagens-social/tela-youtube.png"
    img.alt = "Tela Youtube"
    iframe.style.overflowY = "scroll"
    ancora.innerHTML = "ACESSE"
    iframe.insertAdjacentElement("beforeend", ancora)
    ancora.classList.add("ancoraStyle")
    ancora.style.display = "block"
    ancora.href = "https://www.youtube.com/@CursoemVideo"
    ancora.target = "_blank"
}

function clicouGitHub() {
    img.srcset = "imagens/imagens-social/tela-github.jpg"
    img.alt = "Tela GitHub"
    iframe.style.overflowY = "scroll"
    ancora.innerHTML = "ACESSE"
    iframe.insertAdjacentElement("beforeend", ancora)
    ancora.classList.add("ancoraStyle")
    ancora.style.display = "block"
    ancora.href = "https://github.com/gustavoguanabara"
    ancora.target = "_blank"
}

function clicouInstagram() {
    img.srcset = "imagens/imagens-social/tela-instagram.jpg"
    img.alt = "Tela Instagram"
    iframe.style.overflowY = "scroll"
    ancora.innerHTML = "ACESSE"
    iframe.insertAdjacentElement("beforeend", ancora)
    ancora.classList.add("ancoraStyle")
    ancora.style.display = "block"
    ancora.href = "https://www.instagram.com/gustavoguanabara/"
    ancora.target = "_blank"
}

function clicouTwitter() {
    img.srcset = "imagens/imagens-social/tela-twitter.jpg"
    img.alt = "Tela Twitter"
    iframe.style.overflowY = "scroll"
    ancora.innerHTML = "ACESSE"
    iframe.insertAdjacentElement("beforeend", ancora)
    ancora.classList.add("ancoraStyle")
    ancora.style.display = "block"
    ancora.href = "https://twitter.com/guanabara?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    ancora.target = "_blank"
}

function clicouFacebook() {
    img.srcset = "imagens/imagens-social/tela-facebook.jpg"
    img.alt = "Tela Facebook"
    iframe.style.overflowY = "scroll"
    ancora.innerHTML = "ACESSE"
    iframe.insertAdjacentElement("beforeend", ancora)
    ancora.classList.add("ancoraStyle")
    ancora.style.display = "block"
    ancora.href = "https://www.facebook.com/gustavoguanabara/?locale=pt_BR"
    ancora.target = "_blank"
}

function clicouHome() {
        img.srcset = "imagens/imagens-social/tela-home.jpg"
        img.alt = "Tela Home"
        img.classList.add("semEstilo")
        iframe.style = "overflowY = /*scroll*/"
        ancora.classList.remove("ancoraStyle")
        ancora.style.display = "none"
}

var nav = document.querySelectorAll(".nav")
console.log(nav.length)
for (let i = 0; i < nav.length; i++) {
    nav[i].style.margin = "15px";
    nav[i].style.transition = "all ease 2s"
}