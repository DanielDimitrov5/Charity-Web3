import './App.css';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from './abi.js';

import Header from './components/Header';
import Banner from './components/Banner';
import Front from './components/Front';
import Featured from './components/Featured';
import OurServices from './components/OurServices';
import ContractContext from './contexts/ContractContext';
import SignerContext from './contexts/SignerContext';
import { infura_url } from './secrets';

function App() {

    const [MetaMaskInstalled, setMetaMaskInstalled] = useState(false);

    const address = '0x0bD3c994B2733bD02444615D01ED967E606A5A45';

    const [account, setAccount] = useState(null);

    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);

    const [signer, setSigner] = useState(null);

    const [charities, setCharities] = useState(null);


    const loadBlockchainData = async () => {

        if (window.ethereum === undefined) {
            const provider = new ethers.providers.JsonRpcProvider(infura_url);
            const contractInstance = new ethers.Contract(address, abi, provider);

            setContract(contractInstance);
            setProvider(provider);

            console.log("MetaMask not installed");
        }
        else {

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            setAccount(account);

            window.ethereum.on('accountsChanged', async () => {
                loadBlockchainData();
            });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
            const signer = provider.getSigner();
            setSigner(signer);

            const contractInstance = new ethers.Contract(address, abi, signer);
            setContract(contractInstance);
        }

        setMetaMaskInstalled(true);
    }

    useEffect(() => {
        loadBlockchainData();
    }, []);

    const createCharity = async () => {
        try {
            const tx = await contract.connect(signer).createNewCharityCause("", "World Wide #5", '5', '0x106D801337670aa15bBF286Bd35080f8e3A36EA8', { gasLimit: 1000000 });
            console.info(tx);
        }
        catch (e) {
            console.log(e);
        }
    }

    if (MetaMaskInstalled === false) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Login with Wallet
                    </p>
                </header>
            </div>
        );
    }

    return (
        <div>
            {/* <button onClick={createCharity}>createCharity</button> */}
            <ContractContext.Provider value={contract}>
                <Header account={account} />
                <Banner />
                <Front signerrr={signer} />
                <SignerContext.Provider value={signer}>
                    <Featured />
                </SignerContext.Provider>
                {/* <OurServices /> */}
            </ContractContext.Provider>

            {/* To be removed */}
            {/* <UselessContentTemp /> */}
        </div >
    );
}

export default App;