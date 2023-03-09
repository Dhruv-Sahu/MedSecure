import React, { useEffect } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import "../styles/nft-details.css";
import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import axios from "../context/axios";

const NftDetails = () => {
  const { cid } = useParams();
  console.log("from nftdetails",cid)

  // const singleNft = NFT__DATA.find((item) => item.id === "01");

  const { data : singleNft, loading, error } = useFetch(`upload/getAIpfs?cid=${cid}`)
  console.log(singleNft)


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
      <CommonSection title={singleNft?.hospitalName} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft?.imgUrl}
                alt=""
                className="single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleNft?.title}</h2>

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
                <div className="Price">
                  Current Price :
                </div>
                <div className="amount">
                  5 ETH
                </div>
                <div className="summary">
                  Report Summary
                </div>
                {/* <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={singleNft?.creatorImg} alt="" className="w-100" />
                  </div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleNft?.creator}</h6>
                  </div>
                </div> */}

                <p className="Details">{singleNft?.desc}</p>
                <button className="singleNft-btn d-flex align-items-center gap-2 w-50">
                  <i className="ri-shopping-bag-line"></i>
                  <Link to={`/orderSummary/${cid}`}>Buy Now</Link>
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

      <LiveAuction />
    </>
  );
};

export default NftDetails;
