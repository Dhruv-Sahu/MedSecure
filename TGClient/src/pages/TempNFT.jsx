import useFetch from "../hooks/useFetch";
import Header from "../components/Header/Header";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../styles/buyernft.css";
// import styled from "styled-components";
import { Watermark } from "@hirohe/react-watermark";

const TempNFT = () => {
  const { cid } = useParams();
  const {
    data: singleNft,
    loading,
    error,
  } = useFetch(`upload/getAIpfs?cid=${cid}`);
  console.log(singleNft);

  return (
    <>
      <Header />
      <CommonSection title={singleNft?.hospitalName} />

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
                  Bought For : <span>5 Eth</span>{" "}
                </div>

                <div className="summary">Report Summary</div>
                <h5>
                  Patient is suffering from Cancer,Dengue.Patient went to Srm
                  Hospital and has last updated his report on 23/03/23.The next
                  visit to the hospital will be on 30/03/23.
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
            text="MedSecure"
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
                        <span id="golgol">{report?.reportTitle}</span>
                        <p>{report?.reportDesc}</p>
                        <p>Issue Started On: {report?.issueStartedOn}</p>
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
                          report?.nameOfMedicines.map((medicine) => {
                            return <p>{medicine}</p>;
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
                          report?.nameOfTests.map((test) => {
                            return <p>{test}</p>;
                          })}
                      </div>
                    </section>
                  </>
                );
              })}
            </div>
          </Watermark>
        </main>
      </div>
    </>
  );
};

export default TempNFT;
// npm i --save @hirohe/react-watermark
