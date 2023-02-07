
import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import avatar from "../assets/images/ava-01.png";

import "../styles/create-item.css";



const item = {
  id: "01",
  title: "0x2155b499F7FB25031e9991cB1a059e3a15E15031",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: `https://i.imgur.com/9YpzuMkh.png`,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 7.89,
};



const Create = () => {


  const [id, setId] = useState("01")
  const [uid, setUid] = useState("0x2155b499F7FB25031e9991cB1a059e3a15E15031")


  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  {/* <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className="upload__input" />
                  </div> */}

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Last Visit On</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Valid Upto</label>
                      <input type="date" />
                    </div>
                  </div>

                  {/* <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div> */}

                  <div className="form__input">
                    <label htmlFor="">Report Details</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
