// Função para alternar a barra lateral
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("main-content");
    if (sidebar && content) {
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "0";
            content.style.marginRight = "0";
        }
        else {
            sidebar.style.width = "250px";
            content.style.marginRight = "250px";
        }
    }
}
// Adiciona um event listener para o formulário de newsletter
var newsletterForm = document.getElementById('newsletter-form');
newsletterForm === null || newsletterForm === void 0 ? void 0 : newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var form = e.target;
    var email = form.elements.namedItem('email');
    if (email) {
        document.getElementById('form-response').innerText = "Obrigado por se inscrever!";
    }
});
// Adiciona eventos de mouseover e mouseout para cada coluna
document.querySelectorAll('.collumn').forEach(function (collumn) {
    var columnElement = collumn;
    columnElement.addEventListener('mouseover', function () {
        columnElement.style.backgroundColor = '#f0f0f0';
    });
    columnElement.addEventListener('mouseout', function () {
        columnElement.style.backgroundColor = 'transparent';
    });
});
// Executa código após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var userNameElement = document.getElementById('user-name');
    userNameElement.innerText = name ? name : 'Leitor';
});
