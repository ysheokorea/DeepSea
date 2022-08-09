import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import erc721Abi from "./erc721Abi";
import Header from './pages/Header';

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [newErc721addr, setNewErc721Addr] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const setAccounts = (accounts) => {
    setAccount(accounts[0]);
  }

  const addNewErc721Token = () => {};

  return (
    <div className="App">
      <Header setAccounts={setAccounts} account={account} />
      
    </div>
  );
}

export default App;
