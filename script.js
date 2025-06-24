// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Modal des offres
const offreCards = document.querySelectorAll('.offre-card');
const modal = document.getElementById('offreModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImages = document.getElementById('modal-images');
const modalDescription = document.getElementById('modal-description');

// Données des offres
const offresData = {
    1: {
        title: "Viabilisation de A à Z",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        ],
        description: `
            <p>Notre offre complète de viabilisation prend en charge l'ensemble du processus pour rendre votre terrain constructible et prêt à accueillir votre villa de luxe.</p>
            <h4>Ce package comprend :</h4>
            <ul>
                <li>Analyse et sélection du terrain optimal selon vos critères</li>
                <li>Gestion complète des démarches administratives (permis de construire, autorisations diverses)</li>
                <li>Étude géotechnique approfondie du sol</li>
                <li>Raccordement aux différents réseaux (électricité, eau, assainissement)</li>
                <li>Coordination avec les différents intervenants et corps de métier</li>
            </ul>
            <p>Nous nous chargeons de toutes les formalités pour que vous puissiez vous concentrer sur la conception de votre future villa.</p>
        `
    },
    2: {
        title: "Construction Clé en Main",
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        ],
        description: `
            <p>Une solution intégrale pour votre projet de villa haut de gamme, de la conception à la livraison des clés.</p>
            <h4>Notre processus clé en main :</h4>
            <ul>
                <li>Élaboration des plans architecturaux sur mesure avec notre équipe</li>
                <li>Gestion de l'ensemble des démarches administratives et autorisations</li>
                <li>Construction selon les normes antisismiques et les standards de luxe</li>
                <li>Finition premium avec des matériaux de haute qualité</li>
                <li>Contrôle qualité à chaque étape du chantier</li>
                <li>Livraison clé en main avec garantie décennale</li>
            </ul>
            <p>Un seul interlocuteur pour un projet sans souci et conforme à vos attentes.</p>
        `
    },
    3: {
        title: "Construction de Villa",
        images: [
            "images/pexels-heyho-6284237.jpg",
            "images/pexels-heyho-6284237.jpg",
            "images/pexels-heyho-6284237.jpg"
        ],
        description: `
            <p>Un accompagnement expert pour la construction de votre villa, avec des méthodes modernes et des matériaux nobles.</p>
            <h4>Nos atouts pour votre projet :</h4>
            <ul>
                <li>Conception architecturale sur mesure adaptée à votre terrain</li>
                <li>Techniques de construction innovantes pour une meilleure performance énergétique</li>
                <li>Maîtrise parfaite du gros œuvre et du second œuvre</li>
                <li>Utilisation de matériaux haut de gamme (marbre, bois nobles, pierre naturelle)</li>
                <li>Respect strict des délais et du budget convenu</li>
            </ul>
            <p>Notre expertise garantit une construction solide, esthétique et durable.</p>
        `
    },
    4: {
        title: "Agencement de Luxe",
        images: [
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        ],
        description: `
            <p>Un intérieur d'exception conçu et réalisé par nos designers et artisans spécialisés.</p>
            <h4>Notre savoir-faire en agencement :</h4>
            <ul>
                <li>Étude et conception d'espaces sur mesure avec visualisation 3D</li>
                <li>Sélection de matériaux premium (marbre, essences rares, métaux nobles)</li>
                <li>Réalisation de cuisines et dressing haut de gamme</li>
                <li>Menuiserie intérieure et extérieure sur mesure</li>
                <li>Éclairage design et intégration domotique</li>
                <li>Sélection de mobiliers et objets d'art</li>
            </ul>
            <p>Un intérieur unique qui reflète votre personnalité et votre art de vivre.</p>
        `
    }
};

// Ouvrir la modal
offreCards.forEach(card => {
    card.addEventListener('click', () => {
        const offreId = card.getAttribute('data-offre');
        const offre = offresData[offreId];
        
        modalTitle.textContent = offre.title;
        
        modalImages.innerHTML = '';
        offre.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = offre.title;
            modalImages.appendChild(img);
        });
        
        modalDescription.innerHTML = offre.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fermer la modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animation au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Animation des sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialisation des animations
