    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Selecionando o ícone de hambúrguer e o menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const menu = document.querySelector('header nav ul');

// Adicionando evento de clique no ícone de hambúrguer
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});

// Função para verificar se a seção está visível na tela
function checkVisibility() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            section.classList.add('visible'); // Adiciona a classe visible quando a seção entra na tela
        } else {
            section.classList.remove('visible'); // Remove a classe quando a seção sair da tela
        }
    });
}

// Detecta o scroll e chama a função
window.addEventListener('scroll', checkVisibility);

// Chama a função logo ao carregar a página para seções que já estão visíveis
document.addEventListener('DOMContentLoaded', checkVisibility);
