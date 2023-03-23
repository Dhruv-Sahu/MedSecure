import React, { useEffect ,useState} from "react";
import Spinner from "./Spinner";
import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";

import Trending from "../components/ui/Trending-section/Trending";

import StepSection from "../components/ui/Step-section/StepSection";



const Home = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
      setTimeout(() => {
        setShowComponent(true);
      }, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 4000);
  }, []);
  return (
    <>
    {showComponent && <Spinner/>}
    {!showComponent &&<HeroSection />}
    {!showComponent &&<Trending />}
    {!showComponent &&<SellerSection />}
    {!showComponent &&<LiveAuction />}
    {!showComponent &&<StepSection />}
    </>
  );
};

export default Home;