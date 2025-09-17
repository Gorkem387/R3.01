const choix = ["pierre", "feuille", "ciseaux"];

document.getElementById('pierre').addEventListener('click', function() {
    joueurChoisit('pierre');
});
document.getElementById('feuille').addEventListener('click', function() {
    joueurChoisit('feuille');
});
document.getElementById('ciseaux').addEventListener('click', function() {
    joueurChoisit('ciseaux');
});

function joueurChoisit(choixJoueur) {

    const choixRobot = choix[Math.floor(Math.random()*choix.length)];

    let resultat = "";
    if (choixJoueur == choixRobot) {
        resultat = "egalite";
    } else if (
        (choixJoueur === "pierre" && choixRobot === "ciseaux") ||
        (choixJoueur === "ciseaux" && choixRobot === "feuille") ||
        (choixJoueur === "feuille" && choixRobot === "pierre")   
    ) {
        resultat = "jouer a gagné";
    } else {
        resultat = "robot a gagné";
    }

    document.getElementById('choixJoueur').textContent = choixJoueur;
    document.getElementById('choixRobot').textContent = choixRobot;
    document.getElementById('resultat').textContent = resultat;
}