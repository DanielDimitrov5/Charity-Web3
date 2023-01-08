import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContractContext from '../contexts/ContractContext';
import { Col, Row } from 'antd';
import './CharityPage.css'


const CharityPage = () => {

    const { id } = useParams();

    //id not a number

    const contract = useContext(ContractContext);


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetFunds, setTargetFunds] = useState('');
    const [targetAddress, setTargetAddress] = useState('');


    useEffect(() => {
        const loadCharity = async () => {
            const charity = await contract.charities(id);
            const description = await contract.descriptions(id, 0);

            setTitle(charity.title);
            setDescription(description);
            setTargetFunds(parseInt(charity.targetFunds));
            setTargetAddress(charity.targetAddress);

        }
        loadCharity();
    }, []);

    if (isNaN(id)) {
        return <h2>Invalid charity id</h2>
    }

    return (
        <section className="" id="">
            <div className="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>{title}</h2>
                            <span>{targetAddress}</span>
                        </div>
                        <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="col-md-6">
                                <div className="charity-description">
                                    <p>{description}</p>
                                    <div className="charity-target">
                                        <h3>Needed {targetFunds} WEI</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CharityPage;