// Gestionnaire d'événement pour le bouton
const btn = document.getElementById('myButton');
if (btn) {
    btn.addEventListener('click', function() {
        let msg = document.getElementById('message');
        if (!msg) {
            msg = document.createElement('p');
            msg.id = 'message';
            btn.insertAdjacentElement('afterend', msg);
        }
        msg.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    });
}
