const express = require('express')
const app = express()
const port = 3001
var cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Backend Says Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

