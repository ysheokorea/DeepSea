import ConnectToWallet from "../components/ConnectToWallet"

const WalletConnecting = ({ setAccount, account }) => {
    return (
        <div>
            <h1>지갑 연결 페이지</h1>
            <ConnectToWallet setAccount={setAccount} account={account} />
        </div>
    );
};

export default WalletConnecting;