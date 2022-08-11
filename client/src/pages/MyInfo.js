import React from 'react';
import CreateNFT from '../components/CreateNFT';

const MyInfo = ({ account, web3, isConnected }) => {
    if(!isConnected){
        return <div><h1>지갑 연결이 필요합니다.</h1></div>
    }

    return (
        <div>
            <h1>account information 페이지</h1>
            <h1>현재 지갑 주소 : {account}</h1>
            <h1>NFT 발행</h1>
            <CreateNFT account={account} web3={web3} />
        </div>
    );
};

export default MyInfo;