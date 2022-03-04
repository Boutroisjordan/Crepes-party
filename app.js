let convive; //nombres de personnes

//Recette des crêpes
let recette = {
    farine: 63,
    oeuf: 1,
    lait: 0.2,
    sucre: 0.015,
    beurre: 13,
};


// Les unités de packaging Magasin
let uniteProduct = {
    farine: 500, //grammes
    oeuf: 6, //unité
    lait: 1, //litres
    sucre: 1, //kg
    beurre: 500, //gramme
};

// Bloque la création de <li> à chaque clique et permet un update des informations
let noMoreCourse = false;
let noMoreIngredients = false;

//Tableaux comprenant le résultats des Calculs
let mesures = [];
let tableauCourses = [];

//Tableaux comprenant les unités en String
let uniteDeMesure = ["g", " unité(s)", "L", "kg", "g"];
let uniteMagasin = [" paquet(s)", " boite(s)", " bouteille(s)", " paquet(s)", " motte(s)"];


//Récupère le nombre d'inviter taper dans l'input text
function getValue(){

    let input = document.getElementById("nombre-inviter").value;

    //Vérifie si l'input est bien un nombre sinon envoie une alert
    if (isNaN(input)) {
        window.alert("Veuillez saisir un nombre !")
    } else {
        convive = input;
        Crepier(convive, recette);
    }
}

// Calcul les mesures pour réaliser la recette, stocker dans le tableau mesures
function Crepier(number, Object) {

    //vide le tableau
    mesures.splice(0, mesures.length);

    //Le calcul
    for (var i = 0 in Object) {
        mesures.push((number * Object[i]).toFixed(2));
    };

    faireSesCourses(tableauCourses);
};

// Calcule la quantité de courses à faire (en fonction des packaging magasin)
function faireSesCourses(tableau) {
    tableau.splice(0, tableau.length);
    tableau.push((Math.ceil(mesures[0] / uniteProduct.farine)));
    tableau.push((Math.ceil(mesures[1] / uniteProduct.oeuf)));
    tableau.push((Math.ceil(mesures[2] / uniteProduct.lait)));
    tableau.push((Math.ceil(mesures[3] / uniteProduct.sucre)));
    tableau.push((Math.ceil(mesures[4] / uniteProduct.beurre)));
    goToHtml(mesures, tableauCourses);
};

// Envoie les mesusres et les courses dans le HTML
function goToHtml(array, array2) {
    //Envoie les Ingrédients
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

    // Envoie la liste de Courses

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
};