// Custom event tracking for Google Analytics 4

// Track CTA button clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': 'CTA Button'
            });
        });
    }

    // Track lead generation form submissions
    const leadGenForm = document.getElementById('lead-gen-form');
    if (leadGenForm) {
        leadGenForm.addEventListener('submit', function(e) {
            e.preventDefault();
            gtag('event', 'lead_generation', {
                'event_category': 'conversion',
                'event_label': 'Lead Gen Form'
            });
            // Continue with form submission logic
        });
    }

    // Track chatbot interactions
    const chatbotToggle = document.getElementById('chatbot-toggle');
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            gtag('event', 'chatbot_open', {
                'event_category': 'engagement',
                'event_label': 'Chatbot'
            });
        });
    }

    const chatForm = document.getElementById('chat-form');
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            gtag('event', 'chatbot_message_sent', {
                'event_category': 'engagement',
                'event_label': 'Chatbot Message'
            });
            // Continue with chatbot message handling logic
        });
    }
});

// Track scroll depth
window.addEventListener('scroll', function() {
    let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage >= 25 && !window.tracked25) {
        gtag('event', 'scroll_depth', {
            'event_category': 'engagement',
            'event_label': '25% Scroll'
        });
        window.tracked25 = true;
    }
    if (scrollPercentage >= 50 && !window.tracked50) {
        gtag('event', 'scroll_depth', {
            'event_category': 'engagement',
            'event_label': '50% Scroll'
        });
        window.tracked50 = true;
    }
    if (scrollPercentage >= 75 && !window.tracked75) {
        gtag('event', 'scroll_depth', {
            'event_category': 'engagement',
            'event_label': '75% Scroll'
        });
        window.tracked75 = true;
    }
    if (scrollPercentage >= 90 && !window.tracked90) {
        gtag('event', 'scroll_depth', {
            'event_category': 'engagement',
            'event_label': '90% Scroll'
        });
        window.tracked90 = true;
    }
});
