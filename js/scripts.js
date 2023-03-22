//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

let hamburguesa = document.querySelector(".hamburguer");

hamburguesa.addEventListener("click", function(){
    if(semaforo){
        hamburguesa.style.color = "#fff";
        semaforo = false;
    } else{
        hamburguesa.style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menuDos");
})

enlacesHeader.addEventListener('click', function(){
    enlacesHeader.classList.toggle("menuDos");
    semaforo = true
})


