/*variavel*/

const dados_tela = document.getElementById("dados");//div do conteudo:
const botao = document.getElementById("btn_salvar")            
var nome = document.getElementById("nome")
var email = document.getElementById("email")
const data_nacimento = document.getElementById("data")
const sobrenome = document.getElementById("sobrenome")
const curso = document.getElementById("curso")
let checkbox = document.querySelectorAll(".check")
var selecionado = 0 // base para calcular qual ta selecionado 

nome.focus()
/*função de impedimendo para não mudar de tela 
sem nada no input*/
botao.addEventListener("click", () => {
   if(nome.value === ""){
       nome.style.borderColor = "red"        
       var men = document.getElementById("msd")
       men.innerHTML = "inserir o nome"
       men.style.color ="red"
       
   }
    
   if(sobrenome.value === ""){
       sobrenome.style.borderColor = "red"
       var men = document.getElementById("msd_dois")
       men.innerHTML = "inserir o sobrenome"
       men.style.color ="red"
   }
   if(email.value === ""){
       email.style.borderColor = "red"
       var men = document.getElementById("msd_tres")
       men.innerHTML = "inserir o Email"
       men.style.color ="red" 
       
   }
   if(data_nacimento.value === ""){
      data_nacimento.style.borderColor = "red" 
      var men = document.getElementById("msd_quatro")
       men.innerHTML = "inserir o Data de nacimento"
       men.style.color ="red"
   }   
   if(curso.value === ""){
        curso.style.borderColor = "red" 
        var men = document.getElementById("msd_curso")
       men.innerHTML = "Inserir o nome do curso"
       men.style.color ="red"
   }
   //checkbox
   selecionado = 0
   checkbox.forEach(function(el){
   if(el.checked){
      selecionado++;
   }
})
   if(selecionado <= 1){
      var men = document.getElementById("checkbox")
      men.innerHTML = "Você precisa saber pelo menos duas tecnologia,<br> para Proceguir com formulario"
      men.style.color ="red"
   }else{
      var men = document.getElementById("checkbox")
      men.innerHTML = ""      
   }   

})
//Quando o usuario click em cima do input
//As cores e mensagem saiam da tela
nome.addEventListener("click", () =>{
    nome.style.borderColor = "black"
    var men = document.getElementById("msd")
       men.innerHTML = ""
})
sobrenome.addEventListener("click", () => {
    sobrenome.style.borderColor = "black"
    var men = document.getElementById("msd_dois")
    men.innerHTML = ""
})
 email.addEventListener("click", () => {
    email.style.borderColor = "black"
    var men = document.getElementById("msd_tres")
    men.innerHTML = ""
})
 data_nacimento.addEventListener("click", () => {
    data_nacimento.style.borderColor = "black"
    var men = document.getElementById("msd_quatro")
    men.innerHTML = ""   
})
curso.addEventListener("click", ()=>{
   curso.style.borderColor = "black"
    var men = document.getElementById("msd_curso")
    men.innerHTML = "" 
})


     
