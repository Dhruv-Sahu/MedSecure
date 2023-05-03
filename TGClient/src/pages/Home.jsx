import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import { useNavigate } from "react-router-dom";
import Trending from "../components/ui/Trending-section/Trending";
import "../styles/home.css";
import arrow from "../assets/images/arrow.gif";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NftCard from "../components/ui/Nft-card/StaticNFT";
import StepSection from "../components/ui/Step-section/StepSection";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import dnft from "../assets/images/Dummy.png";

// const { patientUid, cid, currentBid, expiredOn, imgUrl, lastUpdate, hospitalName } =
// props.item;

const Home = () => {
  // async function getData(){}

  const { data, loading, error } = useFetch("upload/getFilesIpfs");

  const [showComponent, setShowComponent] = useState(false);
  const { userData } = useContext(AuthContext);
  // console.log(userData);
  // console.log("Diptanshu bkl");
  let username = userData.firstName + " " + userData.lastName;
  let useremail = userData.email;

  let publicAddress = userData?.publicAddress ?? "";

  let result = "0x....." + publicAddress.slice(36, 42);
  let aadharNumber = userData.aadharNumber;

  console.log(userData);
  const navigate = useNavigate();
  const navigateToMyNft = () => {
    navigate("/MyNFT");
  };

  return (
    <>
      {userData.userType === "Seller" ? (
        !loading && (
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "120px",
            }}
          >
            <div class="mine1" style={{ width: "420px" }}>
              <div
                className="part1"
                style={{
                  flex: "4",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <p
                  style={{
                    paddingTop: "25px",
                    marginTop: "-5px",
                    backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",
                    fontWeight: "700",
                    fontSize: "40px",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    MozBackgroundClip: "text",
                    MozTextFillColor: "transparent",
                    paddingLeft: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {username}
                </p>
                <button
                  type="button"
                  class="singleNft-btn d-flex align-items-center gap-2"
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    margin: "30px",
                    width: "309px",
                    left: "25px",
                    height: "60px",
                  }}
                  onClick={navigateToMyNft}
                >
                  <a style={{ alignItems: "center" }}>Go To Your NFTs</a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <p style={{ marginBottom: "0px" }}>
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2666BA, #00337C)",
                      fontWeight: "700",
                      fontSize: "20px",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      MozBackgroundClip: "text",
                      MozTextFillColor: "transparent",
                      paddingLeft: "20px",
                    }}
                  >
                    Your Email:
                  </span>{" "}
                  {useremail}
                </p>
                <p style={{ marginBottom: "0px" }}>
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2666BA, #00337C)",
                      fontWeight: "700",
                      fontSize: "20px",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      MozBackgroundClip: "text",
                      MozTextFillColor: "transparent",
                      paddingLeft: "20px",
                    }}
                  >
                    Public Address:
                  </span>{" "}
                  {result}
                </p>
                <p style={{ marginBottom: "0px" }}>
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2666BA, #00337C)",
                      fontWeight: "700",
                      fontSize: "20px",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      MozBackgroundClip: "text",
                      MozTextFillColor: "transparent",
                      paddingLeft: "20px",
                    }}
                  >
                    Aadhar Number:
                  </span>{" "}
                  {aadharNumber}
                </p>
              </div>
              <div
                className="single__nft__card1"
                style={{
                  borderRadius: "25px",
                  marginTop: "25px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <p
                  style={{
                    backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",
                    fontWeight: "700",
                    fontSize: "30px",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    MozBackgroundClip: "text",
                    MozTextFillColor: "transparent",
                    paddingLeft: "20px",
                    paddingTop: "10px",
                  }}
                >
                  Recently uploaded Nft
                </p>
                <img src={dnft} style={{ width: "100%" }}></img>
                <div className="nft__content" style={{ width: "80%" }}>
                  <h5 className="nft__title">
                    <a>SRM Hospital</a>
                  </h5>

                  <div className="creator__info-wrapper d-flex gap-3">
                    <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6>Last Updated On: </h6>
                        <p>23-04-2023</p>
                      </div>

                      <div>
                        <h6>Expiration Date</h6>
                        <p>05-05-2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="nft__content">
          <h5 className="nft__title">
            <Link to={`/viewNFT/${cid?.cid}`}>{hospitalName}</Link>
          </h5>

          <div className="creator__info-wrapper d-flex gap-3">
            <div className="creator__info w-100 d-flex align-items-center justify-content-between">
              <div>
                <h6>Last Updated On: </h6>
                <p>{lastUpdate}</p>
              </div>

              <div>
                <h6>Expiration Date</h6>
                <p>{expiredOn}</p>
              </div>
            </div>
          </div>

          <div className=" mt-3 d-flex align-items-center justify-content-between">
            <span className="history__link">
              <Link to="#">
                Bought For:{" "}
                <span style={{ fontWeight: 600 }}>{currentBid} ETH </span>
              </Link>
            </span>
          </div>
        </div> */}
              </div>
            </div>
            <div className="part2" style={{ flex: "8" }}>
              <div
                class="container"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "25px",
                  justifyContent: "space-between",
                }}
              >
                <div class="part4" style={{ flex: "1" }}>
                  <div
                    class="part1_1"
                    style={{
                      flex: "1",
                      // webkitBackdropFilter: "blur(5px)"
                      WebkitBackdropFilter: "blur(5px)",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    }}
                  >
                    <h3>Revenue</h3>
                    <p style={{fontSize:"18px"}}>50$</p>
                  </div>
                </div>
                <div class="part4" style={{ flex: "1" }}>
                  <div
                    class="part1_2"
                    style={{
                      flex: "1",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    }}
                  >
                    <h3>NFTs Uploaded</h3>
                    <p style={{fontSize:"18px"}}>15</p>
                  </div>
                </div>
                <div
                  class="part5"
                  onClick={() => {
                    navigate("/contact");
                  }}
                  style={{ flex: "1" }}
                >
                  <div
                    class="part1_3"
                    // onClick={() => {
                    //   navigate("/contact");
                    // }}
                    style={{
                      flex: "1",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                      cursor:"pointer",
                      backgroundColor : "#00337C"
                    }}
                  >
                    <h3>Need any help?</h3>
                    <p style={{fontSize:"18px"}}>Contact Us</p>
                  </div>
                </div>
              </div>
              {userData.userType === "Seller" ? (
                <div
                  style={{
                    // display: "flex",
                    width: "95%",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginLeft: "27px",
                    marginTop: "30px",
                  }}
                >
                  <div
                    className="div"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      height: "80%",
                    }}
                  >
                    <div
                      class="mygraph1"
                      style={{
                        flex: "1",
                        display: "block",
                        // border: "1px solid black",
                        // marginRight: "50px",
                        // width: "80%",
                        // padding: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                      }}
                    >
                      {!showComponent && <LineChart />}
                    </div>
                    <div
                      class="mygraph2"
                      style={{
                        marginTop: "25px",
                        flex: "1",
                        // border: "1px solid black",
                        // width: "80%",
                        // display:"block",
                        // padding: "20px",
                        // boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                      }}
                    >
                      {!showComponent && <BarChart />}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        )
      ) : (
        <></>
      )}
      {loading && <Spinner />}
      {/* {!showComponent && <HeroSection />} */}
      {userData.userType === "Buyer" ? !loading && <HeroSection /> : <></>}
      {userData.userType === "Buyer" ? (
        !loading && <Trending data={data} />
      ) : (
        <></>
      )}

      {!loading && <SellerSection />}
      {!loading && <LiveAuction />}
      {!loading && <StepSection />}
    </>
  );
};

export default Home;
