// Chatbot functionality
function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message === '') return;
    
    const messagesContainer = document.getElementById('chatbot-messages');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = message;
    messagesContainer.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Bot response (after slight delay)
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = botResponse;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hi') || lowerMsg.includes('hello')) {
        return "Hello! How can I help you today?";
    } else if (lowerMsg.includes('skill') || lowerMsg.includes('what can you do')) {
        return "I have skills in Python, Java, AI/ML, and Cloud Computing. Check my 'About' section for details!";
    } else if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
        return "I've worked on Age/Gender Detection, ML Prediction Models, and Amazon Clone. See my 'Portfolio'!";
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('reach')) {
        return "You can email me at tadelutejaswi709@gmail.com or connect on LinkedIn (link in 'Contact' section).";
    } else if (lowerMsg.includes('experience') || lowerMsg.includes('intern')) {
        return "I've done internships in AWS Cloud Computing and AI/ML. See my 'Experience' tab in the 'About' section.";
    } else if (lowerMsg.includes('learn') || lowerMsg.includes('study')) {
        return "I'm currently learning advanced ML techniques and cloud architecture. Check my 'Learning Journey' section!";
    } else {
        return "I'm not sure I understand. You can ask me about my skills, projects, or experience!";
    }
}

// Allow pressing Enter to send message
document.getElementById('chatbot-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
// Certificate Modal Functionality
let currentCertificateIndex = 0;
const certificates = [
    'Images/cert-1.jpg',
    'Images/cert-2.jpg',
    'Images/cert-3.jpg',
    'Images/cert-4.jpg',
    'Images/cert-5.jpg',
    'Images/cert-6.jpg'
];

function openModal(imageSrc) {
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-image');
    
    // Find the index of the clicked image
    currentCertificateIndex = certificates.indexOf(imageSrc);
    if (currentCertificateIndex === -1) currentCertificateIndex = 0;
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('certificate-modal').style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

function navigateModal(direction) {
    currentCertificateIndex += direction;
    
    // Wrap around if at beginning or end
    if (currentCertificateIndex >= certificates.length) {
        currentCertificateIndex = 0;
    } else if (currentCertificateIndex < 0) {
        currentCertificateIndex = certificates.length - 1;
    }
    
    document.getElementById('modal-image').src = certificates[currentCertificateIndex];
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('certificate-modal');
    if (event.target == modal) {
        closeModal();
    }
};

// Close modal with ESC key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === "Escape") {
        closeModal();
    }
};

console.log('Chatbot functionality initialized.');
console.log('Certificate Modal Functionality initialized.');
console.log('Visitor Counter initialized.');
console.log('Dark Mode Toggle initialized.');console.log('Chatbot functionality initialized.');
console.log('Certificate Modal Functionality initialized.');
console.log('Visitor Counter initialized.');
console.log('Dark Mode Toggle initialized.');
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Visitor Counter
function updateVisitorCount() {
    // In a real implementation, you would fetch this from a server/database
    // For demo purposes, we'll use localStorage
    let count = localStorage.getItem('visitorCount');
    
    if (!count) {
        count = Math.floor(Math.random() * 100) + 50; // Random initial value for demo
    } else {
        count = parseInt(count) + 1;
    }
    
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-count').textContent = count;
    
    // Animate the counter
    animateValue('visitor-count', 0, count, 2000);
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Call this when the page loads
window.onload = function() {
    updateVisitorCount();
};
// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('light-mode');
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
});