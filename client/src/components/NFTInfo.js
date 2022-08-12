import './NFTInfo.scss';

const NFTInfo = ({ nft }) => {
    console.log(nft);


    return (
        <div className="nftblock">
            <div className="thumbnail">
                <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202008/27/img_20200827164148_8a70c505.webp" alt=""></img>
            </div>
            <div className='contents'>
                <h3>NFT 제목</h3>
                <p>Description</p>
                <button className="buy-nft">구매하기</button>  
            </div>
        </div>
    );
};

export default NFTInfo;