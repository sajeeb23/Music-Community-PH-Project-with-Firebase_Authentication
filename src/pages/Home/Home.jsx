import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Services from "../Services/Services";

const Home = () => {

    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;