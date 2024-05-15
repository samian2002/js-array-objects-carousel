
const images = [
    {
        image: '../img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: '../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: '../img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: '../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
    },
    {
        image: '../img/05.webp',
        title: 'Marvel\'s Avengers',
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentIndex = 0;

const carouselSlide = document.querySelector('.carousel-slide');

function renderCarousel() {
    const slide = images[currentIndex];
    carouselSlide.innerHTML = `
        <img src="${slide.image}" alt="${slide.title}">
        <div class="carousel-caption">
            <h2>${slide.title}</h2>
            <p>${slide.text}</p>
        </div>
    `;
}

function moveRight() {
    currentIndex = (currentIndex + 1) % images.length;
    renderCarousel();
}

function moveLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderCarousel();
}

renderCarousel();






/*
// Array contenente i dati delle immagini, titoli e testi per il carosello.
const images = [
    {
        image: '../img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: '../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: '../img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: '../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
    },
    {
        image: '../img/05.webp',
        title: 'Marvel\'s Avengers',
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Funzione per creare e aggiungere le slide.
function createSlides() {
    const carouselSlide = document.querySelector('.carousel-slide'); // Seleziona il contenitore 
    images.forEach((img, index) => {
        const slide = document.createElement('div'); // Crea un nuovo div 
        slide.className = 'slide'; // Assegna la classe 'slide' al div
        slide.innerHTML = `
            <img src="${img.image}" alt="${img.title}">
            <div class="carousel-caption">
                <h2>${img.title}</h2>
                <p>${img.text}</p>
            </div>
        `; // Imposta il contenuto interno del div con l'immagine, titolo e testo
        if (index === 0) slide.classList.add('active'); // Aggiunge la classe 'active' al primo elemento
        carouselSlide.appendChild(slide); 
    });
}

// Destra
function moveRight() {
    const current = document.querySelector('.slide.active'); // Trova la slide corrente
    const next = current.nextElementSibling || document.querySelector('.carousel-slide').firstElementChild; // Seleziona la prossima slide, o torna alla prima se attualmente è l'ultima
    current.classList.remove('active'); // Rimuove la classe 'active' dalla slide corrente
    next.classList.add('active'); // Assegna la classe 'active' alla prossima slide
}

// Sinistra
function moveLeft() {
    const current = document.querySelector('.slide.active');
    const prev = current.previousElementSibling || document.querySelector('.carousel-slide').lastElementChild;
}

createSlides(); // Chiama la funzione all'avvio
*/