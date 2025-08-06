// components.js - Handle loading and initializing components

// Store the main content container
let mainContent = document.getElementById('main-content');

// Store the navbar HTML
const navbarHTML = `
<nav class="bg-white shadow-lg sticky top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <div class="flex-shrink-0 flex items-center">
                <a href="index.html" class="flex items-center space-x-2 group">
                    <!-- School Logo -->
                    <div class="flex-shrink-0 h-10 w-auto">
                        <img src="logo/Group 947.png" alt="École Victory Logo" class="h-full w-auto">
                    </div>
                    <span class="text-xl md:text-2xl font-bold text-red-900 transition-colors duration-300 group-hover:text-red-700">
                        ÉCOLE VICTORY
                    </span>
                </a>
            </div>
            <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
                <a href="index.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="index">
                    Accueil
                </a>
                <a href="inscriptions.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="inscriptions">
                    Inscriptions
                </a>
                <a href="pedagogie.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="pedagogie">
                    Pédagogie
                </a>
                <a href="vie-scolaire.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="vie-scolaire">
                    Vie scolaire
                </a>
                <a href="contact.html" class="text-gray-700 hover:text-red-700 font-medium nav-link" data-page="contact">
                    Contact
                </a>
                <a href="inscriptions.html" class="ml-4 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                    S'inscrire
                </a>
            </div>
            <div class="md:hidden">
                <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-700 focus:outline-none">
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile menu -->
    <div class="mobile-menu hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100">Accueil</a>
            <a href="inscriptions.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100">Inscriptions</a>
            <a href="pedagogie.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100">Pédagogie</a>
            <a href="vie-scolaire.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100">Vie scolaire</a>
            <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100">Contact</a>
            <a href="inscriptions.html" class="block px-3 py-2 text-center rounded-md text-base font-medium text-white bg-red-800 hover:bg-red-700">S'inscrire</a>
        </div>
    </div>
</nav>
`;

// Store the footer HTML
const footerHTML = `
<!-- Footer Component -->
<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <!-- About Section -->
            <div>
                <h3 class="text-xl font-bold mb-4">École Victory</h3>
                <p class="text-gray-400">Établissement d'enseignement d'excellence à Laâyoune, dédié à former les leaders de demain.</p>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Liens rapides</h4>
                <ul class="space-y-2">
                    <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors" data-navigation>Accueil</a></li>
                    <li><a href="inscriptions.html" class="text-gray-400 hover:text-white transition-colors" data-navigation>Inscriptions</a></li>
                    <li><a href="pedagogie.html" class="text-gray-400 hover:text-white transition-colors" data-navigation>Pédagogie</a></li>
                    <li><a href="vie-scolaire.html" class="text-gray-400 hover:text-white transition-colors" data-navigation>Vie scolaire</a></li>
                    <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors" data-navigation>Contact</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Contact</h4>
                <address class="not-italic text-gray-400 space-y-2">
                    <p class="flex items-start">
                        <i class="fas fa-map-marker-alt mt-1 mr-2 text-red-500"></i>
                        <span>123 Avenue de l'Éducation<br>Laâyoune, Maroc</span>
                    </p>
                    <p class="flex items-center">
                        <i class="fas fa-phone-alt mr-2 text-red-500"></i>
                        <span>+212 5XX-XXXXXX</span>
                    </p>
                    <p class="flex items-center">
                        <i class="fas fa-envelope mr-2 text-red-500"></i>
                        <span>contact@ecolevictory.ma</span>
                    </p>
                </address>
            </div>

            <!-- Newsletter -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
                <p class="text-gray-400 mb-4">Abonnez-vous à notre newsletter pour recevoir nos actualités.</p>
                <form class="flex">
                    <input type="email" placeholder="Votre email" class="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 w-full">
                    <button type="submit" class="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-r-lg transition-colors">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; ${new Date().getFullYear()} École Victory. Tous droits réservés.</p>
        </div>
    </div>
</footer>`;

// Function to load page content via AJAX
async function loadPage(url, pushState = true) {
    try {
        // Show loading state
        if (mainContent) {
            mainContent.style.opacity = '0.7';
            mainContent.style.pointerEvents = 'none';
        }

        // Fetch the new page
        const response = await fetch(url);
        const text = await response.text();
        
        // Create a temporary container to parse the HTML
        const temp = document.createElement('div');
        temp.innerHTML = text;
        
        // Extract the main content (everything inside the body except the navbar)
        const newContent = temp.querySelector('body').innerHTML;
        
        // Update the page title
        const newTitle = temp.querySelector('title')?.textContent || document.title;
        document.title = newTitle;
        
        // Update the URL in the address bar without reloading
        if (pushState) {
            window.history.pushState({ url: url }, newTitle, url);
        }
        
        // Replace the content
        if (mainContent) {
            mainContent.innerHTML = newContent;
            // Trigger any necessary JavaScript for the new page
            initPageScripts();
            // Scroll to top
            window.scrollTo(0, 0);
            // Fade in the new content
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.pointerEvents = 'auto';
            }, 50);
        }
        
        // Update the active state of navigation links
        highlightCurrentPage();
        
    } catch (error) {
        console.error('Error loading page:', error);
        // Fallback to normal navigation if there's an error
        window.location.href = url;
    }
}

