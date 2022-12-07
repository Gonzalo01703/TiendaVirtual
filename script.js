"use strict"
const ul =document.querySelector("ul");
//Buena Forma
function frames(){
    const animacion=ul.animate([
        //KeyFreams
        {transform: "TranslateY(0px)"},
        {transform: "TranslateY(-100px)"}
          
    ],{
        //Opciones
        easing: "linear",
        iterations:1,
        duration:200 

        
    });
    return animacion.finished;

}

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })
}
setInterval(() => {
    displace();
}, 1000);
