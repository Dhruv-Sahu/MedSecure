import React, { useEffect, useState } from "react";
import Heart from "./Heart";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
// import MyModal from "./Model";
import { Link } from "react-router-dom";

import NftCard from "../components/ui/Nft-card/NftCard";
import useFetch from "../hooks/useFetch";

import "../styles/market.css";
import "../styles/mynft.css";

import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function MyNFT() {
  const { userData } = useContext(AuthContext);
  // console.log(userData,"diptanshu mkc diptanshu mkc diptanshu mkc diptanshu mkc diptanshu mkc diptanshu mkc diptanshu mkc");

  const { data, loading, error } = useFetch(
    `upload/transaction?id=${userData?._id}`
  );

  return (
    <>
      {loading && <Heart />}
      {!loading && (
        <>
        {/* <MyModal/> */}
          <div className="mynft">
            <CommonSection title={"MY NFT"} />
            <section>
              <Container>
                <Row>
                  {data &&
                    data?.map((item) => (
                      <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                        <Link to={`/viewNFT/${item.cid.cid}`}>
                          <NftCard item={item} MyNFT />
                        </Link>
                      </Col>
                    ))}
                  {data.length == 0 && <h1>You don't have any NFT</h1>}
                </Row>
              </Container>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default MyNFT;
