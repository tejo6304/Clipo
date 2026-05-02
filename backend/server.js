const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/business', require('./routes/business'));

// Serve favicon
app.get('/favicon.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.svg'));
});

app.get('/favicon.ico', (req, res) => {
    res.type('image/svg+xml');
    res.sendFile(path.join(__dirname, 'favicon.svg'));
});

// Basic Route
app.get('/', (req, res) => {
    const dbState = mongoose.connection.readyState;
    const dbStatus = dbState === 1 ? 'CONNECTED' : (dbState === 2 ? 'CONNECTING' : 'DISCONNECTED');
    const env = process.env.NODE_ENV || 'development';

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Clipo </title>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <style>
                body {
                    background-color: #0e0e0e;
                    color: #10B981;
                    font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
                    padding: 2rem;
                    margin: 0;
                    line-height: 1.6;
                }
                .prompt::before {
                    content: "clipo@api:~$ ";
                    color: #bd9dff;
                }
                .system {
                    color: #a885f7;
                }
                .success {
                    color: #10B981;
                }
                .warn {
                    color: #F59E0B;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    border: 1px solid #333;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
                }
                .header {
                    text-align: center;
                    margin-bottom: 2rem;
                    border-bottom: 1px dashed #333;
                    padding-bottom: 1rem;
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .5; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <pre class="system">
         
 / ___| (_)_ __   ___   
 | |   | | | '_ \\ / _ \\ 
 | |___| | | |_) | (_) / 
 \\____|_|_| .__/ \\___/
                            |_|                          
                    </pre>
                <div>SYSTEM TERMINAL INTERFACE v1.0.0</div>
                </div>
                
                <div><span class="prompt"></span> ./status.sh</div>
                <br/>
                <div><span class="system">[SYSTEM]</span> INITIALIZING DIAGNOSTICS...</div>
                <div><span class="system">[SYSTEM]</span> NODE ENVIRONMENT: <span class="\${env === 'production' ? 'success' : 'warn'}">\${env.toUpperCase()}</span></div>
                <div><span class="system">[SYSTEM]</span> SERVER PORT: \${PORT}</div>
                <div><span class="system">[SYSTEM]</span> NODE VERSION: \${process.version}</div>
                <div><span class="system">[SYSTEM]</span> UPTIME: \${Math.floor(process.uptime())} seconds</div>
                <br/>
                <div><span class="prompt"></span> ./check_db.sh</div>
                <br/>
                <div><span class="system">[DATABASE]</span> MONGODB STATUS: <span class="\${dbState === 1 ? 'success' : 'warn'}">\${dbStatus}</span></div>
                \${dbState === 1 ? \`<div><span class="system">[DATABASE]</span> HOST: \${mongoose.connection.host}</div>
                <div><span class="system">[DATABASE]</span> NAME: \${mongoose.connection.name}</div>\` : ''}
                <br/>
                <div class="prompt animate-pulse">_</div>
            </div>
        </body>
        </html>
    `);
});

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connection established successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
