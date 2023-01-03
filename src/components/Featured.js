import Card from "./Card";
import { useEffect, useState, useContext } from "react";
import ContractContext from "../contexts/ContractContext";
import { Button } from 'antd';

const Featured = () => {

    const [charities, setCharities] = useState([]);
    const [totalCharities, setTotalCharities] = useState(0);

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [isLoading, setIsLoading] = useState(false);

    const contract = useContext(ContractContext);

    const loadCharities = async () => {

        setIsLoading(true);

        if (page === 1) {
            const fetchedCharities = await contract.getAllCauses();
            const pageData = fetchedCharities.slice(0, pageSize);
            setCharities(pageData);
            setIsLoading(false);
            return;
        }

        setTimeout(async () => {
            const fetchedCharities = await contract.getAllCauses();

            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const pageData = fetchedCharities.slice(startIndex, endIndex);
            setCharities([...charities, ...pageData]);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        loadCharities();
    }, [page]);

    useEffect(() => {

        const loadCharities = async () => {
            const charities = await contract.getAllCauses();
            setTotalCharities(charities.length);
        };

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
                    {charities.map(x => { return <Card key={x.id} charityNumber={x.id} /> })}
                </div>
                <br />
                <div className="row">
                    {isLoading ? (
                        <Button block="true" type="primary" loading={true}>
                            Loading...
                        </Button>
                    ) : (
                        <Button block="true" type="primary" onClick={() => setPage(page + 1)} disabled={page * pageSize >= totalCharities}>
                            Load more
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Featured;