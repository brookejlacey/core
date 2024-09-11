// Simple chatbot functionality
const chatbot = {
    greetings: ["Hello!", "Hi there!", "Welcome to CORE support!"],
    responses: {
        "pricing": "Our pricing plans start at $49/month for small businesses. For enterprise solutions, please contact our sales team.",
        "features": "CORE platform offers advanced AI, secure infrastructure, and real-time analytics. Check our Tech Overview section for more details.",
        "support": "For technical support, please email support@coreplatform.com or call our 24/7 helpline at 1-800-CORE-HELP.",
        "demo": "We'd be happy to schedule a demo for you! Please provide your email address, and our sales team will contact you shortly.",
        "default": "I'm sorry, I couldn't understand your question. Could you please rephrase or ask about our pricing, features, support, or demo?"
    },
    
    getResponse(input) {
        const lowercaseInput = input.toLowerCase();
        for (const [key, value] of Object.entries(this.responses)) {
            if (lowercaseInput.includes(key)) {
                return value;
            }
        }
        return this.responses.default;
    },
    
    getGreeting() {
        return this.greetings[Math.floor(Math.random() * this.greetings.length)];
    }
};

// DOM elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatForm = document.getElementById('chat-form');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('hidden');
    if (!chatbotContainer.classList.contains('hidden') && chatMessages.children.length === 0) {
        addBotMessage(chatbot.getGreeting());
    }
});

// Handle user input
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = chatInput.value.trim();
    if (userInput) {
        addUserMessage(userInput);
        const botResponse = chatbot.getResponse(userInput);
        setTimeout(() => addBotMessage(botResponse), 500);
        chatInput.value = '';
    }
});

// Add user message to chat
function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2', 'text-right');
    messageElement.innerHTML = `<span class="inline-block bg-blue-500 text-white rounded-lg py-2 px-3 max-w-xs">${message}</span>`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add bot message to chat
function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2');
    messageElement.innerHTML = `<span class="inline-block bg-gray-300 rounded-lg py-2 px-3 max-w-xs">${message}</span>`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
