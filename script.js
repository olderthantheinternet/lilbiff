// Lil Biff Website JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.textContent = '☰';
            }
        }
    });
});

// Filter functionality removed since we only have video cards now
// All adventure cards are videos, so no filtering needed

// Easter Egg: Click on Lil Biff Image (bowtie area) for Confetti
const bowtie = document.getElementById('bowtie-easter-egg');
const lilBiffHero = document.getElementById('lil-biff-hero');
const confettiContainer = document.getElementById('confetti-container');

if ((bowtie || lilBiffHero) && confettiContainer) {
    let confettiCount = 0;
    const clickTarget = bowtie || lilBiffHero;
    
    clickTarget.addEventListener('click', function(e) {
        // Prevent multiple rapid clicks
        if (confettiCount > 0) return;
        confettiCount++;
        
        // Create confetti explosion
        const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#2C3E50', '#FFF8E7'];
        const confettiAmount = 50;
        
        for (let i = 0; i < confettiAmount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
        
        // Show secret message
        const message = document.createElement('div');
        message.textContent = "You're my favorite audience! 🎭";
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'linear-gradient(135deg, #FFD700, #FF6B6B)';
        message.style.color = '#2C3E50';
        message.style.padding = '2rem 3rem';
        message.style.borderRadius = '20px';
        message.style.fontSize = '2rem';
        message.style.fontWeight = 'bold';
        message.style.zIndex = '10000';
        message.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
        message.style.animation = 'fadeIn 0.5s';
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'fadeOut 0.5s';
            setTimeout(() => message.remove(), 500);
            confettiCount = 0;
        }, 3000);
    });
}

// Newsletter Form Handling
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const puppetName = document.getElementById('puppet-name').value;
        
        // Here you would typically send this to your backend/Mailchimp
        // For now, we'll just show a success message
        alert(`Thanks for joining, ${puppetName || 'friend'}! 🎉\n\nWe'll send updates to ${email}\n\n(Note: This is a demo. Connect to Mailchimp/backend for real functionality.)`);
        
        // Reset form
        newsletterForm.reset();
    });
}

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    backToTop.style.display = 'none';
                }
            }, 300);
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Parallax Effect for Yarn Balls (follow mouse)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const yarnBalls = document.querySelectorAll('.yarn-ball');
    yarnBalls.forEach((ball, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        
        ball.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add fadeIn/fadeOut animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Lazy Load Images (if you add real images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Video Player Management - Pause other videos when one plays
const allVideos = document.querySelectorAll('video');

allVideos.forEach(video => {
    video.addEventListener('play', function() {
        // Pause all other videos when this one plays
        allVideos.forEach(otherVideo => {
            if (otherVideo !== video && !otherVideo.paused) {
                otherVideo.pause();
            }
        });
    });
    
    // Add loading state handling
    video.addEventListener('loadstart', function() {
        // Only set opacity if not in fullscreen
        if (!document.fullscreenElement && !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && !document.msFullscreenElement) {
            this.style.opacity = '0.7';
        }
    });
    
    video.addEventListener('canplay', function() {
        this.style.opacity = '1';
    });
    
    // Ensure video is fully visible in fullscreen
    video.addEventListener('webkitfullscreenchange', function() {
        if (document.webkitFullscreenElement === this) {
            this.style.opacity = '1';
            this.style.filter = 'none';
        }
    });
    
    video.addEventListener('mozfullscreenchange', function() {
        if (document.mozFullScreenElement === this) {
            this.style.opacity = '1';
            this.style.filter = 'none';
        }
    });
    
    video.addEventListener('MSFullscreenChange', function() {
        if (document.msFullscreenElement === this) {
            this.style.opacity = '1';
            this.style.filter = 'none';
        }
    });
    
    video.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement === this) {
            this.style.opacity = '1';
            this.style.filter = 'none';
        }
    });
    
    // Handle video errors gracefully
    video.addEventListener('error', function() {
        console.error('Video loading error:', this.src);
        const container = this.closest('.video-container');
        if (container) {
            container.innerHTML = '<div class="flex items-center justify-center h-full text-white p-4 text-center">Video unavailable. Please try again later.</div>';
        }
    });
});

// Add puppet string effect to hero section
const heroSection = document.getElementById('hero');
if (heroSection) {
    const lilBiffHero = document.getElementById('lil-biff-hero');
    if (lilBiffHero) {
        const string = document.createElement('div');
        string.className = 'puppet-string';
        lilBiffHero.style.position = 'relative';
        lilBiffHero.appendChild(string);
    }
}

// Console Easter Egg
console.log('%c🎭 Hey there, curious human!', 'font-size: 20px; color: #FF6B6B; font-weight: bold;');
console.log('%cYou found the secret console message!', 'font-size: 14px; color: #4ECDC4;');
console.log('%cDid you know? Click my bowtie for a surprise! 👔', 'font-size: 12px; color: #FFD700;');