// Initialize page-specific scripts
function initPageScripts() {
    // Re-initialize AOS for new content
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Re-attach navigation event listeners
    attachNavigationListeners();
    
    // Ensure footer is included
    includeFooter();
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state) {
        loadPage(event.state.url, false);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Navbar HTML content
    const navbarHTML = `
    <nav class="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="index.html" class="text-xl font-bold text-red-900" data-navigation>ÉCOLE VICTORY</a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-red-700 px-3 py-2 nav-link" data-page="index" data-navigation>Accueil</a>
                    <a href="inscriptions.html" class="text-gray-700 hover:text-red-700 px-3 py-2 nav-link" data-page="inscriptions" data-navigation>Inscriptions</a>
                    <a href="pedagogie.html" class="text-gray-700 hover:text-red-700 px-3 py-2 nav-link" data-page="pedagogie" data-navigation>Pédagogie</a>
                    <a href="vie-scolaire.html" class="text-gray-700 hover:text-red-700 px-3 py-2 nav-link" data-page="vie-scolaire" data-navigation>Vie à l'établissement</a>
                    <a href="contact.html" class="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 nav-link" data-page="contact" data-navigation>Contact</a>
                </div>
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="mobile-menu-button" aria-expanded="false" aria-controls="mobile-menu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-white shadow-lg">
            <a href="index.html" class="block px-4 py-3 text-gray-700 hover:bg-gray-100 nav-link" data-page="index" data-navigation>Accueil</a>
            <a href="inscriptions.html" class="block px-4 py-3 text-gray-700 hover:bg-gray-100 nav-link" data-page="inscriptions" data-navigation>Inscriptions</a>
            <a href="pedagogie.html" class="block px-4 py-3 text-gray-700 hover:bg-gray-100 nav-link" data-page="pedagogie" data-navigation>Pédagogie</a>
            <a href="vie-scolaire.html" class="block px-4 py-3 text-gray-700 hover:bg-gray-100 nav-link" data-page="vie-scolaire" data-navigation>Vie à l'établissement</a>
            <a href="contact.html" class="block px-4 py-3 text-gray-700 hover:bg-gray-100 nav-link" data-page="contact" data-navigation>Contact</a>
        </div>
    </nav>
    <div class="h-16"></div>
    `;

    // Function to include navbar
    function includeNavbar() {
        let navbarPlaceholder = document.querySelector('[data-include="components/navbar.html"]');
        if (!navbarPlaceholder) {
            navbarPlaceholder = document.getElementById('navbar-placeholder');
        }
        if (navbarPlaceholder) {
            navbarPlaceholder.outerHTML = navbarHTML;
            initMobileMenu();
            highlightCurrentPage();
        } else {
            console.error('Navbar placeholder not found.');
        }
    }

    // Function to include footer on all pages
    function includeFooter() {
        // Remove any existing footer first to prevent duplicates
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.remove();
        }
        
        // Always add footer to all pages
        // Create a footer element and add it to the end of the body
        const footer = document.createElement('footer');
        footer.innerHTML = footerHTML;
        document.body.appendChild(footer);
    }

    // Initialize mobile menu functionality
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function(e) {
                e.stopPropagation();
                mobileMenu.classList.toggle('hidden');
                
                // Toggle aria-expanded attribute
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle the menu icon between hamburger and X
                const menuIcon = mobileMenuButton.querySelector('svg');
                if (menuIcon) {
                    if (isExpanded) {
                        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                    } else {
                        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                    }
                }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInside = mobileMenuButton.contains(event.target) || mobileMenu.contains(event.target);
                if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    const menuIcon = mobileMenuButton.querySelector('svg');
                    if (menuIcon) {
                        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                    }
                }
            });
        }
    }
    
    // Highlight current page in navigation
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                if (currentPage !== 'contact') {
                    link.classList.add('text-red-900', 'font-medium');
                    link.classList.remove('text-gray-700');
                }
                // For mobile menu, add background highlight
                if (link.parentElement && link.parentElement.id === 'mobile-menu') {
                    link.classList.add('bg-red-50', 'border-r-4', 'border-red-800');
                }
            }
        });
    }
    
    // Initialize navbar and other components
    includeNavbar();
    includeFooter();
    
    // Handle navigation clicks
    document.addEventListener('click', function(e) {
        // Check if the clicked element or its parent is a navigation link
        let target = e.target.closest('[data-navigation]');
        if (target && target.tagName === 'A') {
            e.preventDefault();
            const href = target.getAttribute('href');
            if (href !== window.location.pathname) {
                loadPage(href);
            }
        }
    });
    
    // Initialize page scripts
    initPageScripts();
    
    // Add smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Adjust based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Log initialization
    console.log('Components initialized');
});
