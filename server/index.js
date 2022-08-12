const express = require('express');
const app = express();
const port = 5000;
const Meta = require('./models/Meta.js');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/ac783b135230409b97050c9729763345";
const ABI = require('./con');
const Contract = "0xA48f3ddf1602193F7CA9316C8D2b0c2434D9a9bb";
const web3 = new Web3(rpcURL);
const controller = require('./controller/controller');

const intervalId = controller.startInterval();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// app.get('/', async (req, res) => {

//     // const Contractaccess = await new web3.eth.Contract(ABI, Contract);


//     // const totalSupply = await Contractaccess.methods.totalSupply().call();

//     // const meta = new Meta();

//     // const result = await meta.a();
//     // const id = result[0].id;


//     // for (let i = id + 1; i <= totalSupply; i++) {
//     //     const tokenURI = await Contractaccess.methods.tokenURI(i).call();
//     //     try {
//     //         const obj = JSON.parse(tokenURI);

//     //         const save = await meta.saveList(obj, i);

//     //     } catch (err) {
//     //         console.error(err);
//     //     }
//     // }

//     res.send('root');

// })

app.get('/alltoken', async (req, res) => {

    const meta = new Meta();
    const arrMeta = await meta.getAllList();
    console.log(arrMeta)

    res.status(200).json(arrMeta);

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    Meta.initializeDB();
})


//git clone -b dev --single-branch 
//git branch --dev
//git romote -v -- origin
//git add .
//git contract "dasdasd"
//git push origin dev
//git에서 풀리퀘스트 누르기