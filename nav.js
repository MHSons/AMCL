// nav.js - Professional Navigation Handler
class Navigation {
  constructor() {
    this.navToggle = document.querySelector('.nav-toggle');
    this.navList = document.querySelector('.nav-list');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }
  
  init() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', this.toggleMenu.bind(this));
    }
    
    // Close menu when clicking a link (mobile)
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.closeMenu.bind(this));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeydown.bind(this));
    
    // Close menu on resize (if was open on mobile)
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  toggleMenu() {
    const isExpanded = this.navToggle.getAttribute('aria-expanded') === 'true';
    this.navToggle.setAttribute('aria-expanded', !isExpanded);
    this.navList.classList.toggle('active');
    this.navToggle.querySelector('.hamburger').classList.toggle('active');
  }
  
  closeMenu() {
    this.navToggle.setAttribute('aria-expanded', 'false');
    this.navList.classList.remove('active');
    this.navToggle.querySelector('.hamburger').classList.remove('active');
  }
  
  handleKeydown(e) {
    if (e.key === 'Escape') {
      this.closeMenu();
    }
  }
  
  handleResize() {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
  
  // Add loading animation
  document.body.classList.add('loaded');
});

// Add to style.css for hamburger animation
