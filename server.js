const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  console.log('Called')
  res.send('Backend Says Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

