import Banner from "./Banner";
import Featured from "./Featured";
import Front from "./Front";

const MainContent = ({ connectToNetwork }) => {
    return (
        <>
            <Banner />
            <Front connectToNetwork={connectToNetwork} />
            <Featured />
        </>
    );
};

export default MainContent;