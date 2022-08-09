import { useState } from 'react';
import "./Header.scss";
import ConnectToWallet from "../components/ConnectToWallet"
import CreateNFT from '../components/CreateNFT';

const Header = ({ setAccounts, account }) => {
    const [isConnected, setIsConnected] = useState(false)

    return (
        <div className="header-wrap">
            <div className="logo">DeepSea</div>
            <div className="searchbar">

            </div>
            <div className="mainmenu">

            </div>
            <div className="accountInfo">
                <CreateNFT account={account} />

            </div>
            <div className="connectWallet">
                <ConnectToWallet setAccounts={setAccounts} account={account} />
            </div>
           
        </div>
    );
};

export default Header;