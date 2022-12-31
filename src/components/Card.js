import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button, Popover, Cascader, InputNumber, Select, Space } from 'antd';


const Card = ({ charityNumber, contract, signer }) => {

    const [charity, setCharity] = useState({});
    const [denomination, setDenominatio] = useState("ETH");

    const loadCharity = async () => {
        const charity = await contract.charities(charityNumber);
        setCharity(charity);
    }

    const donateToCharity = async (value) => {
        try {
            const tx = await contract.connect(signer).donateToCharity(charityNumber, { value: value });
            console.info(tx);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadCharity();
    }, []);

    const popoverTite = <span>Donation</span>;

    const { Option } = Select;

    const selectAfter = (
        <Select
            onChange={(value) => {
                setDenominatio(value)
            }}
            defaultValue="ETH"
            style={{
                width: 80,
            }}
        >
            <Option value="ETH">ETH</Option>
            <Option value="GWEI">GWEI</Option>
            <Option value="WEI">WEI</Option>
        </Select>
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        let amount = event.target.elements[0].value;

        let convertedAmount;

        if(denomination === "ETH") {
            convertedAmount = ethers.utils.parseEther(amount);
        }
        else if(denomination === "GWEI") {
            convertedAmount = ethers.utils.parseUnits(amount, "gwei");
        }
        else if(denomination === "WEI") {
            convertedAmount = ethers.utils.parseUnits(amount, "wei");
        }

        donateToCharity(convertedAmount);
    }

    const content = (
        <div>
            <form onSubmit={handleSubmit}>
                <Space wrap>
                    <InputNumber addonBefore="+" addonAfter={selectAfter} defaultValue={0} min={0} />
                    <Button htmlType="submit" type="primary">Donate</Button>
                </Space>
            </form>
        </div>
    )

    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
                <div className="thumb">
                    <img src="img/featured_item_1.jpg" alt="" />
                    <div className="overlay-content">
                        <ul>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                        </ul>
                    </div>
                    <div className="date-content">
                        <h6>28</h6>
                        <span>August</span>
                    </div>
                </div>
                <div className="down-content">
                    <h4>{charity.title}</h4>
                    <span>{(charity.targetFunds)} ETH</span>
                    <p>{charity.description}</p>
                    <p>{charity.targetAddress}</p>
                    <div className="row">
                        <div className="col-md-6 first-button">
                            <Popover placement="bottom" title={popoverTite} content={content} trigger="click">
                                <div className="text-button">
                                    <a href="#">Donate</a>
                                </div>
                            </Popover>
                        </div>
                        <div className="col-md-6">
                            <div className="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card;