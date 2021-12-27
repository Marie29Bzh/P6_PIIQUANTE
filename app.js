const express = require("express");
const app = express();
const port = 3000;
const helmet = require("helmet");

app.use(helmet());
app.get('/test', (req, res) => {
   // console.log(res)
  //res.send('Hello World!')
  res.status(500).json({data:"kjkljklj"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;