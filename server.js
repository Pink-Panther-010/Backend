const express = require('express')
const app = express()
const detectionRouter = require('@/routes/detection.routes.js');
const port = 3000
var cors = require('cors');
app.use(cors());
app.use('/detection', detectionRouter);

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