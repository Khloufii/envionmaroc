document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
    // Navbar mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu quand un lien est cliqué
    navLinkItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Mettre à jour le lien actif
            navLinkItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Changement de la navbar au scroll
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo h1');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
            logo.style.fontSize = '24px';
        } else {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            header.style.padding = '20px 0';
            logo.style.fontSize = '28px';
        }
    });
    
    // Modal (reste identique à la version précédente)
    const modal = document.getElementById('offreModal');
    const modalTitle = document.getElementById('modal-title');
    const modalImages = document.getElementById('modal-images');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');
    
    // Offres data (identique à la version précédente)
    
    document.querySelectorAll('.btn-offre').forEach(btn => {
        btn.addEventListener('click', function() {
            const offreId = this.closest('.offre-card').getAttribute('data-offre');
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
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animation au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.offre-card, .section-title, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser les éléments cachés
    document.querySelectorAll('.offre-card, .section-title, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une première fois au chargement
});
    
    // Modal functionality
    const modal = document.getElementById('offreModal');
    const modalTitle = document.getElementById('modal-title');
    const modalImages = document.getElementById('modal-images');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');
    
    // Offres data
    const offresData = {
        1: {
            title: "Offre 1 - Viabilisation complète de A à Z",
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            description: `
                <h3>Viabilisation complète de votre villa de luxe</h3>
                <p>Notre offre complète prend en charge l'ensemble du processus de création de votre villa de luxe :</p>
                <ul>
                    <li>Choix du terrain idéal selon vos critères</li>
                    <li>Gestion complète des autorisations et dossier administratif</li>
                    <li>Étude géotechnique approfondie du terrain</li>
                    <li>Conception des plans d'architecte et de BET sur mesure</li>
                    <li>Construction avec méthodes modernes et innovantes</li>
                    <li>Réalisation complète de A à Z</li>
                    <li>Gros œuvre et second œuvre de qualité</li>
                    <li>Finition haut de gamme et moderne</li>
                    <li>Dépôt de permis d'habitation</li>
                </ul>
                <p>Cette offre est idéale pour les clients souhaitant une prise en charge totale de leur projet.</p>
            `
        },
        2: {
            title: "Offre 2 - Construction clé en main",
            images: [
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            description: `
                <h3>Construction clé en main de votre villa</h3>
                <p>Pour les clients disposant déjà d'un terrain, nous proposons une construction complète :</p>
                <ul>
                    <li>Gestion des autorisations et dossier administratif</li>
                    <li>Conception des plans d'architecte et de BET personnalisés</li>
                    <li>Construction avec techniques modernes et innovantes</li>
                    <li>Réalisation intégrale de A à Z</li>
                    <li>Gros œuvre et second œuvre de qualité</li>
                    <li>Finition haut de gamme et contemporaine</li>
                    <li>Dépôt de permis d'habitation</li>
                </ul>
                <p>Cette offre vous garantit une villa prête à habiter, sans aucun souci de gestion.</p>
            `
        },
        3: {
            title: "Offre 3 - Construction de villa",
            images: [
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            description: `
                <h3>Construction de votre villa sur mesure</h3>
                <p>Pour les projets où les aspects administratifs sont déjà gérés :</p>
                <ul>
                    <li>Conception des plans d'architecte et de BET adaptés à vos besoins</li>
                    <li>Construction avec méthodes modernes et performantes</li>
                    <li>Réalisation complète de A à Z</li>
                    <li>Gros œuvre et second œuvre de qualité</li>
                    <li>Finition contemporaine et haut de gamme</li>
                </ul>
                <p>Cette offre est parfaite pour les clients ayant déjà obtenu toutes les autorisations nécessaires.</p>
            `
        },
        4: {
            title: "Offre 4 - Agencement sur mesure",
            images: [
                "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            description: `
                <h3>Agencement et aménagement de luxe</h3>
                <p>Pour donner vie à vos espaces intérieurs :</p>
                <ul>
                    <li>Agencement complet de A à Z</li>
                    <li>Aménagement intérieur sur mesure</li>
                    <li>Sélection de matériaux haut de gamme</li>
                    <li>Décoration d'intérieur personnalisée</li>
                    <li>Maîtrise d'œuvre professionnelle</li>
                    <li>Animations 3D réalistes pour visualiser le résultat</li>
                </ul>
                <p>Cette offre transforme vos espaces en véritables œuvres d'art fonctionnelles.</p>
            `
        }
    };
    
    // Open modal when offre card is clicked
    document.querySelectorAll('.btn-offre').forEach(btn => {
        btn.addEventListener('click', function() {
            const offreId = this.closest('.offre-card').getAttribute('data-offre');
            const offre = offresData[offreId];
            
            modalTitle.textContent = offre.title;
            
            // Clear previous images
            modalImages.innerHTML = '';
            
            // Add new images
            offre.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = offre.title;
                modalImages.appendChild(img);
            });
            
            // Set description
            modalDescription.innerHTML = offre.description;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For this example, we'll just show an alert
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            this.reset();
        });
    }
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        }
        
        if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
});