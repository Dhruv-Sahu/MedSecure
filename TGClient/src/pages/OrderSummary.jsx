import React from "react";
import "../styles/orderSummary.css";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ethers } from "ethers";

import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import axios from "../context/axios";

//TODO: need to add cid to the transactio of the user

function OrderSummary() {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  const { cid } = useParams();
  const { data, loading, error } = useFetch(`upload/getAIpfs?cid=${cid}`);
  console.log("orderSummary : ", data);

  function dateTime() {
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    return datetime;
  }

  async function handleTransaction(e) {
    e.preventDefault()
    const transactionTime = dateTime();
    console.log("working")
    try {
      if (!window.ethereum) {
        alert("No Crypto Wallet Found");
        return false;
        throw new Error("No Crypto Wallet Found");
      } else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();

        //TODO: SMART CONTRACT TRANSACTION

        const tx = await signer.sendTransaction({
          to : "0x54c4A0192BB29e6ECB8c1C550D7405557c7b59Ca",
          value : ethers.utils.parseEther("0.2")
        })
        console.log("tx ",tx)
        alert("transaction success")


        //TODO: SAVING TRANSACTION TO THE SERVER
        try {
          const res = await axios.post("/auth/transaction", {
            id: userData._id,
            transaction: {
              cid: cid,
              transactionTime,
            },
          });
        } catch (error) {
          alert(error);
        }



        return true;
      }
    } catch (error) {
      return false;
    }
  }

  return (
    <div className="orderSummary">
      <div class="container">
        <div class="hero">
          <img
            src="https://i.ibb.co/12BM4Fg/Take-Away-pana-1.png"
            alt="Take-Away-pana-1"
            border="0"
          />
        </div>
        <div class="text-content">
          <h2 class="title">Order Summary</h2>
          <div class="plan-box">
            <div class="plan-box-left">
              <div>
                {data?.reports &&
                  data?.reports.map((report, key) => {
                    console.log(key);
                    return (
                      <>
                        <div className="bill" key={key}>
                          <h5>{`Report - ${key}`}</h5>
                          <p>{report.reportTitle}</p>
                        </div>
                        <hr />
                      </>
                    );
                  })}
              </div>
            </div>
            {/* <a href="#">Change</a> */}
          </div>
          <a href="#" class="proceed-btn" onClick={(e) => handleTransaction(e)}>
            Pay
          </a>

          <a href="#" class="cancel-btn">
            Cancel Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
