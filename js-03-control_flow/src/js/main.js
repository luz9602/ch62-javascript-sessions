

//---------- TAREA LUNES  1 DE DIC ---------------

/*
    Realizar una función que reciba el valor booleano si una persona está feliz o no
 Si la persona está feliz, mostrar en la interfaz de usuario la imagen "public/images/dino.jpg"
 En caso contrario mostrar la imagen "public/images/dino-emo.png"
    
*/

function sentimiento(feliz){
    const imageElement=document.getElementById("dinoFeli")
    const dinoPath="./public/images/dino.jpg"
    const dinoEmoPath="./public/images/dino-emo.png"
    if (feliz){
        imageElement.src=dinoPath
    } else{
        imageElement.src=dinoEmoPath
    }
    console.log(imageElement)
}
const feliButtonElement=document.getElementById("feliButton")
feliButtonElement.addEventListener("click",()=>{sentimiento(true)})
const titeButtonElement=document.getElementById("titeButton")
titeButtonElement.addEventListener("click",()=>{sentimiento(false)})


//--------------------------------------------------------------------------------------------------------
const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
}

//--------- ------------------------------------------------------------------------------------------------
// función simple usando switch
function getWeatherSimple(codigo) {
  let mensaje = "no definido"; // valor por defecto

  switch (codigo) {
    case 0:
      mensaje = "Clear Sky";
      break;
    case 1:
    case 2:
    case 3:
      mensaje = "Mainly clear, partly cloudy, and overcast";
      break;
    case 45:
    case 48:
      mensaje = "Fog and depositing rime fog";
      break;
    // no hace falta default porque ya puse un valor por defecto arriba
  }

  return mensaje;
}

// ejemplos
console.log(getWeatherSimple(0));  // "Clear Sky"
console.log(getWeatherSimple(2));  // "Mainly clear, partly cloudy, and overcast"
console.log(getWeatherSimple(48)); // "Fog and depositing rime fog"
console.log(getWeatherSimple(99)); // "no definido"


//---------------------------------------------------------------------

function parOImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Impar";
}
console.log(parOImpar(4)); // "Par"
console.log(parOImpar(7)); // "Impar"