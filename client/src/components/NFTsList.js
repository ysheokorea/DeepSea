import axios from "axios";
import { useState, useEffect } from "react";
import NFTInfo from "./NFTInfo";
import './NFTsList.scss'

const NFTsList = () => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
    }, [])

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/alltoken');
            setNfts(response.data);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };
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
        <>
        <button onClick={fetchData}>전체 NFT 보기</button>
        <div className="nftboxes">
            
            {loading===false ? ( nfts.map((item, idx)=>{
                return <NFTInfo nft={item} key={idx}/>
            })):(<h1>로딩중입니다.</h1>)}
        </div>
        
        </>
        
    )
};

export default NFTsList;