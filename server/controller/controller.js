// 컨트롤러 작업내용
// 1. 이더리움 네트워크에서 정보가져오기
// 2. for문 돌면서 DB 적재하기
// 3. 새로운 정보만 적재하기(filter 함수 사용해서 혹은 try~catch 문으로 오류 제거)

const express = require('express');
const app = express();
const port = 5000;
const Meta = require('../models/Meta.js');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/ac783b135230409b97050c9729763345";
const ABI = require('../con');
const { default: axios } = require('axios');
const Contract = "0xA48f3ddf1602193F7CA9316C8D2b0c2434D9a9bb";
const web3 = new Web3(rpcURL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function startInterval() {
    const intervalId = setInterval(async () => {
        // 1. 이더리움 네트워크에서 정보가져오기
        // 2. for문 돌면서 DB 적재하기
        // 3. 새로운 정보만 적재하기(filter 함수 사용해서 혹은 try~catch 문으로 오류 제거)
        const Contractaccess = await new web3.eth.Contract(ABI, Contract);


        const totalSupply = await Contractaccess.methods.totalSupply().call();

        const meta = new Meta();

        const result = await meta.a();
        const id = result[0].id;
        console.log(id);

        for (let i = id + 1; i <= totalSupply; i++) {
            const tokenURI = await Contractaccess.methods.tokenURI(i).call();
            try {
                // const obj = JSON.parse(tokenURI);

                axios(tokenURI)
                    .then(async res => {
                        console.log(res.data);

                        const save = await meta.saveList(res.data, i);
                    })


            } catch (err) {
                console.error(err);
            }
        }
    }, 10000);
    return intervalId;
}

module.exports.startInterval = startInterval;