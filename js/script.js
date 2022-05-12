document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(validaFormulario) {
   if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" && document.getElementById("telefone").value !=""){
 alert("Prontinho! Você receberá nosso conteúdo por email.")
    }else{
 alert("Por favor, preencha todos os campos.")
}
}

