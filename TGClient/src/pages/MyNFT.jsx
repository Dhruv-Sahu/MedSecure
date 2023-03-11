import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";

import { Link } from "react-router-dom";

import NftCard from "../components/ui/Nft-card/NftCard";
import useFetch from "../hooks/useFetch";

import "../styles/market.css";
import "../styles/mynft.css";

function MyNFT() {
  const { data, loading, error } = useFetch("upload/transaction?id=640854a799d0f29e2b20550c");

  return (
    <div className="mynft">
      <CommonSection title={"MY NFT"} />
      <section>
        <Container>
          <Row>
            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <Link to={"/viewNFT"} >
                  <NftCard item={item} MyNFT />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default MyNFT;
