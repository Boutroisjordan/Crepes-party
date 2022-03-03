let convive; //nombres de personnes
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

let noMoreCourse = false;
let noMoreIngredients = false;
let mesures = [];
let tableauCourses = [];
let uniteDeMesure = ["g", " unité(s)", "L", "kg", "g"];
let uniteMagasin = [" paquet(s)", " unité(s)", " bouteille(s)", " paquet(s)", " plaquette(s)"];

//Récupère le nombre d'inviter taper dans l'input text
function getValue(){
    let input = document.getElementById("nombre-inviter").value;
    convive = input;
    Crepier(convive, recette);
}

// Calcul les mesures pour réaliser une crêpes
function Crepier(number, Object) {
    mesures.splice(0, mesures.length);
    for (var i = 0 in Object) {
        mesures.push((number * Object[i]));
    }
    faireSesCourses(tableauCourses);
};

// Calcule la quantité de courses à faire (en fonction des packaging magasin)
function faireSesCourses() {
    tableauCourses.splice(0, tableauCourses.length);
    tableauCourses.push((Math.ceil(mesures[0] / uniteProduct.farine)));
    tableauCourses.push((Math.ceil(mesures[1] / uniteProduct.oeuf)));
    tableauCourses.push((Math.ceil(mesures[2] / uniteProduct.lait)));
    tableauCourses.push((Math.ceil(mesures[3] / uniteProduct.sucre)));
    tableauCourses.push((Math.ceil(mesures[4] / uniteProduct.beurre)));
    goToHtml(mesures, tableauCourses);
    
};

// Envoie les mesusres et les courses dans le HTML
function goToHtml(array, array2) {
    //Ingrédients
    let ingredients = ["farine", "oeuf", "lait", "sucre", "beurre"];
    let ulCourses =  document.getElementById('courses');
    let ulRecette = document.getElementById('ingredients');
    if (!noMoreIngredients) {
        for (let index = 0; index < ingredients.length; index++) {
            let link = document.createElement("li");
            ulRecette.appendChild(link);
            link.setAttribute(`id`, `${ingredients[index]}-recette`);
            link.innerHTML = `<img src="img/${ingredients[index]}.png" alt="">` + array[index] + uniteDeMesure[index];
        }
        noMoreIngredients = true;
    } else if (noMoreIngredients) {

        for (let index = 0; index < ingredients.length; index++) {
            let insert = document.getElementById(`${ingredients[index]}-recette`);
            insert.innerHTML = `<img src="img/${ingredients[index]}.png" alt="">` + array[index] + uniteDeMesure[index];
        }
    };

    // COURSES

    if (!noMoreCourse) {
        for (let index = 0; index < ingredients.length; index++) {
            let link = document.createElement("li");
            ulCourses.appendChild(link);
            link.setAttribute(`id`, `${ingredients[index]}-courses`);
            link.innerHTML = `<img src="img/${ingredients[index]}.png" alt="">` + array2[index] + uniteMagasin[index];
        }
        noMoreCourse = true;

    } else if (noMoreCourse) {
        for (let index = 0; index < ingredients.length; index++) {
            let insert = document.getElementById(`${ingredients[index]}-courses`);
            insert.innerHTML = `<img src="img/${ingredients[index]}.png" alt="">` + array2[index] + uniteMagasin[index];
        }
    }




    // document.getElementById("farine-courses").innerHTML = `<img src="img/farine.png" alt="farine">` + listeDeCourse.farine + " paquets";
    // document.getElementById("oeuf-courses").innerHTML = `<img src="img/oeuf-frit.png" alt="oeuf">` + listeDeCourse.oeuf ;
    // document.getElementById("lait-courses").innerHTML = `<img src="img/carton-de-lait.png" alt="lait">` + listeDeCourse.lait + " brique";
    // document.getElementById("sucre-courses").innerHTML =  `<img src="img/sucre.png" alt="sucre">` + listeDeCourse.sucre + " paquets";
    // document.getElementById("beurre-courses").innerHTML =  `<img src="img/beurre.png" alt="beurre">` + listeDeCourse.beurre + " plaquette ";
}








