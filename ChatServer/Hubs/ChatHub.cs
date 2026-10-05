using Microsoft.AspNetCore.SignalR;

namespace ChatServer.Hubs
{
        // Hubben hanterar kommunikationen mellan anslutna chattklienter.
    public class ChatHub : Hub
    {
        // Skickar ett meddelande till alla anslutna klienter.
        public async Task SendMessage(string username, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", username, message);
        }
    }
}