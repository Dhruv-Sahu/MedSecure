import useFetch from "../hooks/useFetch";
import Header from "../components/Header/Header";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../styles/buyernft.css";
import styled from "styled-components";
import Watermark from "react-awesome-watermark";

const H1 = styled.h1`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 50px;
`;

const H3 = styled.h3`
  text-align: center;
`;

const WatermarkWrapper = styled.div`
  text-align: center;

  .space-props-test {
    display: inline-block;
    margin: 10px;
  }
`;

const StyledWatermark = styled(Watermark)`
  margin: 0 auto;

  .inner-watermark {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    font-size: 20px;
    text-align: center;
    line-height: 2;
  }
`;

const BuyerNFT = () => {
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

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{`Patient UHID : ${singleNft?.patientUid}`}</h2>

                <div className="Price">
                  Bought For : <span>5 Eth</span>{" "}
                </div>

                <div className="summary">Report Summary</div>
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

        <main class="content">
          <StyledWatermark
            text="Watermark Rendering"
            style={{
              width: 1280,
              height: 1500,
            }}
            multiple
          >
            <div className="inner-watermark">
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
                          <span
                            >{report?.reportTitle}</span>
                          <p>{report?.reportDesc}</p>
                        </div>
                      </section>
                    </>
                  );
                })}
              </div>
            </div>
          </StyledWatermark>
        </main>
      </div>
    </>
  );
};

export default BuyerNFT;
