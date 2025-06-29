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

document.querySelectorAll('.btn-realisation').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.realisation-card');
        const title = card.querySelector('h3').textContent;
        
        // Vous pouvez personnaliser ce comportement :
        // 1. Ouvrir une modal avec plus de détails
        // 2. Rediriger vers une page dédiée
        // 3. Afficher un carrousel d'images
        
        // Exemple avec une alerte (à remplacer par votre logique)
        alert(`Détails de la réalisation : ${title}\nCette fonctionnalité peut être connectée à une base de données ou une page dédiée.`);
    });
});


// Filtrage des services
const serviceOptions = document.querySelectorAll('.service-option');
const offreCards = document.querySelectorAll('.offre-card');
const realisationCards = document.querySelectorAll('.realisation-card');

function filterCards(serviceType) {
    // Animation de transition
    document.querySelector('.offres-grid').style.opacity = '0.5';
    document.querySelector('.realisations-grid').style.opacity = '0.5';
    
    setTimeout(() => {
        // Filtre les offres
        offreCards.forEach(card => {
            if (serviceType === 'all' || card.getAttribute('data-service-type') === serviceType) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Filtre les réalisations
        realisationCards.forEach(card => {
            if (serviceType === 'all' || card.getAttribute('data-service-type') === serviceType) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        document.querySelector('.offres-grid').style.opacity = '1';
        document.querySelector('.realisations-grid').style.opacity = '1';
    }, 300);
}

serviceOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Active l'option sélectionnée
        serviceOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        const serviceType = option.getAttribute('data-service');
        filterCards(serviceType);
        
        // Scroll doux vers la section
        document.querySelector('#offres').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Données des offres (complète pour les deux types)
const offresData = {
    // Offres Villas
    1: {
        title: "Viabilisation de A à Z",
        images: [
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
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
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "images/pexels-heyho-6957083.jpg"
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
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "images/pexels-heyho-6284237.jpg",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
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
    },
    
    // Offres Industrielles
    5: {
        title: "Construction d'Usine",
        images: [
            "images/OIP.webp",
            "images/OIP (1).webp",
            "images/OIP (2).webp"
        ],
        description: `
            <p>Solutions clés en main pour vos projets industriels avec une expertise reconnue dans le secteur.</p>
            <h4>Nos services pour les usines :</h4>
            <ul>
                <li>Conception et construction d'usines sur mesure</li>
                <li>Bâtiments industriels modulaires et extensibles</li>
                <li>Installations conformes aux normes internationales</li>
                <li>Systèmes de ventilation et sécurité intégrés</li>
                <li>Optimisation des flux de production</li>
                <li>Solutions énergétiques performantes</li>
            </ul>
            <p>Nous concevons des espaces industriels fonctionnels, sûrs et adaptés à votre activité.</p>
        `
    },
    6: {
        title: "Entrepôts Logistiques",
        images: [
            "images/R (1).jpeg",
            "images/R (2).jpeg",
            "images/schema-entrepot-1024x672.jpg"
        ],
        description: `
            <p>Des solutions logistiques modernes pour répondre aux exigences de la supply chain actuelle.</p>
            <h4>Nos atouts logistiques :</h4>
            <ul>
                <li>Entrepôts de 500 à 50 000 m² modulables</li>
                <li>Plates-formes logistiques multi-températures</li>
                <li>Systèmes de stockage haute densité</li>
                <li>Quais de chargement optimisés</li>
                <li>Gestion des flux et automatisation</li>
                <li>Normes de sécurité renforcées</li>
            </ul>
            <p>Nous concevons des espaces logistiques qui améliorent votre productivité et réduisent vos coûts.</p>
        `
    },
    7: {
        title: "Bâtiments Commerciaux",
        images: [
            "images/R (3).jpeg",
            "images/OIP (3).webp",
            "images/OIP (4).webp"
        ],
        description: `
            <p>Des espaces commerciaux fonctionnels et esthétiques pour valoriser votre enseigne.</p>
            <h4>Nos solutions commerciales :</h4>
            <ul>
                <li>Centres commerciaux et galeries marchandes</li>
                <li>Showrooms et espaces d'exposition</li>
                <li>Bâtiments administratifs et sièges sociaux</li>
                <li>Restaurants et espaces de restauration</li>
                <li>Design intérieur attractif</li>
                <li>Accessibilité PMR optimale</li>
            </ul>
            <p>Nous créons des espaces commerciaux qui améliorent l'expérience client et valorisent votre image.</p>
        `
    },
    8: {
        title: "Chantiers Navals",
        images: [
            "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        ],
        description: `
            <p>Expertise en construction navale et infrastructures portuaires.</p>
            <h4>Nos réalisations navales :</h4>
            <ul>
                <li>Hangars de construction et maintenance navale</li>
                <li>Ateliers de réparation spécialisés</li>
                <li>Infrastructures portuaires lourdes</li>
                <li>Bassins de radoub et cales sèches</li>
                <li>Solutions anti-corrosion marine</li>
                <li>Équipements de levage lourd</li>
            </ul>
            <p>Nous maîtrisons les spécificités techniques des constructions navales et portuaires.</p>
        `
    }
};

// Gestion de la modal
const modal = document.getElementById('offreModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImages = document.getElementById('modal-images');
const modalDescription = document.getElementById('modal-description');

function openModal(offreId) {
    const offre = offresData[offreId];
    
    if (!offre) return;
    
    modalTitle.textContent = offre.title;
    modalImages.innerHTML = '';
    
    offre.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = offre.title;
        img.loading = 'lazy';
        modalImages.appendChild(img);
    });
    
    modalDescription.innerHTML = offre.description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Événements
document.querySelectorAll('.btn-offre').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.offre-card');
        const offreId = card.getAttribute('data-offre');
        openModal(offreId);
    });
});

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => e.target === modal && closeModal());

// Animation au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Animation des sections
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Animation initiale
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-content').style.transform = 'translateY(0)';
    }, 300);
    
    // Cache les offres industrielles par défaut
    filterCards('villas');
    
    // Animation des cartes
    document.querySelectorAll('.offre-card, .realisation-card').forEach(card => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
});     