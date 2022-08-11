import ConnectToWallet from "../components/ConnectToWallet"

const WalletConnecting = ({ setAccount, account, toggleConnecting, isConnected }) => {
    return (
        <div>
            <h1>지갑 연결 페이지</h1>
            <ConnectToWallet setAccount={setAccount} account={account} toggleConnecting={toggleConnecting} isConnected={isConnected} />
        </div>
    );
};

export default WalletConnecting;