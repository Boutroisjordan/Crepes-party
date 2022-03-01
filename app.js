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
    document.getElementById("farine-recette").innerHTML = "Il vous faudra " + newRecette.farine + "g de farine";
    document.getElementById("oeuf-recette").innerHTML = "Il vous faudra " + newRecette.oeuf + " oeufs.";
    document.getElementById("lait-recette").innerHTML = "Il vous faudra " + newRecette.lait + "L de lait";
    document.getElementById("sucre-recette").innerHTML = "Il vous faudra " + newRecette.sucre + "g de sucre";
    document.getElementById("beurre-recette").innerHTML = "Il vous faudra " + newRecette.beurre + "g de beurre";

    // courses

    document.getElementById("farine-courses").innerHTML = "Il vous faudra " + listeDeCourse.farine + " de paquets de farine";
    document.getElementById("oeuf-courses").innerHTML = "Il vous faudra " + listeDeCourse.oeuf + " oeufs";
    document.getElementById("lait-courses").innerHTML = "Il vous faudra " + listeDeCourse.lait + " brique de lait";
    document.getElementById("sucre-courses").innerHTML = "Il vous faudra " + listeDeCourse.sucre + " de paquets de sucre";
    document.getElementById("beurre-courses").innerHTML = "Il vous faudra " + listeDeCourse.beurre + " plaquette de beurre";
}



