// Fonction de conversion décimal -> binaire
function convertToBinary() {
    const input = document.getElementById('decimalInput');
    const output = document.getElementById('binaryResult');
    const value = input.value.trim();
    // Vérifie si la valeur est un nombre strictement (pas de lettres, etc)
    if (!/^\d+$/.test(value)) {
        output.textContent = '';
        return;
    }
    output.textContent = parseInt(value, 10).toString(2);
}

// Attacher l'événement au bouton (inline dans le HTML, donc rien à faire ici)
