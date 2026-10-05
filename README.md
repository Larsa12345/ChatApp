# Chat App

## Projektbeskrivning

Detta är en enkel realtidsbaserad gruppchattapplikation.

Flera användare kan ansluta till chatten och skicka meddelanden till alla anslutna användare i realtid med hjälp av SignalR.

## Krav

Innan applikationen körs behöver du ha:

* .NET 10 SDK
* Node.js och npm

## Så här konfigurerar du projektet

Öppna PowerShell och gå till mappen `ChatServer`:

```powershell
cd ChatServer
```

Installera SignalR JavaScript-klienten:

```powershell
npm install
```

Kopiera SignalR:s browser-version till `wwwroot`:

```powershell
Copy-Item node_modules\@microsoft\signalr\dist\browser\signalr.js wwwroot\lib\signalr\signalr.js
```

## HTTPS-konfiguration

Applikationen använder HTTPS för säker kommunikation mellan webbläsaren och servern.

Om det lokala utvecklingscertifikatet inte redan är betrott, kör:

```powershell
dotnet dev-certs https --trust
```

## Så här kör du applikationen lokalt

Från mappen `ChatServer`, kör:

```powershell
dotnet run --launch-profile https
```

Öppna HTTPS-adressen som visas i terminalen. Den aktuella utvecklingsadressen är:

```text
https://localhost:7080
```

## Så här använder du chatten

1. Öppna applikationen i en webbläsare.
2. Skriv in ett användarnamn.
3. Skriv ett meddelande.
4. Klicka på **Send**.
5. Meddelandet skickas till alla anslutna användare i realtid.
6. För att testa flera användare kan du öppna applikationen i två webbläsarfönster.

Användarnamn och meddelande måste fyllas i innan ett meddelande kan skickas.

## AI-användning

Jag använde en lokal AI-modell, Ornith 1.5 9B, genom Continue-tillägget i VS Code.

Jag använde AI för förslag, förklaringar, hjälp med CSS och JavaScript samt för att diskutera möjliga fel.

Jag granskade och testade AI:s förslag innan jag använde dem och korrigerade förslag som inte stämde överens med den faktiska implementationen.
