import axios from "axios";
import { useState, useEffect } from "react";
import NFTInfo from "./NFTInfo";
import './NFTsList.scss'

const NFTsList = () => {
    const [nfts, setNfts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/alltoken');
                setNfts(response.data.tokenURI);
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [])
/*
    if(loading) {
        return <div>NFT 정보를 읽어오는 중입니다.</div>
    }

    if(!nfts) {
        return <div>발행된 NFT 정보가 없습니다.</div>
    }

    return (
        <div>
            {nfts.map(nft => (
                <NFTInfo key={nft.tokenURI} nft={nft} />
            ))}
        </div>
    );
*/
    return (
        <div className="nftboxes">
            <NFTInfo />
            <NFTInfo />
            <NFTInfo />
            <NFTInfo />
            <NFTInfo />
            <NFTInfo />
            <NFTInfo />
            <NFTInfo />
        </div>
    )
};

export default NFTsList;