import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContractContext from '../contexts/ContractContext';


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

            setTitle(charity.title);
            setDescription(charity.description);
            setTargetFunds(charity.targetFunds);
            setTargetAddress(charity.targetAddress);

        }
        loadCharity();
    }, []);

    if (isNaN(id)) {
        return <h2>Invalid charity id</h2>
    }

    return (
            <h2>{title}</h2>
    )
}

export default CharityPage;