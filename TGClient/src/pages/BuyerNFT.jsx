import useFetch from "../hooks/useFetch";
import Header from "../components/Header/Header";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../styles/buyernft.css";
// import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import { Watermark } from "@hirohe/react-watermark";
import MyModal from "./Model";
import { useContext } from "react";

const BuyerNFT = () => {
  const { cid } = useParams();
  const {
    data: singleNft,
    loading,
    error,
  } = useFetch(`upload/getAIpfs?cid=${cid}`);
  const { userData } = useContext(AuthContext);
  console.log("sabka baap", userData);
  console.log("diptanshu mkc", singleNft);
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
      <CommonSection title={userData?.hospitalName} />
      {userData.userType == "Seller" && (
        <MyModal
          cid={cid}
          name={`${userData.firstName}` + " " + `${userData.lastName}`}
        />
      )}
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
                  Bought For : <span>{singleNft?.currentBid}</span>{" "}
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
                        <p id="issue">
                          Issue Started On: {report?.issueStartedOn}
                        </p>

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
                            marginTop: "-20px",
                          }}
                        >
                          Report data
                        </p>
                        <hr
                          style={{
                            width: "95%",
                            borderTop: "4px solid #8c8b8b",
                            borderRadius: "40px",
                            marginTop: "-20px",
                          }}
                        />
                        <p style={{ fontSize: "18px" }}>{report?.reportDesc}</p>
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
                          Medicine
                          <hr
                            style={{
                              width: "95%",
                              borderTop: "4px solid #8c8b8b",
                              borderRadius: "40px",
                              marginTop: "-5px",
                            }}
                          />
                        </p>
                        {report?.nameOfMedicines &&
                          report?.nameOfMedicines.map((medicine, index) => {
                            return report?.testRequired != "0" ? (
                              <p style={{ fontSize: "18px" }}>
                                {(index += 1)}.{medicine}
                              </p>
                            ) : (
                              "No tests are given"
                            );
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
                          Lab Test
                          <hr
                            style={{
                              width: "95%",
                              borderTop: "4px solid #8c8b8b",
                              borderRadius: "40px",
                              marginTop: "-5px",
                            }}
                          />
                        </p>
                        {report?.nameOfTests &&
                          report?.nameOfTests.map((test, index) => {
                            return (
                              <p style={{ fontSize: "18px" }}>
                                {test}
                              </p>
                            );
                          })}
                      </div>
                    </section>
                  </>
                );
              })}
              <div
                className="patientLab"
                style={{
                  width: "87%",
                  display: "flex",
                  justifyContent: "center",
                  color: "whitesmoke",
                  borderRadius: "10px",
                  backdropFilter: "blur(3px)",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 80px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  paddingTop:"10%",
                  paddingBottom:"10%",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                <img src={singleNft.url} alt="patient lab report" />
              </div>
            </div>
          </Watermark>
        </main>
      </div>
    </>
  );
};

export default BuyerNFT;
// npm i --save @hirohe/react-watermark
