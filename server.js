const express = require('express')
const app = express()
const detectionRouter = require('./routes/detection.routes');
const profileRoutes = require('./routes/profile.routes');
const suspectRoutes = require('./routes/suspects.routes');
const sensorRoute = require('./routes/sensor.routes');
const port = 3000
const mongoose = require("mongoose");
const db = require("./models/db.models");
const dbMedori = require("./models/dbMedori.models");
var cors = require('cors');
app.use(cors());
//app.use(dbConfig); CONNECT CORRECTLY
app.use('/detections', detectionRouter);
app.use('/profile',profileRoutes);
app.use('/suspects',suspectRoutes);
app.use('/sensors',sensorRoute);
app.get('/', (req, res) => {
  console.log('Called')
  res.send('Backend Says Hello!')
})

const connection =  mongoose.createConnection(db.url);
const connectionMadori =  mongoose.createConnection(dbMedori.url);



// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });
module.exports = {
  connection,
  connectionMadori
}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//ft1