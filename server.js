const express = require('express')
const app = express()
const detectionRouter = require('./routes/detection.routes');
const profileRoutes = require('./routes/profile.routes');
const suspectRoutes = require('./routes/suspects.routes');
const port = 3000
const mongoose = require("mongoose");
const dbConfig = require('./config/db.config')
const db = require("./models/db.models");
var cors = require('cors');
app.use(cors());
//app.use(dbConfig); CONNECT CORRECTLY
app.use('/detections', detectionRouter);
app.use('/profile',profileRoutes);
app.use('/suspects',suspectRoutes);
app.get('/', (req, res) => {
  console.log('Called')
  res.send('Backend Says Hello!')
})


db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//ft1