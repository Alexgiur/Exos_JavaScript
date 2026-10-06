// Exercice 1

let choix = ["pierre", "feuille", "ciseaux"];
let choixPC = Math.random();
if (choixPC < 0.3333333333333) {
    choixPC = "pierre";
} else if (choixPC < 0.6666666666666) {
    choixPC = "feuille";
} else {
    choixPC = "ciseaux";
}
console.log(choixPC);
