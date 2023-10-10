
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Services from "../Services/Services";
import Social from "../../components/Social";


const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <Social></Social>
    </div>
  );
};

export default Home;
