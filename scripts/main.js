function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("main-content");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginRight= "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginRight = "250px";
    }
}

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('form-response').innerText = `Obrigado por se inscrever, ${email}!`;
});



document.querySelectorAll('.collumn').forEach(collumn => {
    collumn.addEventListener('mouseover', () => {
        collumn.style.backgroundColor = '#f0f0f0';
    });
    collumn.addEventListener('mouseout', () => {
        collumn.style.backgroundColor = 'transparent';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    document.getElementById('user-name').innerText = name ? name : 'Leitor';
});
