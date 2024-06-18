document.addEventListener("DOMContentLoaded", () => {
    loadContent();

    // Event listeners for authentication buttons
    document.getElementById('login').addEventListener('click', showLoginForm);
    // document.getElementById('signup').addEventListener('click', showSignupForm);

    // Event listener for nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


function loadContent() {
    fetch('assets/movie.json')
        .then(response => response.json())
        .then(data => {
            const contentSection = document.querySelector('.content');
            contentSection.innerHTML = '';
            data.forEach(item => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                contentSection.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function showLoginForm() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}



