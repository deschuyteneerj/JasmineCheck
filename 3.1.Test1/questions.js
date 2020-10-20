
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e");
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1.concat(texte2);
}
let afficherCar5 =  (texte) => {
    return charString = texte.charAt(4);
}
let afficher9Car =  (texte) => {
    return texte.substring(0,9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {   
    return texte.trim();
}
let IsString =  (texte) => {
    return typeof texte == "string";
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length - 1;
    //return texte.match(/\s/g).length;
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("");
    //return [...texte].reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return x ** y;
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    return array.map(Math.abs);
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * rayon ** 2);
}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab, ac);
    //return Math.sqrt(ab ** 2 + ac ** 2);
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids/(taille*2)).toFixed(2));
}
