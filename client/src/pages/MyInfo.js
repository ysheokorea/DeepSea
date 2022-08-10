import React from 'react';
import CreateNFT from '../components/CreateNFT';

const MyInfo = ({ account, web3 }) => {
    return (
        <div>
            <h1>account information 페이지</h1>
            <h1>NFT 발행</h1>
            <CreateNFT account={account} web3={web3} />
        </div>
    );
};

export default MyInfo;