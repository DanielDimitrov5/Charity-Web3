import { ethers } from "ethers";
import { useEffect, useState, useContext } from "react";
import { Button, Popover, InputNumber, Select, Space, Modal, Skeleton } from 'antd';
import ContractContext from "../contexts/ContractContext";
import SignerContext from "../contexts/SignerContext";


const Card = ({ charityNumber }) => {

    const [charity, setCharity] = useState([]);
    const [charityDescriptions, setCharityDescriptions] = useState([]);
    const [denomination, setDenomination] = useState("ETH");

    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.');

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after one seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const contract = useContext(ContractContext);
    const signer = useContext(SignerContext);

    const loadCharity = async () => {

        const charity = await contract.charities(charityNumber);
        setCharity(charity);

        const descriptions = await contract.descriptions(charityNumber, 0);
        setCharityDescriptions(descriptions);

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
                                        <a onClick={showModal}>More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={1000}
                zIndex={1000}
            >
                <p>{modalText}</p>
            </Modal>
        </div >
    )
}

export default Card;