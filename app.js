// Initialisation
let JoueurActif = "X" 
let ScoreJoueurX = 0;
let ScoreJoueurO = 0;

//Créer la fonction gain et la fonction egalite


//Afficher le tour du joueur
document.querySelector('#TourJoueur').innerHTML = "C'est au tour de " + JoueurActif + " de jouer";

//Afficher les scores
document.querySelector('#scoreX').innerHTML = "Le score de X est de " + ScoreJoueurX + " points."
document.querySelector('#scoreO').innerHTML = "Le score de X est de " + ScoreJoueurO + " points."

//Evènement au clic d'une case
document.querySelectorAll('.case').forEach(cell => cell.addEventListener("click", clicCase))

//Afficher le X ou O dans la case cliquée
function clicCase() {
    document.querySelector(?????).innerHTML = JoueurActif;
}

//Boucle après qu'un joueur ait joué
if (gain = true) {
    alert("Vous avez gagné");
    if (JoueurActif === "X") {
        ScoreJoueurX ++
    }
    else {
        ScoreJoueurO ++
    }
}
else if (egalite = true) {
    alert("Egalité!");
    ScoreJoueurX ++ ;
    ScoreJoueurO ++ ;
}
