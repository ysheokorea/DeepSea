import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import Header from './pages/Header';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';
import { Route, Routes } from 'react-router-dom';
import WalletConnecting from './pages/WalletConnecting';

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);

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

  const setAccounts = (account) => {
    setAccount(account);
  }

  const toggleConnecting = () => {
    if(isConnected === false){
      setIsConnected(true);
    } else {
      setIsConnected(false)
    }
  }

  return (
    <div className="App">
      <div className="header-outline">
        <Header setAccounts={setAccounts} account={account} />
      </div>
      <div>
        <Routes>
          <Route exac path='/' element={<Home />} />
          <Route path='/myinfo' element={<MyInfo account={account} web3={web3} isConnected={isConnected} />} />
          <Route path='/connectwallet' element={<WalletConnecting setAccount={setAccount} account={account} toggleConnecting={toggleConnecting} isConnected={isConnected} />} />
        </Routes>
      </div> 
    </div>
  );
}

export default App;
