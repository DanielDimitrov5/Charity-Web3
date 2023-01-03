import { useContext, useState, useEffect } from 'react';
import { Carousel, Col, Row, Statistic } from 'antd';
import ContractContext from '../contexts/ContractContext';
import { ethers } from 'ethers';

const contentStyle = {
    margin: '0 auto',
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

    useEffect(() => {
        GetCharityCount();
    }, []);


    return (
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>Charity causes: {charityCount}</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Total Funds collected: {collectedFunds}</h3>
            </div>
            {/* <div>
                <h3 style={contentStyle}>
                    <Row span={12}>
                        <Col span={24}>
                            <Statistic title="Unmerged" value={93} suffix="/ 100" />
                        </Col>
                    </Row>
                </h3>
            </div> */}
        </Carousel>
    );
}

export default Banner;
