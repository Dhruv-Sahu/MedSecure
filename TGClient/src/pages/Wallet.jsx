import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { ethers } from "ethers";

import { useNavigate } from "react-router-dom";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Authereum",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
    icon: "ri-bit-coin-line",
  },
];



const Wallet = () => {

  const navigate = useNavigate()

  async function handleTransaction(e){
    
    try {
      if (!window.ethereum) {
        alert("No Crypto Wallet Found");
        return false;
        throw new Error("No Crypto Wallet Found");
      } else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);


         // const address = await signer.getAddress();
        // const signature = await signer.sendTransaction(
        //   "I Am Authorizing the Account"
        // );
        //dhruv

        const signer = await provider.getSigner();
        const tx = await signer.sendTransaction({
          to : "0x54c4A0192BB29e6ECB8c1C550D7405557c7b59Ca",
          value : ethers.utils.parseEther("0.2")
        })
        console.log("tx ",tx)
        alert("transaction success")
        navigate('/myorder')
      

        // console.log({
        //   signer,
        //   address,
        //   // signature,
        // });
        return true;
      }
    } catch (error) {
      return false;
    }

  }

  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <button 
                  onClick={(e)=>{
                    handleTransaction(e)
                  }}
                  >Connect Wallet</button>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima numquam nisi, quam obcaecati a provident voluptas sequi
                  unde officiis placeat!
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
