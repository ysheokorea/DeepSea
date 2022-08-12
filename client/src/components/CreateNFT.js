import { useState } from "react";
import { create } from 'ipfs-http-client';
import ContractABI from "./ContractABI";

const client = create('https://ipfs.infura.io:5001/api/v0');

const CreateNFT = ({ account, web3 }) => {
    const [fileUrl, setFileUrl] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeDescription = (e) => {
        setDescription(e.target.value);
    }

    const mintNFT = async () => {
        try {
            const abi = ContractABI;
            const address = "0xA48f3ddf1602193F7CA9316C8D2b0c2434D9a9bb";
            const contract = new web3.eth.Contract(abi, address);
            const newTokenURI = {
                name: name,
                description: description,
                image: fileUrl,
            }
            console.log(account)
            console.log(newTokenURI)
            const result = await contract.methods.mintNFT(account, JSON.stringify(newTokenURI)).send({from: account});
            console.log(result)
        } catch (e) {
            console.error(e);
        }
    }

    const handleChangeFile = async (e) => {
        const file = e.target.files[0];
        try {
            const added = await client.add(file)
            console.log(added)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            setFileUrl(url);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="createnft-wrap">
            <div>
                
                    제목 <input type="text" onChange={e => changeName(e)}></input>
                    Description <input type="text" onChange={e => changeDescription(e)}></input>
                    파일 업로드 <input type="file" id="file" onChange={e => handleChangeFile(e)} multiple="multiple"></input>
                    <button onClick={() => mintNFT()}>NFT 발행</button>
                
                <img src={fileUrl} width="600px" alt="" />
            </div>
        </div>
    );
};

export default CreateNFT;