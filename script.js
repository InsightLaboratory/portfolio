// Dark Mode Toggle
function initDarkMode() {
    // Check if user has preference saved
    const savedMode = localStorage.getItem('themeMode');
    
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
    }
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (e.matches && !savedMode) {
            document.body.classList.add('light-mode');
        } else if (!e.matches && !savedMode) {
            document.body.classList.remove('light-mode');
        }
    });
}

// Smooth scrolling for navigation links
$(document).ready(function() {
    // Initialize dark mode
    initDarkMode();
    
    // Smooth scroll on click
    $('a[href*="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Scroll spy - highlight active section
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        
        $('section').each(function() {
            var sectionOffset = $(this).offset().top;
            var sectionHeight = $(this).height();
            
            if (scrollPos >= sectionOffset - 100 && scrollPos < sectionOffset + sectionHeight - 100) {
                $('a[href*="#' + $(this).attr('id') + '"]').addClass('active');
            } else {
                $('a[href*="#' + $(this).attr('id') + '"]').removeClass('active');
            }
        });
    });

    // Form validation
    $('form').on('submit', function(e) {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return false;
        }
    });

    // Email validation helper
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add animation on scroll
    observeElements();
});

// Intersection Observer for scroll animations
function observeElements() {
    var options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                $(entry.target).addClass('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    $('.skill-card, .project-card, .expertise-card, .tech-section').each(function() {
        observer.observe(this);
    });
}

// Add CSS for animation
var style = $('<style>').text(`
    .skill-card, .project-card, .expertise-card, .tech-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`);
$('head').append(style);

  