import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";



import Header from "../components/Header/Header";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import "../styles/buyernft.css";
import { Link } from "react-router-dom";
// import { styles } from "../components/styles";
// import useFetch from "../hooks/useFetch";
import axios from "../context/axios";
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
  // const WatermarkWrapper =
  // textaAlign: "center",

  // .space-props-test {
  //   display: inline-block;
  //   margin: 10px;
  // }
  // ;

  // const StyledWatermark = styled(Watermark)`
  //   margin: 0 auto;

  //   .inner-watermark {
  //     width: 100%;
  //     height: 100%;
  //     border: 1px solid #ccc;
  //     font-size: 20px;
  //     text-align: center;
  //     line-height: 2;
  //   }
  // `;
  //   const { cid } = useParams();
  //   console.log("from nftdetails",cid)

  // const singleNft = NFT__DATA.find((item) => item.id === "01");

  //   const { data : singleNft, loading, error } = useFetch(`upload/getAIpfs?cid=${cid}`)
  //   console.log(singleNft)

  // useEffect(()=>{

  //   async function getData(){
  //     console.log("rendetiniefnef")
  //     let data = await axios.get("upload/getAIpfs?cid=Qme4ecqfnzHLG9EbCRwyhrdcNFiqdR5shS8CRKTMt3UMfM")
  //     console.log(data)
  //   }

  //   getData()
  //   return

  // },[cid])

  return (
    <>
      <Header/>
      <CommonSection title={/*singleNft?.medicalTitle*/ "Scanner"} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={/*singleNft?.imgUrl*/ ""}
                alt=""
                className="single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{/*singleNft?.title*/ "Title"}</h2>

                <div className=" d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className=" d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      <i className="ri-eye-line"></i> 234
                    </span>
                    <span>
                      <i className="ri-heart-line"></i> 123
                    </span>
                  </div>

                  <div className=" d-flex align-items-center gap-2 single__nft-more">
                    <span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i className="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>
                <div className="Price">Current Price :</div>
                <div className="amount">5.375 ETH</div>
                <div className="summary">Report Summary</div>
                {/* <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={singleNft?.creatorImg} alt="" className="w-100" />
                  </div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleNft?.creator}</h6>
                  </div>
                </div> */}

                <p className="Details">{/*singleNft?.desc*/ "Details"}</p>
                <button className="singleNft-btn d-flex align-items-center gap-2 w-50">
                  <i className="ri-shopping-bag-line"></i>
                  <Link to="/wallet">Buy Now</Link>
                </button>
                <button className="singleNft-btn-cart d-flex align-items-center gap-2 w-50">
                  <i className="ri-shopping-cart-line"></i>
                  <Link to="/wallet">Add to Cart</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="Report">
        <div className="disease">
          <button>
            <a data-scroll href="#opacity">
              Kidney
            </a>
          </button>
          <button>
            <a data-scroll href="#pattern">
              Skin
            </a>
          </button>
          <button>
            <a data-scroll href="#links">
              Cancer
            </a>
          </button>
          <button>
            <a data-scroll href="#scale">
              Dhruv
            </a>
          </button>
          <button>
            <a data-scroll href="#hover">
              Me
            </a>
          </button>
        </div>
        <main class="content">
        <StyledWatermark
                text="Watermark Rendering"
                style={{
                  width: 1280,
                  height: 2700,
                }}
                multiple
              >
                <div className="inner-watermark">
          <div>
            <section id="opacity" class="panel panel--green">
              <div class="panel__background"></div>
              
                  <div class="panel__content">
                    <span>
                      Kidney
                    </span>
                    <p>
                      Dreamcatcher american apparel typewriter polaroid,
                      Pinterest hoodie tousled vegan pickled gastropub iPhone
                      VHS sartorial. Fanny pack vinyl fingerstache whatever, raw
                      denim Carles literally next level fashion axe photo booth
                      pour-over Echo Park. Dreamcatcher american apparel
                      typewriter polaroid, Pinterest hoodie tousled vegan
                      pickled gastropub iPhone VHS sartorial. Fanny pack vinyl
                      fingerstache whatever, raw denim Carles literally next
                      level fashion axe photo booth pour-over Echo Park.
                      Dreamcatcher american apparel typewriter polaroid,
                      Pinterest hoodie tousled vegan pickled gastropub iPhone
                      VHS sartorial. Fanny pack vinyl fingerstache whatever, raw
                      denim Carles literally next level fashion axe photo booth
                      pour-over Echo Park. Dreamcatcher american apparel
                      typewriter polaroid, Pinterest hoodie tousled vegan
                      pickled gastropub iPhone VHS sartorial. Fanny pack vinyl
                      fingerstache whatever, raw denim Carles literally next
                      level fashion axe photo booth pour-over Echo Park.
                      Dreamcatcher american apparel typewriter polaroid,
                      Pinterest hoodie tousled vegan pickled gastropub iPhone
                      VHS sartorial. Fanny pack vinyl fingerstache whatever, raw
                      denim Carles literally next level fashion axe photo booth
                      pour-over Echo Park.
                    </p>
                  </div>
                
            </section>
          </div>

          <section id="pattern" class="panel panel--pattern">
            <div class="panel__background"></div>
            <div class="panel__content">
            <span>
                      Skin
                    </span>
              <p>
                Dreamcatcher american apparel typewriter polaroid, Pinterest
                hoodie tousled vegan pickled gastropub iPhone VHS sartorial.
                Fanny pack vinyl fingerstache whatever, raw denim Carles
                literally next level fashion axe photo booth pour-over Echo
                Park.{" "}
              </p>
            </div>
          </section>
          <section id="links" class="panel panel--grey panel--link-effect">
            {/* <Watermark content={"watermark"} gap={[50,50]} offset={[10,10]} rotate={-22} font={{color:"red",fontSize:10}} zIndex={-10}> */}
            {/* <div class="panel__background" style={styles.Container}> */}
            <div class="panel__content">
            <span>
                      Cancer
                    </span>
              <p>
                Raw denim selvage typewriter,{" "}
                <a href="#" class="inline-link">
                  thundercats viral craft
                </a>{" "}
                beer beard keffiyeh meh. 3 wolf moon american apparel mlkshk
                street art single-origin coffee. Semiotics art party tote bag,
                wayfarers banh mi messenger bag Odd Future seitan photo booth.
                Twee vinyl fingerstache, freegan narwhal semiotics irony
                sustainable vegan 3 wolf{" "}
                <a href="#" class="inline-link">
                  moon ethnic selfies
                </a>{" "}
                fixie kale chips. Odd Future chillwave twee Tonx kale chips,
                quinoa disrupt selfies art party Williamsburg Vice. Asymmetrical
                narwhal Godard, artisan single-origin coffee Bushwick hashtag{" "}
                <a href="#" class="inline-link">
                  semiotics literally disrupt pork belly
                </a>{" "}
                trust fund fashion axe typewriter +1. Master cleanse raw denim
                trust fund bitters, gluten-free farm-to-table tousled plaid
                biodiesel actually pork belly roof party polaroid.{" "}
              </p>
            </div>
            {/* </Watermark> */}
          </section>
          <section id="scale" class="panel panel--yellow panel--scale-effect">
            <div class="panel__background"></div>
            <div class="panel__content">
                    <span>
                      Skin
                    </span>
              <p>
                Raw denim selvage typewriter, thundercats viral craft beer beard
                keffiyeh meh. 3 wolf moon american apparel mlkshk street art
                single-origin coffee. Odd Future chillwave twee Tonx kale chips,
                quinoa disrupt selfies art party Williamsburg Vice. Master
                cleanse raw denim trust fund bitters, gluten-free farm-to-table
                tousled plaid biodiesel actually pork belly roof party polaroid.
              </p>
            </div>
          </section>
          </div>
              </StyledWatermark>
        </main>
      </div>
    </>
  );
};

export default BuyerNFT;
