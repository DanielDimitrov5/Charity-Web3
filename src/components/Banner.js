import { useContext, useState, useEffect } from 'react';
import { Carousel } from 'antd';
import ContractContext from '../contexts/ContractContext';
import { ethers } from 'ethers';

const contentStyle = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '240px',
    textAlign: 'center',
    background: '#9fa8d1',
};

const Banner = () => {

    const contract = useContext(ContractContext);

    const [charityCount, setCharityCount] = useState(0);
    const [collectedFunds, setCollectedFunds] = useState("0");

    const GetCharityCount = async () => {
        const charityCur = await contract.getAllCauses();
        setCharityCount(charityCur.length);
    }

    // const GetCollectedFunds = async () => {
    //     let funds = 0;
        
    //     for (let i = 1; i <= charityCount; i++) {
    //         const charityFunds = await contract.collectedFunds(i);
    //         const num = ethers.BigNumber.from(charityFunds._hex);
    //         funds += ethers.utils.formatEther(num);
    //     }

    //     setCollectedFunds(funds);
    // }

    useEffect(() => {
        GetCharityCount();
        // GetCollectedFunds();
    }, []);


    return (
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>Charity causes: {charityCount}</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Total Funds collected: {collectedFunds}</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Goals copleated: 0</h3>
            </div>
        </Carousel>
    );
}

export default Banner;
