const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a=10;
    var b=20;
    var c = a + b;
    //res.send('c=',c);
    res.send('Hello World!')
})
//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})