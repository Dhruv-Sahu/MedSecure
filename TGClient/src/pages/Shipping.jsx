import React, { useEffect, useState } from "react";
import "../styles/Shipping.css";
import QRCode from "react-qr-code";
import { ethers } from "ethers";
import ABI from "../assets/ABI/shipping.json";
import db from "../components/Firebase";
import FUpload from "../components/UploadFirebase";
// let TxHash = "0x0";
// const heal = `https://goerli.etherscan.io/tx/${TxHash}`;
const abi = ABI;
const contractAddress = "0x45F8E09c7F9329F00A8782668BCF2D2A693F7E60";

// Connect to an Ethereum provider (e.g., MetaMask)
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Create a Contract instance connected to the signer
const contract = new ethers.Contract(contractAddress, abi, signer);

// above function
const Shipping = () => {
  const [users, setUsers] = useState([]);
  const [hash, setHash] = useState("0x0");
  const [stage, setstage] = useState(false);
  const [info, setInfo] = useState("");
  async function setMessage(message) {
    // Encode the setMessage function call with parameters
    const iface = new ethers.utils.Interface(abi);
    const encodeData = iface.encodeFunctionData("setMessage", [message]);

    // Create a tx object with the encoded data and destination address
    const tx = {
      to: contractAddress,
      data: encodeData,
      gasLimit: ethers.utils.hexlify(100000),
    };

    // Sending transaction to be mined
    const response = await signer.sendTransaction(tx);

    // Wait for the transaction to be mined
    await response.wait();

    // Return transaction hash
    return response.hash;
  }

  async function getMessage() {
    // Call the getMessage function in your smart Contract
    const result = await contract.getMessage();
    console.log("Stored message:", result);
    setInfo(result);

    // does not work gives undefined:
    // console.log("Tx Hash", result.hash);

    setstage(true);
  }

  const handleClick = async () => {
    console.log("Handle Click pressed");
    // Get and log transaction hash after setting message
    const txHash = await setMessage(info);
    console.log("Tx Hash onClick Function:", txHash);
    console.log("The Link:", `https://goerli.etherscan.io/tx/${txHash}`);
    setHash(txHash);
    const message1 = await getMessage();
    // Does not work shows undefined
    // console.log("message onClick Function:", message1);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data thru function");
      const userCollection = await db.collection("users").get();
      setUsers(
        userCollection.docs.map((doc) => {
          doc.data();
          console.log("setUsers entered", doc.data());
          return doc.data();
        })
      );
    };
    fetchData();
  }, []);
  console.log("Users from State after useEffect", users);
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />

        {stage ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "650px",
            }}
          >
            <QRCode
              size={200}
              bgColor="white"
              fgColor="black"
              value={`https://goerli.etherscan.io/tx/${hash}`}
            />
            <p>{info}this is info </p>
          </div>
        ) : (
          <div>
            <div>
              <FUpload />
            </div>
            <div>
              {users.map((user, index) => (
                <div key={index}>
                  <h3>This is user data</h3>
                  <h2>{user.data}</h2>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Confirm Tx
            </button>
          </div>
        )}
      </div>
      <div className="row px-3">
        <div className="col">
          <ul id="progressbar">
            <li className="step0 active " id="step1">
              PLACED
            </li>
            <li className="step0 active text-center" id="step2">
              SHIPPED
            </li>
            <li className="step0  text-muted text-right" id="step3">
              DELIVERED
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Shipping;
