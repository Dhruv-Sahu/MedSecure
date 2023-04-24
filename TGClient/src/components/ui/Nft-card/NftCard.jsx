import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nft-card.css";
// designing the card is present in live-auction

import Modal from "../Modal/Modal";

import NftImage from "../Nft-image/NftImage";

const NftCard = (props) => {
  const { patientUid, cid, currentBid, expiredOn, imgUrl, lastUpdate, hospitalName } =
    props.item;
  const [showModal, setShowModal] = useState(false);

  //MARK: FOR MY-NFT PAGE 
  if (props.MyNFT) {
    return (
      <div className="single__nft__card">
        <div className="nft__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="nft__content">
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
        </div>
      </div>
    );
  } 
  //MARK: MARKET PLACE NFT 
  else {
    return (
      <div className="single__nft__card">
        {/* <div className="nft__img">
          <NftImage img = {imgUrl} />
        </div> */}

        <div className="nft__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="nft__content">
          <h5 className="nft__title">
            <Link to={`/market/${cid?.cid}`}>{hospitalName}</Link>
          </h5>

          <div className="creator__info-wrapper d-flex gap-3">
            {/* <div className="creator__img">
              <img src={creatorImg} alt="" className="w-100" />
            </div> */}

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
            <button
              className="bid__btn d-flex align-items-center gap-1"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-shopping-bag-line"></i> Place Bid
            </button>

            {showModal && <Modal setShowModal={setShowModal} />}
            <span className="history__link">
              <Link to="#">
                Amount:{" "}
                <span style={{ fontWeight: 600 }}>{currentBid} ETH </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default NftCard;
