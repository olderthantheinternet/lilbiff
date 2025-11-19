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
    const container = video.closest('.video-container');
    const cardDiv = video.closest('.adventure-card')?.querySelector('div');
    const adventureCard = video.closest('.adventure-card');
    
    // CRITICAL FIX: Hide overlays when video plays
    video.addEventListener('play', function() {
        // Pause all other videos when this one plays
        allVideos.forEach(otherVideo => {
            if (otherVideo !== video && !otherVideo.paused) {
                otherVideo.pause();
            }
        });
        
        // Hide overlays when this video plays
        if (cardDiv) {
            cardDiv.style.setProperty('--overlay-hidden', '1', 'important');
        }
        if (adventureCard) {
            adventureCard.classList.add('video-playing');
        }
    });
    
    video.addEventListener('pause', function() {
        if (adventureCard) {
            adventureCard.classList.remove('video-playing');
        }
    });
    
    // Hide overlays on hover
    video.addEventListener('mouseenter', function() {
        if (cardDiv) {
            cardDiv.style.setProperty('--overlay-hidden', '1', 'important');
        }
        if (adventureCard) {
            adventureCard.classList.add('video-hovered');
        }
    });
    
    video.addEventListener('mouseleave', function() {
        if (video.paused) {
            if (adventureCard) {
                adventureCard.classList.remove('video-hovered');
            }
        }
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
    
    // Prevent container or parent from going fullscreen
    if (container) {
        // Override container's fullscreen capability
        const originalRequestFullscreen = container.requestFullscreen || 
                                         container.webkitRequestFullscreen ||
                                         container.mozRequestFullScreen ||
                                         container.msRequestFullscreen;
        
        if (container.requestFullscreen) {
            container.requestFullscreen = function() {
                return video.requestFullscreen ? video.requestFullscreen() : Promise.reject();
            };
        }
        if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen = function() {
                return video.webkitRequestFullscreen ? video.webkitRequestFullscreen() : null;
            };
        }
        if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen = function() {
                return video.mozRequestFullScreen ? video.mozRequestFullScreen() : null;
            };
        }
        if (container.msRequestFullscreen) {
            container.msRequestFullscreen = function() {
                return video.msRequestFullscreen ? video.msRequestFullscreen() : null;
            };
        }
    }
    
    // Ensure video is fully visible in fullscreen and hide parent overlays
    function handleFullscreenChange() {
        const fullscreenElement = document.fullscreenElement || 
                                 document.webkitFullscreenElement ||
                                 document.mozFullScreenElement ||
                                 document.msFullscreenElement;
        
        const isFullscreen = fullscreenElement && (
                           fullscreenElement === this || 
                           fullscreenElement === container ||
                           fullscreenElement === cardDiv ||
                           fullscreenElement.contains(this) ||
                           fullscreenElement.contains(container) ||
                           fullscreenElement.contains(cardDiv)
        );
        
        if (isFullscreen) {
            // Force video styling - remove any darkening
            this.style.setProperty('opacity', '1', 'important');
            this.style.setProperty('filter', 'none', 'important');
            this.style.setProperty('background-color', '#000', 'important');
            this.style.setProperty('z-index', '999999', 'important');
            this.style.setProperty('mix-blend-mode', 'normal', 'important');
            this.style.setProperty('border-radius', '0', 'important'); // Remove rounded corners in fullscreen
            
            // Hide ALL parent overlays and backgrounds - comprehensive approach
            const allCardDivs = document.querySelectorAll('.adventure-card > div');
            allCardDivs.forEach(div => {
                div.style.setProperty('background', '#000', 'important');
                div.style.setProperty('background-image', 'none', 'important');
                div.style.setProperty('background-color', '#000', 'important');
                div.style.setProperty('transform', 'none', 'important'); // Remove transforms
                // Force hide the ::before pseudo-element by setting a CSS variable
                div.style.setProperty('--before-display', 'none', 'important');
            });
            
            // Remove transforms from adventure cards
            const allAdventureCards = document.querySelectorAll('.adventure-card');
            allAdventureCards.forEach(card => {
                card.style.setProperty('transform', 'none', 'important');
            });
            
            const allContainers = document.querySelectorAll('.video-container');
            allContainers.forEach(cont => {
                cont.style.setProperty('background', '#000', 'important');
                cont.style.setProperty('background-color', '#000', 'important');
                cont.style.setProperty('transform', 'none', 'important');
            });
            
            // Add class to body to hide all card overlays via CSS
            document.body.classList.add('video-fullscreen-active');
            
            // Also add inline style to body to ensure overlays are hidden
            document.body.style.setProperty('--fullscreen-active', '1', 'important');
            
        } else {
            // Remove the class when exiting fullscreen
            document.body.classList.remove('video-fullscreen-active');
            document.body.style.removeProperty('--fullscreen-active');
            
            // Reset video styles
            this.style.removeProperty('z-index');
            this.style.removeProperty('mix-blend-mode');
            this.style.removeProperty('border-radius');
            
            // Reset parent styles
            const allCardDivs = document.querySelectorAll('.adventure-card > div');
            allCardDivs.forEach(div => {
                div.style.removeProperty('background');
                div.style.removeProperty('background-image');
                div.style.removeProperty('background-color');
                div.style.removeProperty('--before-display');
            });
            
            const allContainers = document.querySelectorAll('.video-container');
            allContainers.forEach(cont => {
                cont.style.removeProperty('background');
                cont.style.removeProperty('background-color');
            });
        }
    }
    
    // Listen to document-level fullscreen changes
    function handleDocumentFullscreenChange() {
        const fullscreenElement = document.fullscreenElement || 
                                 document.webkitFullscreenElement ||
                                 document.mozFullScreenElement ||
                                 document.msFullscreenElement;
        
        if (fullscreenElement) {
            // Check if it's our video or contains our video
            if (fullscreenElement === video || fullscreenElement.contains(video)) {
                handleFullscreenChange.call(video);
            }
        } else {
            handleFullscreenChange.call(video);
        }
    }
    
    document.addEventListener('fullscreenchange', handleDocumentFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleDocumentFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleDocumentFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleDocumentFullscreenChange);
    
    // Also listen on video element
    video.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    video.addEventListener('mozfullscreenchange', handleFullscreenChange);
    video.addEventListener('MSFullscreenChange', handleFullscreenChange);
    video.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Intercept fullscreen button clicks on video controls - CRITICAL FIX
    // When user clicks native fullscreen button, ensure video element goes fullscreen, not parent
    video.addEventListener('webkitbeginfullscreen', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // Request fullscreen on video element itself
        if (this.webkitRequestFullscreen) {
            this.webkitRequestFullscreen();
        }
    }, true);
    
    // Intercept fullscreen requests on the video element
    const originalRequestFullscreen = video.requestFullscreen || video.webkitRequestFullscreen || video.mozRequestFullScreen || video.msRequestFullscreen;
    
    // Override any fullscreen requests to ensure video element goes fullscreen
    if (video.requestFullscreen) {
        const original = video.requestFullscreen.bind(video);
        video.requestFullscreen = function() {
            return original().then(() => {
                handleFullscreenChange.call(video);
            });
        };
    }
    
    // Monitor for fullscreen API calls and redirect to video element
    const observer = new MutationObserver(() => {
        const fullscreenElement = document.fullscreenElement || 
                                 document.webkitFullscreenElement ||
                                 document.mozFullScreenElement ||
                                 document.msFullscreenElement;
        
        if (fullscreenElement && fullscreenElement !== video && 
            (fullscreenElement === container || fullscreenElement === cardDiv || 
             fullscreenElement.contains(video))) {
            // Parent went fullscreen instead of video - exit and request on video
            const exitFullscreen = document.exitFullscreen || 
                                 document.webkitExitFullscreen ||
                                 document.mozCancelFullScreen ||
                                 document.msExitFullscreen;
            if (exitFullscreen) {
                exitFullscreen.call(document).then(() => {
                    setTimeout(() => {
                        if (video.requestFullscreen) {
                            video.requestFullscreen().catch(() => {});
                        } else if (video.webkitRequestFullscreen) {
                            video.webkitRequestFullscreen();
                        } else if (video.mozRequestFullScreen) {
                            video.mozRequestFullScreen();
                        } else if (video.msRequestFullscreen) {
                            video.msRequestFullscreen();
                        }
                    }, 100);
                }).catch(() => {});
            }
        }
    });
    
    observer.observe(document.body, { childList: false, subtree: false, attributes: true, attributeFilter: [] });
    
    // Also listen for when fullscreen is requested to ensure video element goes fullscreen
    video.addEventListener('dblclick', function(e) {
        // On double-click, request fullscreen on the video element itself
        if (this.requestFullscreen) {
            this.requestFullscreen().catch(err => console.log('Fullscreen error:', err));
        } else if (this.webkitRequestFullscreen) {
            this.webkitRequestFullscreen();
        } else if (this.mozRequestFullScreen) {
            this.mozRequestFullScreen();
        } else if (this.msRequestFullscreen) {
            this.msRequestFullscreen();
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

