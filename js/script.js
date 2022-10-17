
//Validacion de formulario
const nombre = document.getElementById("nombres")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")





//Validacion de formulario
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
        nombre.style.borderColor = "red"
        
    }
    if(!regexEmail.test(email.value)){
        warnings += `<br>El email no es valido <br>`
        email.style.borderColor = "red"
        
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})




