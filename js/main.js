/**
 * Permet la génération aléatoire d'un mot de passe
 * 
 * @param {Int} length longueur du mot de passe souhaité
 * @returns {String} mot de passe généré
 */
function generatePassword(length){
    let chiffres, minLettre, majLettre, specialChar, acceptedChar, password;
    let countLength = 0;

    password = "";

    //Déclaration des caracteres accepté
    chiffres = "1234567890";
    minLettre = "abcdefghijklmnopqrstuvwxyz";
    majLettre = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    specialChar = "@#&(!)-_*%=+/;.?,";

    acceptedChar = chiffres + minLettre + majLettre + specialChar;

    //Génération du mot de passe
    while (countLength < length) {
        min = Math.ceil(0);
        max = Math.floor(acceptedChar.length);
        index = Math.floor(Math.random() * (max - min) + min);

        password += acceptedChar[index];
        countLength++;
    }

    return password;
}

/**
 * 
 * @param {Int} degres Degrès à convertir
 * @param {String} to Unité dans laquelle la conversion doit se faire
 * @returns {Int | false} Degrès une fois convertis, false si une erreur survient
 */
function convertDegres(degres, to){
    let convertDegres;
    console.log(degres);
    switch (to) {
        case 'celcius':
            console.log("celcius");
            convertDegres = (degres - 32) * (5/9);
            break;
        case 'fahrenheit':
            console.log("fahrenheit");
            convertDegres = degres * (9/5) + 32;
            break;
        default:
            alert('Il y a eu un problème lors de la conversion');
            return false;
    }

    return convertDegres;
}

/**
 * Retourne une citation aléatoire
 * 
 * @returns {String} citation aléatoire
 */
function generateRandString(){
    let arString = [
        `Un seul être vous manque et tout est dépeuplé - Lamartine`,
        `Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction - Antoine De Saint-Exupéry`,
        `Les seuls beaux yeux sont ceux qui vous regardent avec tendresse - Coco Chanel`,
        `S'aimer soi-même est le début d'une histoire d'amour qui durera toute une vie - Oscar Wilde`,
        `Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie - Confucius`,
        `Le domaine de la liberté commence là où s'arrête le travail déterminé par la nécessité - Karl Marx`,
        `Le travail, c'est le refuge des gens qui n'ont rien de mieux à faire - Oscar Wilde`
    ];

    min = Math.ceil(0);
    max = Math.floor(arString.length);
    index = Math.floor(Math.random() * (max - min) + min);

    return arString[index];
}