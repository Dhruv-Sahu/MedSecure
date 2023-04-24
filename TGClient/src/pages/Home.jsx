import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import { useNavigate } from "react-router-dom";
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
  console.log(userData);
  console.log("Diptanshu bkl");
  let username = userData.firstName + " " + userData.lastName;
  let useremail = userData.email;
  let publicAddress = userData?.publicAddress??""
  let result = "0x....." + publicAddress.slice(36, 42);
  let aadharNumber = userData.aadharNumber;
  console.log(userData);
  const navigate = useNavigate();
  const navigateToMyNft = () => {
    navigate("/MyNFT");
  };
  return (
    <>
    {userData.userType === "Seller"?
      (!showComponent && (
        <div
          className="container"
          style={{ display: "flex", flexDirection: "row", marginTop: "80px" }}
        >
          <div className="part1" style={{ flex: "4",
                                          backdropFilter:"blur(2px)",
                                          border:"2px solid red"}}>
            <h3><span style={{backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",
            fontWeight: "700",
            fontSize: "50px",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",}}>Welcome</span> {username}</h3>
            <p style={{ marginBottom: "0px" }}><span style={{backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",
            fontWeight: "700",
            fontSize: "20px",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",}}>Your Email:</span> {useremail}</p>
            <p style={{ marginBottom: "0px" }}><span style={{backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",
            fontWeight: "700",
            fontSize: "20px",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",}}>Public Address:</span> {result}</p>
            <p style={{ marginBottom: "0px" }}><span style={{backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",
            fontWeight: "700",
            fontSize: "20px",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",}}>Aadhar Number:</span> {aadharNumber}</p>
            <button
              type="button"
              class="btn btn-primary my-3"
              style={{position:"relative",
                      left:"250px"}}
              onClick={navigateToMyNft}
            >
              Go To Your NFTs
            </button>
            <img
              className="NFTimg"
              src="https://i.imgur.com/3l7dSKAh.png"
              alt="Certificate"
              width="50px"
            />
          </div>
          <div className="part2" style={{ flex: "8" }}>
            <div
              class="container"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div class="part4" style={{ flex: "1" }}>
                <div
                  class="part1"
                  style={{ flex: "1", width: "130px", backgroundColor: "red" }}
                >
                  <h2>Revenue</h2>
                  <p>50$</p>
                </div>
              </div>
              <div class="part4" style={{ flex: "1" }}>
                <div
                  class="part1"
                  style={{ flex: "1", width: "130px", backgroundColor: "red" }}
                >
                  <h2>Revenue</h2>
                  <p>50$</p>
                </div>
              </div>
              <div class="part5" style={{ flex: "1" }}>
                <div
                  class="part1"
                  style={{ flex: "1", width: "130px", backgroundColor: "red" }}
                >
                  <h2>Revenue</h2>
                  <p>50$</p>
                </div>
              </div>
            </div>
            {userData.userType === "Seller" ? (
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
                    padding: "20px",
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
                    padding: "20px",
                    // boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  }}
                >
                  {!showComponent && <BarChart />}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )):<></>}
      {showComponent && <Spinner />}
      {/* {!showComponent && <HeroSection />} */}
      {userData.userType === "Buyer" ? !showComponent && <HeroSection /> : <></>}
      {userData.userType === "Buyer" ? !showComponent && <Trending /> : <></>}

      {!showComponent && <SellerSection />}
      {!showComponent && <LiveAuction />}
      {!showComponent && <StepSection />}
    </>
  );
};

export default Home;
