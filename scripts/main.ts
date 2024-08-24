// Adicionando tipagem
function toggleSidebar(): void {
    const sidebar = document.getElementById("sidebar") as HTMLElement | null;
    const content = document.getElementById("main-content") as HTMLElement | null;

    if (sidebar && content) {
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "0";
            content.style.marginRight = "0";
        } else {
            sidebar.style.width = "250px";
            content.style.marginRight = "250px";
        }
    }
}

// Adiciona um event listener para o formulário de newsletter
const newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement | null;
newsletterForm?.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.elements.namedItem('email') as HTMLInputElement | null;
    if (email) {
        const formResponse = document.getElementById('form-response') as HTMLElement | null;
        if (formResponse) {
            formResponse.innerText = "Obrigado por se inscrever!";
        }
    }
});

// Adiciona eventos de mouseover e mouseout para cada coluna
document.querySelectorAll('.collumn').forEach(function (collumn) {
    const columnElement = collumn as HTMLElement;
    columnElement.addEventListener('mouseover', function () {
        columnElement.style.backgroundColor = '#f0f0f0';
    });
    columnElement.addEventListener('mouseout', function () {
        columnElement.style.backgroundColor = 'transparent';
    });
});

// Executa código após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const userNameElement = document.getElementById('user-name') as HTMLElement | null;
    if (userNameElement) {
        userNameElement.innerText = name ? name : 'Leitor';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const url = `http://api.mediastack.com/v1/news?access_key=dcf3aa1968e21d5f06ab3b316380965a&languages=pt&countries=br&limit=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Data from API:', data);
            const newsContainer = document.getElementById('news-container') as HTMLElement | null;
            if (newsContainer) {
                newsContainer.innerHTML = ''; 
                data.data.forEach((article: { title: string; description: string; }) => {
                    const newsItem = document.createElement('div');
                    newsItem.classList.add('news-item'); // Adiciona a classe de estilo
                    newsItem.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                    `;
                    newsContainer.appendChild(newsItem);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao buscar as notícias:', error);
        });
});
