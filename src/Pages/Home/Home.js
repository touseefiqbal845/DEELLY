import Deals from "../../components/Home/Deals";
import Footer from "../../components/Home/Footer";
import MiddleSection from "../../components/Home/MiddleSection";
import NearbyDeals from "../../components/Home/NearbyDeals";


const Home = () => {
  return (
    <>
       <NearbyDeals/>
      <Deals/>
      <MiddleSection />
      <Footer />

    </>
  );
};

export default Home;
