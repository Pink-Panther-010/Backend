const express = require('express')
const app = express()
const detectionRouter = require('./routes/detection.routes');
const profileRouter = require('./routes/profile.routes');
const suspectRouter = require('./routes/suspect.routes');
const port = 3000
const dbConfig = require('./config/db.config')
var cors = require('cors');
app.use(cors());
//app.use(dbConfig); CONNECT CORRECTLY
app.use('/detection', detectionRouter);
app.use('/profile', profileRouter);
app.use('/suspect', suspectRouter);

app.get('/', (req, res) => {
  console.log('Called')
  res.send('Backend Says Hello!')
})


app.get('/:path', (req, res) => {
  res.send(req.params.path)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//ft1