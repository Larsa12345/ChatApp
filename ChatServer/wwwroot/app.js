// Skapar en anslutning till SignalR-hubben på servern.
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

// Lyssnar efter meddelanden som skickas från servern.
connection.on("ReceiveMessage", (username, message) => {
    const messages = document.getElementById("messages");

    const messageElement = document.createElement("li");
    messageElement.textContent = username + ": " + message;

    messages.appendChild(messageElement);
});

// Startar SignalR-anslutningen.
connection.start().then(() => {
    console.log("Connected to ChatHub.");
})
.catch(error => {
    console.error(error);
});

// Hämtar inmatningsfälten och Send-knappen från sidan.
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("sendButton");

// Tar bort valideringsmeddelandet när användaren börjar skriva ett användarnamn.
usernameInput.addEventListener("input", () => {
    usernameInput.setCustomValidity("");
});
    
// Tar bort valideringsmeddelandet när användaren börjar skriva ett meddelande.
messageInput.addEventListener("input", () => {
    messageInput.setCustomValidity("");
});

// Skickar meddelandet när användaren klickar på Send-knappen.
sendButton.addEventListener("click", async () => {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    // Kontrollerar att användarnamnet inte är tomt.
    if (!username) {
        usernameInput.setCustomValidity("Username is required.");
        usernameInput.reportValidity();
        return;
    }

    // Kontrollerar att meddelandet inte är tomt.
    if (!message) {
        messageInput.setCustomValidity("Message is required.");
        messageInput.reportValidity();
        return;
    }

    try {
        // Anropar SendMessage på servern genom SignalR.
        await connection.invoke("SendMessage", username, message);
        // Rensar inmatningsfälten efter att meddelandet har skickats.
        messageInput.value = "";
        usernameInput.value = "";
    } catch (error) {
        console.error(error);
    }
});