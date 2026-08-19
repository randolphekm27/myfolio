import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Load Animations
  const heroImage = document.getElementById('hero-image');

  // Image entry
  setTimeout(() => {
    if (heroImage) {
      heroImage.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'translateX(0)';
    }
  }, 1000);

  // 2. Mouse Move Parallax
  const heroSection = document.getElementById('about');
  
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      if (heroImage) {
        const moveX = (x - 0.5) * -15; 
        const moveY = (y - 0.5) * -15;
        heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      if (heroImage) {
        heroImage.style.transform = 'translate(0px, 0px)';
        heroImage.style.transition = 'transform 0.5s ease-out';
      }
    });
  }

  // 3. Scroll Interactions (Reveal)
  const revealElements = document.querySelectorAll('.reveal-text');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        (entry.target as HTMLElement).style.opacity = '1';
        (entry.target as HTMLElement).style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Solid Dark Mode Toggle (Based on Viewport Center)
  const sections = document.querySelectorAll('.section-observe');
  
  const checkTheme = () => {
    const viewportCenter = window.innerHeight / 2;
    let currentSection = null;

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      // If the center of the screen is within this section
      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        currentSection = sec;
      }
    });

    if (currentSection) {
      if ((currentSection as HTMLElement).classList.contains('dark-bg')) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  };

  window.addEventListener('scroll', checkTheme);
  window.addEventListener('resize', checkTheme);
  
  // Trigger once on load
  checkTheme();

});
