let botao = document.getElementById("botao");

botao.addEventListener("click", saudacao);

function saudacao(){
    let texto = document.getElementById("mensagem");
    texto.innerHTML = "Olá bem-vindo(a) à minha página.";
    texto.style.display = "block";
}