const express = require('express');
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 8888
const app = express();


app.use('/', (req, res)=>{
    res.json("종대님 잘 부탁드립니다.")
})


app.listen(port, ()=>{
    console.log(`Server is on ${port}...`);
} )

