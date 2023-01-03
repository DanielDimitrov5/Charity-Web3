import { useState, useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, InputNumber, message } from 'antd';

import { ethers } from 'ethers';
import { BigNumber } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import ContractContext from '../contexts/ContractContext';

const { Option } = Select;

const Front = () => {

    const contract = useContext(ContractContext);

    const [open, setOpen] = useState(false);
    const [denomination, setDenomination] = useState("ETH");

    const [title, setTitle] = useState("");
    const [targetFunds, setTargetFunds] = useState("");
    const [targetAddress, setTargetAddress] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(null);

    const [form] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Your charity will be created shortly! Your transaction is being processed!',
            duration: 10,
        });
    };


    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Error! Your transaction was not processed!',
            duration: 10,
        });
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onClear = () => {
        form.resetFields();
    };

    const convertToEther = (amount) => {
        let convertedAmount;
        //conver to ether
        if(denomination === "ETH") {
            convertedAmount = amount.toString();
        }
        else if(denomination === "GWEI") {
            //convert Gwei to ether
            convertedAmount = BigNumber.from((amount / 1000000000).toString).toString();

        }
        else if(denomination === "WEI") {
            convertedAmount = ethers.utils.parseUnits(amount, "wei");
        }

        return convertedAmount;
    }

    const onSubmit = async () => {

        if (title === "" || targetFunds === "" || targetAddress === "" || description === "" || dueDate === null || !isAddress(targetAddress)) {
            return;
        }

        try {
            const tx = await contract.createNewCharityCause(title, description, targetFunds.toString(), targetAddress, { gasLimit: 1000000 });

            success();
            onClear();
            onClose();
        }
        catch (e) {
            console.log(e);
            error();
        }
    }

    const validateAddress = (rule, value) => {
        if (isAddress(value)) {
            return Promise.resolve();
        }
        else {
            return Promise.reject("Invalid address");
        }
    }

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

    return (
        <>
            <section className="" id="">
                <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <span>Charity</span>
                                <h2>Donate to a charity cause!</h2>
                            </div>
                            <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Space direction="vertical">
                                    <Space wrap>
                                        <Button type="primary" shape="round" size='large' onClick={showDrawer} icon={<PlusOutlined />}>
                                            Create a new Charity
                                        </Button>
                                    </Space>
                                </Space>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Drawer
                title="Create a new charity cause"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={onClear}>Clear</Button>
                    </Space>
                }
            >
                <Form layout="vertical" requiredMark form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="title"
                                label="Titile"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter charity title',
                                    },
                                ]}
                            >
                                <Input onChange={(e) => setTitle(e.target.value)} placeholder="Please enter charity name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="targetFunds"
                                label="Target Funds"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter target funds',
                                    },
                                ]}
                            >
                                <InputNumber onChange={(e) => setTargetFunds(e)} addonBefore="+" addonAfter={selectAfter} defaultValue={0} min={0} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="targetAddress"
                                label="Target Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Invalid address!',
                                        validator: validateAddress
                                    },
                                ]}
                            >
                                <Input onChange={(e) => setTargetAddress(e.target.value)} placeholder="Please enter target address  0x..." />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Due date"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the due date',
                                    },
                                ]}
                            >
                                <DatePicker
                                    onChange={(e) => setDueDate(e)}
                                    style={{
                                        width: '100%',
                                    }}
                                    getPopupContainer={(trigger) => trigger.parentElement}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter description',
                                    },
                                ]}
                            >
                                <Input.TextArea onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Please enter description" />
                            </Form.Item>
                        </Col>
                    </Row>
                    {contextHolder}
                    <Button htmlType="submit" onClick={onSubmit} type="primary">Create New Cause</Button>
                </Form>
            </Drawer>
        </>
    )
}

export default Front;