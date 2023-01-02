import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;

const PopularPlaces = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Titile"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter charity title',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter charity name" />
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
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    // addonBefore="http://"
                                    // addonAfter=".com"
                                    placeholder="Please enter target funds"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="owner"
                                label="Owner"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select an owner',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select an owner">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="type"
                                label="Type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the type',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the type">
                                    <Option value="private">Private</Option>
                                    <Option value="public">Public</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="Approver"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the approver',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the approver">
                                    <Option value="jack">Jack Ma</Option>
                                    <Option value="tom">Tom Liu</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="DateTime"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the dateTime',
                                    },
                                ]}
                            >
                                <DatePicker.RangePicker
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
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter url description" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    )
}

export default PopularPlaces;