import Card from "./Card";
import { useEffect, useState } from "react";

const Featured = ({ contract, signer }) => {

    const [charities, setCharities] = useState([]);

    const loadCharities = async () => {
        const charityCur = await contract.getAllCauses();
        console.log(charityCur);
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
                            <h2>Praesent nec dui sed urna</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {charities.map(x => {return <Card key={x.id} charityNumber={x.id} contract={contract} signer={signer} />})}
                </div>
            </div>
        </section>
    )
}

export default Featured;