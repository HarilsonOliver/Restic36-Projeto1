// Função para alternar a barra lateral
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
newsletterForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    if (email) {
        document.getElementById('form-response')!.innerText = "Obrigado por se inscrever!";
    }
});

// Adiciona eventos de mouseover e mouseout para cada coluna
document.querySelectorAll('.collumn').forEach((collumn) => {
    const columnElement = collumn as HTMLElement;
    columnElement.addEventListener('mouseover', () => {
        columnElement.style.backgroundColor = '#f0f0f0';
    });
    columnElement.addEventListener('mouseout', () => {
        columnElement.style.backgroundColor = 'transparent';
    });
});

// Executa código após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const userNameElement = document.getElementById('user-name') as HTMLElement;
    userNameElement.innerText = name ? name : 'Leitor';
});
