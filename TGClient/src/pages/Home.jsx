import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import SellerSection from "../components/ui/Seller-section/SellerSection";

import Trending from "../components/ui/Trending-section/Trending";

import StepSection from "../components/ui/Step-section/StepSection";

import { useContext } from "react";
import { AuthContext } from "../context/authContext";
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

  const { userData } = useContext(AuthContext);
  console.log(userData.userType);

  return (
    <>
      {showComponent && <Spinner />}
      {!showComponent && <HeroSection />}
      {userData.userType === "Buyer" ? !showComponent && <Trending /> : <></>}
      {userData.userType === "Seller" ?  
      <div
        style={{
          display: "flex",
          width: "90%",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: "67px",
        }}
      >
        <div
          style={{
            flex: "1",
            // border: "1px solid black",
            marginRight: "50px",
            width: "80%",
            padding:"20px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          {!showComponent && <LineChart />}
        </div>
        <div
          style={{
            flex: "1",
            // border: "1px solid black",
            width: "80%",
            padding:"20px",
            // boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          {!showComponent && <BarChart />}
        </div>
      </div>: <></>}
      {!showComponent && <SellerSection />}
      {!showComponent && <LiveAuction />}
      {!showComponent && <StepSection />}
    </>
  );
};

export default Home;
