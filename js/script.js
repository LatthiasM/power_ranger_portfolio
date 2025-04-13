const cards = document.querySelectorAll('.card');

const backgroundColors = {
    'rose': "radial-gradient(circle, rgba(234,136,155,1) 7%, rgba(215,108,145,1) 26%, rgba(209,103,142,1) 49%, rgba(90,29,72,1) 100%)",
    'beige': "radial-gradient(circle, rgba(229,222,178,1) 7%, rgba(208,195,143,1) 34%, rgba(194,178,118,1) 61%, rgba(134,114,80,1) 100%)",
    'rouge': "radial-gradient(circle, rgba(244,183,110,1) 7%, rgba(238,116,93,1) 34%, rgba(194,83,72,1) 61%, rgba(142,54,51,1) 100%)",
    'vert': "radial-gradient(circle, rgba(194,240,178,1) 7%, rgba(97,190,135,1) 34%, rgba(47,116,88,1) 61%, rgba(18,57,56,1) 100%)"
};

const defaultBackground = "linear-gradient(90deg, rgba(237,230,178,1) 11%, rgba(215,114,146,1) 27%, rgba(225,116,116,1) 44%, rgba(234,136,96,1) 61%, rgba(188,242,182,1) 100%)";

document.body.style.transition = "background 3s ease-in-out";

cards.forEach(card => {
    card.addEventListener('mouseenter', (event) => {
        let img = card.querySelector('img');
        for (const color in backgroundColors) {
            if (img.src.includes(color)) {
                document.body.style.background = backgroundColors[color];
                break;
            }
        }
    });

    card.addEventListener('mouseleave', () => {
        document.body.style.background = defaultBackground;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("dynamic-title");
    const sloganElement = document.getElementById("dynamic-slogan");

    const titleText = "Bienvenue sur notre Portfolio";
    const sloganText = "Unir nos forces, coder l'avenir !"; 

    let titleIndex = 0;
    let sloganIndex = 0;

    function typeTitle() {
        if (titleIndex < titleText.length) {
            const span = document.createElement("span");
            span.textContent = titleText.charAt(titleIndex);
            span.classList.add("color-animation"); // Ajoute la classe CSS
            titleElement.appendChild(span);

            titleIndex++;
            setTimeout(typeTitle, 60);
        } else {
            setTimeout(typeSlogan, 60);
        }
    }

    function typeSlogan() {
        if (sloganIndex < sloganText.length) {
            const span = document.createElement("span");
            span.textContent = sloganText.charAt(sloganIndex);
            span.classList.add("color-animation"); // Ajoute la classe CSS
            sloganElement.appendChild(span);

            sloganIndex++;
            setTimeout(typeSlogan, 50);
        }
    }

    typeTitle();

     // --- ScrollReveal ---
  // Init de la librairie
  window.sr = ScrollReveal({
    reset: false,        // true = l'anim se refait à chaque scroll
    distance: '60px',
    duration: 1200,      // Durée en ms
    easing: 'ease-in-out',
  });

  // Sélectionne les éléments à révéler
  sr.reveal('.reveal-section', { origin: 'bottom', interval: 200 });

   // Initialisation de ScrollReveal
   ScrollReveal({
    distance: '60px',
    duration: 1200,
    easing: 'ease-in-out',
    reset: false // false = ne se réactive pas à chaque scroll
});

// Appliquer l'effet aux éléments concernés
ScrollReveal().reveal('.reveal-section', { origin: 'bottom', interval: 200 });

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


// Vérifier si un mode est déjà stocké
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Ajouter l'événement de clic pour changer le mode
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Mettre à jour le texte du bouton
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark"); // Stocker en local
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light"); // Stocker en local
    }
    updateImages();
});

function updateImages() {
    document.querySelectorAll(".gallery .card img").forEach(img => {
        const lightSrc = img.getAttribute("data-light");
        const darkSrc = img.getAttribute("data-dark");
        img.src = body.classList.contains("dark-mode") ? darkSrc : lightSrc;
    });
}

document.querySelectorAll(".gallery .card img").forEach(img => {
    if (!img.hasAttribute("data-light")) {
        img.setAttribute("data-light", img.src);
        img.setAttribute("data-dark", img.src.replace(".jpg", "-dark.jpg"));
    }
});

updateImages();

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
        }
    },
    retina_detect: true
});

});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    if (cards.length > 0) {
        cards.forEach((card) => {
            card.addEventListener("mousemove", (event) => {
                let cardRect = card.getBoundingClientRect();
                let centerX = cardRect.left + cardRect.width / 3;
                let centerY = cardRect.top + cardRect.height / 3;
                let offsetX = (event.clientX - centerX) / 6;
                let offsetY = (event.clientY - centerY) / 6;

                // Combiner scale et rotation
                card.style.transform = `scale(1.15) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "scale(1) rotateY(0deg) rotateX(0deg)";
            });
        });
    } else {
        console.warn("Aucune carte trouvée pour l'effet 3D.");
    }
});






