import { useState } from "react";
import { create } from 'ipfs-http-client';
import axios from "axios";

const client = create('https://ipfs.infura.io:5001/api/v0');

const CreateNFT = () => {
    const [nftInfo, setNftInfo] = useState({});
    const [fileUrl, setFileUrl] = useState('');

    const submitCreating = async () => {
        // nft정보를 취합하여
        // nftInfo 객체를 만든 뒤 생성 요청
        
        try {
            const response = await axios.post("", nftInfo);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChangeFile = async (e) => {
        const file = e.target.files[0];
        try {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            setFileUrl(url);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="createnft-wrap">
            <div>
                <form>
                    제목 <input type="text"></input>
                    Description <input type="text"></input>
                    파일 업로드 <input type="file" id="file" onChange={e => handleChangeFile(e)} multiple="multiple"></input>
                    <button type="submit" onClick={() => {submitCreating()}}></button>
                </form>
                <img src={fileUrl} width="600px" alt="" />
            </div>
        </div>
    );
};

export default CreateNFT;