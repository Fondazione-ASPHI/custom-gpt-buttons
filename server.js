const https = require('https');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3003;

// Carica certificati HTTPS
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

app.use(express.static(__dirname));

https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`HTTPS server running at https://localhost:${PORT}`);
});
