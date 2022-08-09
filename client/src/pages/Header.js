import { useState } from 'react';
import "./Header.scss";
import ConnectToWallet from "../components/ConnectToWallet"

const Header = ({ setAccounts, account }) => {
    const [isConnect, setIsConnect] = useState(false)

    return (
        <div className="header-wrap">
            <div className="logo">DeepSea</div>
            <div className="searchbar">

            </div>
            <div className="mainmenu">

            </div>
            <div className="accountInfo">

            </div>
            <div className="connectWallet">
                <ConnectToWallet setAccounts={setAccounts} account={account} />
            </div>
           
        </div>
    );
};

export default Header;