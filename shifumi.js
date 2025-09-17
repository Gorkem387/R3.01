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

function joueurChoisit(choix) {

    const choixRobot = choix[Math.floor(Math.random()*choix.length)];

    let resultat = "";
    if (choix == choixRobot) {
        resultat = "egalite";
    } else if (
        (choix === "pierre" && choixRobot === "ciseaux") ||
        (choix === "ciseaux" && choixRobot === "feuille") ||
        (choix === "feuille" && choixRobot === "pierre")   
    ) {
        resultat = "jouer a gagné";
    } else {
        resultat = "robot a gagné";
    }

    document.getElementById('choix').textContent = choix;
    document.getElementById('choixRobot').textContent = choixRobot;
    document.getElementById('resultat').textContent = resultat;
}