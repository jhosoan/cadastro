/*variavel*/

const dados_tela = document.getElementById("dados");//div do conteudo:
const botao = document.getElementById("btn_salvar")            
var nome = document.getElementById("nome")
var email = document.getElementById("email")
const data_nacimento = document.getElementById("data")
const sobrenome = document.getElementById("sobrenome")
nome.focus()

botao.addEventListener("click", () => {
    if(nome.value === ""){
       nome.style.borderColor = "red"        
       var men = document.getElementById("msd")
       men.innerHTML = "Inseira o nome"
       men.style.color ="red"
       
    }
    
    if(sobrenome.value === ""){
       sobrenome.style.borderColor = "red"
       var men = document.getElementById("msd_dois")
       men.innerHTML = "Inseira o sobrenome"
       men.style.color ="red"
    }
    if(email.value === ""){
       email.style.borderColor = "red"
       var men = document.getElementById("msd_tres")
       men.innerHTML = "Inseira o Email"
       men.style.color ="red" 
       
    }
    if(data_nacimento.value === ""){
        data_nacimento.style.borderColor = "red" 
        var men = document.getElementById("msd_quatro")
       men.innerHTML = "Inseira o Data de nacimento"
       men.style.color ="red"

    }
    
    
    
})


