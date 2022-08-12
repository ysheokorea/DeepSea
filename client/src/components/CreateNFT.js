import { useState } from "react";
import ContractABI from "./ContractABI";
import { NFTStorage } from "nft.storage/dist/bundle.esm.min.js";

const client = new NFTStorage({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEzM2YyOTBkOTY5YkNCQjZDMDljQjQxZEUzYTM1Yzc4MTQwZjYxNzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDE5Mzc0NjAwNiwibmFtZSI6IlByYWN0aWNlIEtleSJ9.wg5FwOFPynFwN0sBl_FePfV2rdXNYaESx7eLS02rMGg"})

const CreateNFT = ({ account, web3 }) => {
    const [file, setFile] = useState(null);
    const [fileUri, setfileUri] = useState("");
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
            const insertedData = {
                name: name,
                description: description,
                image: file,
            }
            const tokenCID = await client.store(insertedData);
            const newTokenURI = "https://ipfs.io/ipfs/" + tokenCID.url.replace("ipfs://", "");
            // const fileURI = "https://ipfs.io/ipfs/" + newTokenURI.image.replace("ipfs://", "");
            console.log(JSON.stringify(newTokenURI.image))
            // console.log(fileURI);

            const result = await contract.methods.mintNFT(account, JSON.stringify(newTokenURI)).send({from: account});
            console.log(result)
        } catch (e) {
            console.error(e);
        }
    }

    const handleChangeFile = async (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    return (
        <div className="createnft-wrap">
            <div>
                
                    제목 <input type="text" onChange={e => changeName(e)}></input>
                    Description <input type="text" onChange={e => changeDescription(e)}></input>
                    파일 업로드 <input type="file" id="file" onChange={e => handleChangeFile(e)} multiple="multiple"></input>
                    <button onClick={() => mintNFT()}>NFT 발행</button>
                
                <img src={fileUri} width="600px" alt="" />
            </div>
        </div>
    );
};

export default CreateNFT;