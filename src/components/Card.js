import { ethers } from "ethers";
import { useEffect, useState, useContext } from "react";
import { Button, Popover, InputNumber, Select, Space, Modal, Skeleton, Progress } from 'antd';

import ContractContext from "../contexts/ContractContext";
import SignerContext from "../contexts/SignerContext";
import { Link } from "react-router-dom";


const Card = ({ charityNumber }) => {

    const [charity, setCharity] = useState([]);
    const [charityDescriptions, setCharityDescriptions] = useState([]);
    const [denomination, setDenomination] = useState("ETH");

    const [charityCollectedFunds, setCharityCollectedFunds] = useState(0);
    const [deadline, setDeadline] = useState('');

    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false); //modal

    const contract = useContext(ContractContext);
    const signer = useContext(SignerContext);

    const routerPath = `/charity/${charityNumber}`;

    const loadCharity = async () => {

        const charity = await contract.charities(charityNumber);
        setCharity(charity);

        const descriptions = await contract.descriptions(charityNumber, 0);
        setCharityDescriptions(descriptions);

        const collectedFunds = await contract.collectedFunds(charityNumber);
        setCharityCollectedFunds(collectedFunds);

        const deadline = new Date(parseInt(charity.deadline));
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(deadline);

        setDeadline(formattedDate.toString());

        setLoading(false);
    }

    const donateToCharity = async (value) => {
        try {
            const tx = await contract.connect(signer).donateToCharity(charityNumber, { value: value });
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadCharity();
    }, []);


    const converHexToDecimal = (hex) => {
        if (hex) {
            return ethers.utils.formatEther(hex);
        }
    }

    const popoverTite = <span>Donation</span>;

    const { Option } = Select;

    const selectAfter = (
        <Select
            onChange={(value) => {
                setDenomination(value)
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

        if (denomination === "ETH") {
            convertedAmount = ethers.utils.parseEther(amount);
            console.log(convertedAmount);
        }
        else if (denomination === "GWEI") {
            convertedAmount = ethers.utils.parseUnits(amount, "gwei");
        }
        else if (denomination === "WEI") {
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
    );

    return (
        <>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="featured-item">
                    <div className="thumb">
                        <img src="img/featured_item_4.jpg" alt="" />
                        <div className="date-content">
                            <h6>28</h6>
                            <span>August</span>
                        </div>
                    </div>
                    {
                        loading ?
                            <div className="down-content">
                                <h4> <Skeleton.Input active='true' size="default" /></h4>
                                <span> <Skeleton.Input active='true' size='small' /></span>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6 first-button">
                                        <div className="text-button">
                                            <a>Donate</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-button">
                                            <a>More Info</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="down-content">
                                <h4>{charity.title}</h4>
                                <span>{converHexToDecimal(charity?.targetFunds?._hex)} ETH</span>
                                <p>{charityDescriptions}</p>
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
                                            {/* <Link to={routerPath}>More Info</Link> */}
                                            <a onClick={() => setOpen(true)}>More Info</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div >
            <Modal
                title={charity?.title}
                centered={true}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <p>{parseInt(charityCollectedFunds)}/{parseInt(charity?.targetFunds)} wei collected</p>
                <Progress percent={parseInt(charityCollectedFunds / parseInt(charity?.targetFunds) * 100)} status="" />
                <p>Deadline is {deadline}</p>
            </Modal>
        </>

    )
}

export default Card;