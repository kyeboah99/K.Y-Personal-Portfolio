document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");

    if (!chatbotContainer || !chatbotToggle || !chatbotMessages || !chatbotInput || !chatbotSend) {
        console.error("Chatbot elements not found in the document.");
        return;
    }

    console.log("Chatbot script loaded successfully."); // Debugging log

    // Ensure chatbot button is visible and clickable
    chatbotToggle.style.position = "fixed";
    chatbotToggle.style.bottom = "20px";
    chatbotToggle.style.right = "20px";
    chatbotToggle.style.background = "#64A6FF";
    chatbotToggle.style.color = "white";
    chatbotToggle.style.padding = "10px";
    chatbotToggle.style.borderRadius = "50%";
    chatbotToggle.style.cursor = "pointer";
    chatbotToggle.style.fontSize = "16px";
    chatbotToggle.style.border = "none";
    chatbotToggle.style.zIndex = "1000";

    // Toggle chatbot visibility
    chatbotToggle.addEventListener("click", function() {
        console.log("Chatbot button clicked."); // Debugging log
        if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
            chatbotContainer.style.display = "block";
            chatbotInput.focus();
        } else {
            chatbotContainer.style.display = "none";
        }
    });

    // Ensure chatbot container is positioned correctly
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.bottom = "80px";
    chatbotContainer.style.right = "20px";
    chatbotContainer.style.width = "300px";
    chatbotContainer.style.background = "#253A5E";
    chatbotContainer.style.color = "#E0E0E0";
    chatbotContainer.style.borderRadius = "10px";
    chatbotContainer.style.padding = "10px";
    chatbotContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    chatbotContainer.style.display = "none";
    chatbotContainer.style.zIndex = "1000";
    chatbotContainer.style.flexDirection = "column";
    chatbotContainer.style.alignItems = "center";
    chatbotContainer.style.justifyContent = "space-between";

    // Function to handle sending messages
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === "") return;

        chatbotMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatbotInput.value = "";
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        let botResponse = "I'm not sure how to answer that yet.";
        if (userMessage.toLowerCase().includes("hello")) {
            botResponse = "Hello! How can I assist you today?";
        } else if (userMessage.toLowerCase().includes("your name")) {
            botResponse = "My name is Kofi Yeboah.";
        } else if (userMessage.toLowerCase().includes("your experience")) {
            botResponse = "I have 5 years of experience in IT support, system administration, and cybersecurity.";
        } else if (userMessage.toLowerCase().includes("skills")) {
            botResponse = "I specialize in IT troubleshooting, cybersecurity, system monitoring, and network management.";
        } else if (userMessage.toLowerCase().includes("projects")) {
            botResponse = "You can check out my projects in the Projects section of my portfolio.";
        } else if (userMessage.toLowerCase().includes("resume")) {
            botResponse = "You can download my resume from the Resume section of my portfolio.";
        } else if (userMessage.toLowerCase().includes("contact")) {
            botResponse = "Feel free to reach out using the contact form in the Contact section.";
        }

        setTimeout(() => {
            chatbotMessages.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500);
    }

    chatbotSend.addEventListener("click", function() {
        console.log("Send button clicked."); // Debugging log
        sendMessage();
    });

    chatbotInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
