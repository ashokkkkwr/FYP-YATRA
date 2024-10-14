import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path'; // Import the path module

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server); // Attach Socket.IO to the HTTP server




app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))





// Handle a GET request to the root URL
app.get("/", (req, res) => {
    res.send("hey");
});

// Handle a connection event
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle disconnection event
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
