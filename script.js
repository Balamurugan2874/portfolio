document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Scroll reveal animation
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('reveal');
            }
        });
    });

    // Typing effect for both hero h1 elements
    const heroHeadings = document.querySelectorAll('.hero h1');
    const originalTexts = Array.from(heroHeadings).map(h => h.textContent);
    heroHeadings.forEach(h => h.textContent = '');
    let headingIndex = 0;
    let charIndex = 0;

    function typeWriterMulti() {
        if (headingIndex < heroHeadings.length) {
            if (charIndex < originalTexts[headingIndex].length) {
                heroHeadings[headingIndex].textContent += originalTexts[headingIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriterMulti, 200);
            } else {
                headingIndex++;
                charIndex = 0;
                setTimeout(typeWriterMulti, 400); // Pause before next heading
            }
        }
    }
    typeWriterMulti();

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${(x - rect.width/2)/20}deg)`;
            card.style.transition = 'transform 0.1s';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            card.style.transition = 'transform 0.5s';
        });
    });

    // Skills animation
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.color = '#3498db';
            item.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.color = '';
        });
    });

    // Circuit animation in hero section
    const createCircuitAnimation = () => {
        const circuit = document.querySelector('.circuit-animation');
        circuit.innerHTML = '';
        
        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.left = `${Math.random() * 100}%`;
            line.style.width = `${Math.random() * 50 + 20}px`;
            line.style.animationDelay = `${Math.random() * 2}s`;
            circuit.appendChild(line);
        }
    };

    createCircuitAnimation();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animate tech stack icons
    const techIcons = document.querySelectorAll('.tech-icons i');
    techIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.classList.add('bounce-in');
    });

    // Animate skill categories on scroll
    const skillCategories = document.querySelectorAll('.skill-category');
    const animateSkills = () => {
        skillCategories.forEach((category, index) => {
            category.style.animationDelay = `${index * 0.2}s`;
            category.classList.add('slide-up');
        });
    };

    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('pulse');
        });
        link.addEventListener('animationend', () => {
            link.classList.remove('pulse');
        });
    });

    // Add dynamic background images to sections
    const addEngineeringBackgrounds = () => {
        const heroSection = document.querySelector('.hero');
        heroSection.style.backgroundImage = 'linear-gradient(rgba(44, 62, 80, 0.9), rgba(52, 152, 219, 0.9)), url("images/circuit-board.jpg")';
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';

        const aboutSection = document.querySelector('.about');
        aboutSection.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("images/electronics-workspace.jpg")';
        aboutSection.style.backgroundSize = 'cover';
    };

    addEngineeringBackgrounds();

    // Update project cards with real images
    const updateProjectImages = () => {
        const projectImages = {
            'CNG GAS DETECTION': 'images/CNG-gas.jpg',
            'FPGA PROJECT': 'images/FPGA.jpg'
        };

        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent;
            const img = card.querySelector('img');
            if (projectImages[title]) {
                img.src = projectImages[title];
            }
        });
    };

    updateProjectImages();
});

// Add new animations to style
const newAnimations = `
    .bounce-in {
        opacity: 0;
        animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }

    @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); opacity: 0.8; }
        70% { transform: scale(0.9); opacity: 0.9; }
        100% { transform: scale(1); opacity: 1; }
    }

    .slide-up {
        opacity: 0;
        animation: slideUp 0.6s ease forwards;
    }

    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .pulse {
        animation: pulse 0.5s ease-in-out;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }

    .tech-icons i {
        opacity: 0;
    }

    .navbar {
        transition: all 0.3s ease;
    }
`;

// Add this before using style.textContent
const style = document.createElement('style');
document.head.appendChild(style);

// Now you can use style.textContent as before
style.textContent = style.textContent + newAnimations;

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Change icon
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Optional: Remember theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.remove('fa-moon');
    themeToggle.querySelector('i').classList.add('fa-sun');
}
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});