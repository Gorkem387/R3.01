const choix = [pierre, feuille, ciseaux];

document.getElementById('pierre').addEventListener('click', function() {
    joueurChoisit('pierre');
});
document.getElementById('papier').addEventListener('click', function() {
    joueurChoisit('feuille');
});
document.getElementById('ciseaux').addEventListener('click', function() {
    joueurChoisit('ciseaux');
});

function joueurChoisit(choix) {
    document.getElementById('choix').textContent = choix;
}