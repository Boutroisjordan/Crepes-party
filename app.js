let convive;
let newRecette = new Object;
let listeDeCourse = {
    farine: 0,
    oeuf: 0,
    lait: 0,
    sucre: 0,
    beurre: 0,
};

let recette = {
    farine: 63,
    oeuf: 1,
    lait: 0.2,
    sucre: 0.015,
    beurre: 13,
};

let uniteProduct = {
    farine: 500, //grammes
    oeuf: 6, //unité
    lait: 1, //litres
    sucre: 1, //kg
    beurre: 500, //gramme
};


function getValue(){
    let input = document.getElementById("nombre-inviter").value;
    convive = input;
    Crepier(convive);
}

// Crepier(convive);

function Crepier(number) {
    newRecette.farine = number * recette.farine; 
    newRecette.oeuf = number * recette.oeuf;
    newRecette.lait = number * recette.lait;
    newRecette.sucre = number * recette.sucre;
    newRecette.beurre = number * recette.beurre;

    console.log(newRecette);
    course();
    return newRecette;
    
};

function course() {
    
    listeDeCourse.farine = Math.ceil(newRecette.farine / uniteProduct.farine);
    listeDeCourse.oeuf = Math.ceil(newRecette.oeuf / uniteProduct.oeuf);
    listeDeCourse.lait = Math.ceil(newRecette.lait / uniteProduct.lait);
    listeDeCourse.sucre = Math.ceil(newRecette.sucre / uniteProduct.sucre);
    listeDeCourse.beurre = Math.ceil(newRecette.beurre / uniteProduct.beurre);

    console.log(listeDeCourse);

    goToHtml();
    return listeDeCourse;
    
};

function goToHtml() {
    document.getElementById("farine-recette").innerText = newRecette.farine + "g";
    document.getElementById("oeuf-recette").innerText =  newRecette.oeuf ;
    document.getElementById("lait-recette").innerText =  newRecette.lait + "L";
    document.getElementById("sucre-recette").innerText = newRecette.sucre + "g";
    document.getElementById("beurre-recette").innerText = newRecette.beurre + "g";

    // courses

    document.getElementById("farine-courses").innerText = listeDeCourse.farine + " paquets";
    document.getElementById("oeuf-courses").innerText = listeDeCourse.oeuf ;
    document.getElementById("lait-courses").innerText = listeDeCourse.lait + " brique";
    document.getElementById("sucre-courses").innerText =  listeDeCourse.sucre + " paquets";
    document.getElementById("beurre-courses").innerText =  listeDeCourse.beurre + " plaquette ";
}



