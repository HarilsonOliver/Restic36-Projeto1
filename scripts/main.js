// Adicionando tipagem
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
        var formResponse = document.getElementById('form-response');
        if (formResponse) {
            formResponse.innerText = "Obrigado por se inscrever!";
        }
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
    if (userNameElement) {
        userNameElement.innerText = name ? name : 'Leitor';
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var url = "http://api.mediastack.com/v1/news?access_key=dcf3aa1968e21d5f06ab3b316380965a&languages=pt&countries=br&limit=5";
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log('Data from API:', data);
        var newsContainer = document.getElementById('news-container');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            data.data.forEach(function (article) {
                var newsItem = document.createElement('div');
                newsItem.classList.add('news-item'); // Adiciona a classe de estilo
                newsItem.innerHTML = "\n                        <h2>".concat(article.title, "</h2>\n                        <p>").concat(article.description, "</p>\n                    ");
                newsContainer.appendChild(newsItem);
            });
        }
    })
        .catch(function (error) {
        console.error('Erro ao buscar as notícias:', error);
    });
});
