import { useState } from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

const Header = ({ setAccounts, account }) => {
    const [isConnected, setIsConnected] = useState(false)

    return (
        <div className="header-wrap">
            <Link to='/'>
                <div className="logo">DeeqSea
                </div>
            </Link>
            <Link to='/'>
                <div className="searchbar">
                    <span>search bar box</span>
                </div>
            </Link>
            <Link to='/'>
                <div className="category-wrap">
                    <span>category별 NFT</span>
                </div>
            </Link>
            <Link to='/myinfo'>
                <div className="accountInfo">
                    <span>나만의 NFT 발행</span>
                </div>
            </Link>
            <Link to='/connectwallet'>
                <div className="connectWallet">
                    <span>지갑 연결하기</span>
                </div>
            </Link>
        </div>
    );
};

export default Header;