import Card from "./Card";
import { useEffect, useState, useContext } from "react";
import ContractContext from "../contexts/ContractContext";

const Featured = () => {

    const [charities, setCharities] = useState([]);

    const contract = useContext(ContractContext);

    const loadCharities = async () => {
        const charityCur = await contract.getAllCauses();
        setCharities(charityCur);
    }

    useEffect(() => {
        loadCharities();
    }, []);


    return (
        <section className="featured-places" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <span></span>
                            <h2></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {charities.map(x => {return <Card key={x.id} charityNumber={x.id} />})}
                </div>
            </div>
        </section>
    )
}

export default Featured;