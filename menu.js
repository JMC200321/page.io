const contact = document.querySelector("#contact");
const general = document.querySelector("#general");
const recomendaciones = document.querySelector("#recomendaciones");
const servicio = document.querySelector("#servicio");

contact.addEventListener("click",(p)=>{
    p.preventDefault();

    const selectp = document.querySelector(".contact");
    selectp.scrollIntoView({behavior: "smooth"});
});

general.addEventListener("click",(p)=>{
    p.preventDefault();

    const selectg = document.querySelector(".general");
    selectg.scrollIntoView({behavior: "smooth"});
});

recomendaciones.addEventListener("click",(p)=>{
    p.preventDefault();

    const selectr = document.querySelector(".recomendaciones");
    selectr.scrollIntoView({behavior: "smooth"});
});

servicio.addEventListener("click",(p)=>{
    p.preventDefault();

    const selects = document.querySelector(".servicio");
    selects.scrollIntoView({behavior: "smooth"});
});



