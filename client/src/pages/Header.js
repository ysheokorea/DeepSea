import "./Header.scss";
import { Link } from 'react-router-dom';
import { MdYoutubeSearchedFor, MdDashboard, MdOutlineBuild, MdOutlinePayment } from "react-icons/md";

const Header = ({ setAccounts, account }) => {

    return (
        <div className="header-wrap">
            <Link to='/'>
                <div className="logo">DeepSea</div>
            </Link>
            <Link to='/'>
                <form className="searchbar">
                    <input type="text" placeholder="Account, Title..."></input>
                    <button type="submit" title="Search"><MdYoutubeSearchedFor /></button>
                </form>
            </Link>
            <Link to='/'>
                <button title="Category"><MdDashboard /></button>
            </Link>
            <Link to='/myinfo'>
                <button title="New NFT"><MdOutlineBuild /></button>
            </Link>
            <Link to='/connectwallet'>
                <button title="Connect Wallet"><MdOutlinePayment /></button>
            </Link>
        </div>
    );
};

export default Header;