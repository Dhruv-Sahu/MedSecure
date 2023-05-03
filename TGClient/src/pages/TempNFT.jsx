import useFetch from "../hooks/useFetch";
import Header from "../components/Header/Header";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../styles/buyernft.css";
// import styled from "styled-components";
import { Watermark } from "@hirohe/react-watermark";
import MyModal from "./Model";
import { useEffect } from "react";

const BuyerNFT = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const myParam = queryParams.get("time");
  const cid = queryParams.get("cid");

  useEffect(() => {
    const timeNow = Math.round(Date.now() / 1000);
    if (timeNow > myParam) {
      console.log("the link is expired");
    }
    console.log("hiiiiiiiiiiiiiiii", myParam); // prints the value of "myParam" query parameter
  }, []);

  const {
    data: singleNft,
    loading,
    error,
  } = useFetch(`upload/getAIpfs?cid=${cid}`);
  
  // console.log("hello............................",singleNft._id);
  let temp = [];
  for (let i = 0; i < singleNft.numberOfMedicalIssue; i++) {
    temp.push(singleNft.reports[i].reportTitle);
  }
  let text = temp.join(", ");
  // console.log(text)
  return (
    <>
      <Header />
      <CommonSection title={singleNft?.hospitalName} />
      {/* <MyModal cid={cid} /> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="buyerNft-img-div">
                <img
                  src={singleNft?.imgUrl}
                  alt=""
                  className="single__nft-img"
                />
              </div>
            </Col>

            <Col
              lg="6"
              md="6"
              sm="6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="single_nft_content">
                <h2>{`Patient UHID : ${singleNft?.patientUid}`}</h2>

                <div className="Price">
                  Bought For : <span>{`${singleNft?.currentBid}`}</span>{" "}
                </div>

                <div className="summary">Report Summary</div>
                <h5>
                  Patient is suffering from {text}. Patient went to{" "}
                  {singleNft?.hospitalName} and has last updated his report on{" "}
                  {singleNft?.lastUpdate}.The next visit to the hospital will be
                  on {singleNft?.expiredOn}
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <hr
        style={{
          margin: "50px auto",
          width: "70%",
          borderTop: "4px solid #8c8b8b",
          borderRadius: "40px",
        }}
      />

      <div className="Report">
        <div className="disease">
          {singleNft?.reports?.map((report) => {
            return (
              <button>
                <a data-scroll href={`#${report?.reportTitle}`}>
                  {report?.reportTitle}
                </a>
              </button>
            );
          })}
        </div>

        <main
          class="content"
          style={{ width: "90%", position: "relative", right: "-75px" }}
        >
          <Watermark
            text={singleNft?._id}
            textColor="#707371"
            style={{ FontWeight: "800px" }}
          >
            <div>
              {singleNft?.reports?.map((report) => {
                return (
                  <>
                    <section
                      id={report?.reportTitle}
                      class="panel panel--pattern"
                    >
                      <div class="panel__background"></div>
                      <div class="panel__content">
                        <span id="golgol">{report?.reportTitle} </span>
                        <p id ="issue">Issue Started On: {report?.issueStartedOn}</p>
                        
                        <p style={{
                            backgroundImage:
                              "linear-gradient(90deg, #2666BA, #00337C)",
                            fontWeight: "750",
                            fontSize:"30px",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            MozBackgroundClip: "text",
                            MozTextFillColor: "transparent",
                            MarginLeft: "7px",
                            marginTop:"-20px"
                          }}>Report data</p>
                        <p>{report?.reportDesc}</p>
                        <p
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #2666BA, #00337C)",
                            fontWeight: "750",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            MozBackgroundClip: "text",
                            MozTextFillColor: "transparent",
                            MarginLeft: "7px",
                          }}
                        >
                          Medicine Prescribed
                        </p>
                        {report?.nameOfMedicines &&
                          report?.nameOfMedicines.map((medicine,index) => {
                            return (report?.testRequired!="0" ?(<p>{index+=1}.{medicine}</p>):"No tests are given");
                          })}
                        <p
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #2666BA, #00337C)",
                            fontWeight: "750",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            MozBackgroundClip: "text",
                            MozTextFillColor: "transparent",
                            MarginLeft: "7px",
                          }}
                        >
                          Test Given
                        </p>
                        {report?.nameOfTests &&
                          report?.nameOfTests.map((test,index) => {
                            return <p>{index&&index++}{test}</p>;
                          })}
                      </div>
                    </section>
                  </>
                );
              })}
            </div>
          </Watermark>
          {/* <StyledWatermark
            text="Watermark Rendering"
            style={{
              width: 1280,
              height: 1500,
            }}
            multiple
          >
            <div className="inner-watermark">
              
            </div>
          </StyledWatermark> */}
        </main>
      </div>
    </>
  );
};

export default BuyerNFT;
// npm i --save @hirohe/react-watermark
