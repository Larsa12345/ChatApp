using ChatServer.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Lägger till SignalR-tjänster i applikationen.
builder.Services.AddSignalR();

var app = builder.Build();

// Gör det möjligt för servern att visa HTML-, CSS- och JavaScript-filer.
app.UseDefaultFiles();
app.UseStaticFiles();

// Skapar SignalR-endpointen som används av chattklienten.
app.MapHub<ChatHub>("/chatHub");

app.Run();
