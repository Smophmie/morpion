// Initialisation

let CurrentPlayer = "X" ;
let completedCells = ["","","","","","","","",""];
let PlayerXScore = 0;
let PlayerOScore = 0;
let currentPlayerDisplay = document.querySelector('#PlayerTurn');
let scoreXDisplay = document.querySelector('#scoreX');
let scoreODisplay = document.querySelector('#scoreO');
const CELLS = document.querySelectorAll('.cell');

//Fonction gain

function win () {
    // Combinaisons de gains horizontales
    if(completedCells[0]==CurrentPlayer &&
       completedCells[1]==CurrentPlayer &&
       completedCells[2]==CurrentPlayer){
        return true;
    } else if (completedCells[3]==CurrentPlayer &&
        completedCells[4]==CurrentPlayer &&
        completedCells[5]==CurrentPlayer){
         return true;
     } else if (completedCells[6]==CurrentPlayer &&
        completedCells[7]==CurrentPlayer &&
        completedCells[8]==CurrentPlayer){
         return true;
     } 
    // Combinaisons de gains verticales
    else if (completedCells[0]==CurrentPlayer &&
        completedCells[3]==CurrentPlayer &&
        completedCells[6]==CurrentPlayer){
         return true;
     } else if (completedCells[1]==CurrentPlayer &&
        completedCells[4]==CurrentPlayer &&
        completedCells[7]==CurrentPlayer){
         return true;
     } else if (completedCells[2]==CurrentPlayer &&
        completedCells[5]==CurrentPlayer &&
        completedCells[8]==CurrentPlayer){
         return true;
     }
    //  Combinaisons de gains en diagonale
    else if (completedCells[0]==CurrentPlayer &&
        completedCells[4]==CurrentPlayer &&
        completedCells[8]==CurrentPlayer){
         return true;
     } else if (completedCells[2]==CurrentPlayer &&
        completedCells[4]==CurrentPlayer &&
        completedCells[6]==CurrentPlayer){
         return true;
     } else {
        return false;
     }
            
}

// Fonction vérifiant l'égalité entre les 2 joueurs (la grille est pleine et personne n'a gagné)

function equality() {
    for (let i = 0; i < completedCells.length; i++) {
        if (completedCells[i] === "") {
            return false;
        }
    }
    return true;
}

// Fonction permettant de remettre tout à zéro

function clear(){
    completedCells = ["","","","","","","","",""];
    CurrentPlayer = "X" ;
    CELLS.forEach(cell => {
        cell.innerHTML = "";
    });
}

//Affichage du joueur dont c'est le tour

currentPlayerDisplay.innerHTML = "C'est au tour de " + CurrentPlayer + " de jouer";


//Affichage des scores des joueurs

scoreXDisplay.innerHTML = "Le score de X est de " + PlayerXScore + " points."
scoreODisplay.innerHTML = "Le score de O est de " + PlayerOScore + " points."


//Evènement au clic d'une case

CELLS.forEach((cell => cell.addEventListener('click', (e) => {
    if (cell.innerHTML == ""){
    cell.innerHTML = CurrentPlayer;
    completedCells[cell.dataset.index] = CurrentPlayer;
        if (win() === true) {
            alert("Vous avez gagné");
            if (CurrentPlayer === "X") {
                PlayerXScore ++
            }
            else {
                PlayerOScore ++
            }
            scoreXDisplay.innerHTML = "Le score de X est de " + PlayerXScore + " points.";
            scoreODisplay.innerHTML = "Le score de O est de " + PlayerOScore + " points.";
            clear();
        } else if (equality() === true) {
            alert("Egalité!");
            PlayerXScore ++ ;
            PlayerOScore ++ ;
            scoreXDisplay.innerHTML = "Le score de X est de " + PlayerXScore + " points.";
            scoreODisplay.innerHTML = "Le score de O est de " + PlayerOScore + " points.";
        }
        else {
            if (CurrentPlayer=="X"){
                CurrentPlayer="O";
            } else {
                CurrentPlayer="X";
            }
            currentPlayerDisplay.innerHTML = "C'est au tour de " + CurrentPlayer + " de jouer";
        }
    }}
)))