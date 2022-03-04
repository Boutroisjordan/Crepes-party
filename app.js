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
let noMoreStep = false;

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
    sendSteps();
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

}


function sendSteps() {
    // Envoie les étapes
    let listStep = document.getElementById("liste-etapes");
    let step = ["Mettre de la farine dans un saladier, faire un puits au centre.", "Verser dans le puits la moitié du lait.", "élayer avec une spatule en bois en partant du centre et en faisant tomber peu à peu la farine dans le liquide.", "Quand toute la farine est incorporée, la pâte est à peine fluide.", "Pour la rendre parfaitement lisse, la travailler vigoureusement 2 à 3 minutes.", "Ajouter les oeufs entiers battus en omelette.", "Incorporer ensuite le sucre, le sel, l'huile, le parfum.", "Ajouter à ce moment la moitié du liquide qui reste. La pâte doit être onctueuse, fluide sans excès.", "Laisser la reposer une heure si cela est possible mais ce n'est pas du tout impératif", "Faites un essai en cuisant la première crêpe, si la pâte est trop épaisse, rajouter le reste du liquide, progressivement."];

    if (!noMoreStep) {
        for (let index = 0; index < step.length; index++) {
            let link = document.createElement("li");
            link.setAttribute(`class`, `step-link`);
            listStep.appendChild(link);
            let h3 = document.createElement("h3");
            h3.setAttribute(`class`, `step-heading`);
            h3.innerText = `Étape ${index + 1}`;
            link.appendChild(h3);
            let p = document.createElement("p");
            p.setAttribute(`class`, `step-detail`);
            link.appendChild(p);
            p.innerText = step[index];
            
        }

    };
}