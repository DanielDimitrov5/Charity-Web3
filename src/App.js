import './App.css';

import { useState } from 'react';
import { ethers } from 'ethers';
import { abi } from './abi.js';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Error404 from './components/Error404';

import MainContent from './components/MainContent';
import ContractContext from './contexts/ContractContext';
import SignerContext from './contexts/SignerContext';
import { infura_url } from './secrets';

function App() {

    const address = '0x9D9cAfEcc6B9e3A73735C560Fc98d7239fd3E497'

    const [account, setAccount] = useState(null);

    const [provider, setProvider] = useState(new ethers.providers.JsonRpcProvider(infura_url));
    const [contract, setContract] = useState(new ethers.Contract(address, abi, provider));

    const [signer, setSigner] = useState(null);

    const loadBlockchainData = async () => {

        if (window.ethereum) {

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
        else {
            alert('Please install WalletConnect or MetaMask to use this dApp.');
        }

    }

    return (
        <div>
            <ContractContext.Provider value={contract}>
                <SignerContext.Provider value={signer}>
                    <Header account={account} />
                    <Routes>
                        <Route path="/" element={<MainContent connectToNetwork={loadBlockchainData} />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </SignerContext.Provider>
            </ContractContext.Provider>
        </div >
    );
}

export default App;