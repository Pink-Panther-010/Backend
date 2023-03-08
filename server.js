const express = require('express')
const app = express()
const detectionRouter = require('./src/routes/detection.routes');
const profileRoutes = require('./src/routes/profile.routes');
const suspectRoutes = require('./src/routes/suspects.routes');
const sensorRoute = require('./src/routes/sensor.routes');
const imageRoute = require('./src/routes/images.routes');
const http = require('http');
const server = http.createServer(app);
const port = 3000
const mongoose = require("mongoose");
const db = require("./src/models/db.models");
const dbMedori = require("./src/models/dbMedori.models");
var cors = require('cors');
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

server.listen(port);
server.on("error", onError);

io.on('connection', (socket) => {
  console.log(`${socket.id} user connected`);

  socket.on("detection", (data) => {
    socket.broadcast.emit("detection", data);
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} user disconnected`);
  });
});

app.use(express.json())
// app.use(express.urlencoded())

//app.use(dbConfig); CONNECT CORRECTLY
app.use('/detections', detectionRouter);
app.use('/profile',profileRoutes);
app.use('/suspects',suspectRoutes);
app.use('/sensors',sensorRoute);
app.use('/images',imageRoute);

app.get('/', (req, res) => {
  res.send('Backend Says Hello!')
})

const connection =  mongoose.createConnection(db.url);
const connectionMadori =  mongoose.createConnection(dbMedori.url);

module.exports = {
  connection,
  connectionMadori
}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})

//ft1