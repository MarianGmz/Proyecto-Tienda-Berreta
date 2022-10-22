
//array de la api para pasarle al momento de conectarse



//elementos a cambiar
const city = document.getElementById("city")
const date = document.getElementById("date")
const tempImagen = document.getElementById("temp-imagen")
const temp = document.getElementById("temp")
const weather = document.getElementById("weather")
const diff = document.getElementById("diff")
const alerta = document.getElementById("alerta")
const cards = document.getElementById("weather__card")

//videos de fondo
const fondoNubes = document.getElementById("video")
const fondoClaro = document.getElementById("video2")
const fondoLluvia = document.getElementById("video3")
const fondoNieve = document.getElementById("video4")
const fondoNiebla = document.getElementById("video5")



//funcion que actualiza el video del fondo respecto a el clima 
function actualizarFondo(data){ 
    let clima = data.weather[0].main
    fondoNieve.style.visibility = "hidden"
    fondoLluvia.style.visibility = "hidden"
    fondoNubes.style.visibility = "hidden"
    fondoClaro.style.visibility = "hidden"
    fondoNiebla.style.visibility = "hidden"
    if(clima == "Clear"){
       
        fondoClaro.style.visibility = "visible"
    }else if (clima == "Clouds"){
        
        fondoNubes.style.visibility = "visible"
    }else if (clima == "Rain"){
       
        fondoLluvia.style.visibility = "visible"
        
    }else if(clima == "Snow"){
    
        fondoNieve.style.visibility = "visible"
    }else if(clima == "Haze"){
        fondoNiebla.style.visibility = "visible"
    }
    
}

function ocultarObjetos(){
    fondoNieve.style.visibility = "hidden"
    fondoLluvia.style.visibility = "hidden"
    fondoNubes.style.visibility = "hidden"
    fondoClaro.style.visibility = "hidden"
    cards.style.visibility = "hidden"
}


//funcion asincrona que se conecta con la api y obtenemos los datos necesarios 
async function search(query){
    try{
        const response = await fetch(`${api.url}?q=${query[0]},${query[1]}&appid=${api.key}&lang=es`)
        const data = await response.json()
        console.log(data)

        //remplazamos el codigo html con los datos obtenidos
        alerta.style.display = "none"
        city.innerHTML = `${data.name} ${data.sys.country}`
        date.innerHTML = (new Date()).toLocaleDateString()
        temp.innerHTML = `${Acelsius(data.main.temp)}°`
        weather.innerHTML = data.weather[0].description;
        diff.innerHTML = `${Acelsius(data.main.temp_min)}°min / ${Acelsius(data.main.temp_max)}°max`
        tempImagen.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        actualizarFondo(data)
        
    }catch(err){
        ocultarObjetos()
        alerta.style.display = "block"

        console.log(err)
    }
}


//Funcion para pasar de kelvin a celsius
function Acelsius(kelvin){
    return Math.round(kelvin - 273.15)
}


//funcion que captura el evento(enter)
function onSubmit(event){
    event.preventDefault()
    let ciudad = searchbox.value.split(",")

    search(ciudad)
    document.querySelector(".weather__card").style.visibility = "visible"
}

const searchform = document.getElementById("search-div")
const searchbox = document.getElementById("searchbox")


searchform.addEventListener("submit",onSubmit, true)