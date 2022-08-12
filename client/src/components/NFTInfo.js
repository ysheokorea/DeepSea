import { useState } from 'react';
import './NFTInfo.scss';

const NFTInfo = ({ nft }) => {
    // const [imageURL, setImageURL] = useState('');

    // try{
    //     const fileURl = "https://ipfs.io/ipfs/" + nft.image.replace("ipfs://", "");
    //     console.log(fileURl)
    //     setImageURL(fileURl);

    // }catch(err){
    //     console.error(err);
    // }


    return (
        <div className="nftblock">
            <div className="thumbnail">
                <img src={"https://ipfs.io/ipfs/" + nft.image.replace("ipfs://", "")} alt=""></img>

            </div>
            <div className='contents'>
                <h3>NFT 제목 : {nft.name}</h3>
                <p>Description : {nft.description}</p>
                <button className="buy-nft">구매하기</button>
            </div>
        </div>
    );
};

export default NFTInfo;