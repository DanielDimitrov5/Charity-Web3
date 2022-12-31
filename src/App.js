import './App.css';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from './abi.js';
import Header from './components/Header';
import Banner from './components/Banner';
import PopularPlaces from './components/PopularSection';
import Featured from './components/Featured';
import OurServices from './components/OurServices';

function App() {

    const [MetaMaskInstalled, setMetaMaskInstalled] = useState(false);

    const address = '0x0bD3c994B2733bD02444615D01ED967E606A5A45';

    // const [provider, setProvider] = useState(null);

    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);

    const [signer, setSigner] = useState(null);

    const [charities, setCharities] = useState(null);


    const loadBlockchainData = async () => {

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setAccount(account);


        window.ethereum.on('accountsChanged', async () => {
            loadBlockchainData();
        });


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/');

        const signer = provider.getSigner();
        setSigner(signer);


        const contractInstance = new ethers.Contract(address, abi, signer);
        setContract(contractInstance);


        setMetaMaskInstalled(true);
    }

    // const loadCharities = async () => {
    //         const charity = await contract.getAllCauses();
    //         setCharities(charity);
    // }

    useEffect(() => {
        loadBlockchainData();

        // loadCharities();

        // console.info(charities);

    }, []);

    const ownership = async () => {
        // const owner = await contract.owner();
        // console.info(owner);
        // charities();
        const funds = await contract.collectedFunds(1);

        const bigNumber = ethers.BigNumber.from(funds._hex);

        console.info(ethers.utils.formatEther(bigNumber));
    }

    // const charities = async () => {
    //     const charities = await contract.getAllCauses();
    //     console.info(charities[0]);
    //     return charities[0];
    // }

    // const transferOwnership = async () => {
    //     try {
    //         const tx = await contract.connect(signer).donateToCharity(1, { value: ethers.utils.parseEther("0.05") });
    //         console.info(tx);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    const createCharity = async () => {
        try {
            const tx = await contract.connect(signer).createNewCharityCause("Africaaa", "World Wide #5", '1000', '0x106D801337670aa15bBF286Bd35080f8e3A36EA8', { gasLimit: 1000000 } );
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
                    MetaMask is not installed
                </p>
            </header>
        </div>
    );
}

return (
    <div>
        <p>{account}</p>
        <button onClick={createCharity}>createCharity</button>

        <Header />
        <Banner />
        <PopularPlaces />
        <Featured contract={contract} signer={signer} />
        <OurServices />

        {/* To be removed */}
        {/* <UselessContentTemp /> */}
    </div>
);
}

export default App;