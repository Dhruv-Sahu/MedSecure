import React, { useEffect, useState } from "react";
import "../styles/Shipping.css";
import QRCode from "react-qr-code";
import { ethers } from "ethers";
import ABI from "../assets/ABI/shipping.json";
import db from "../components/Firebase";

import MultiStepProgressBar from "../components/MultiStepProgressBar";

// import { deleteAllUsersData } from "../components/UploadFirebase";
// let TxHash = "0x0";
// const heal = `https://goerli.etherscan.io/tx/${TxHash}`;
const abi = ABI;
const contractAddress = "0x45F8E09c7F9329F00A8782668BCF2D2A693F7E60";

// Connect to an Ethereum provider (e.g., MetaMask)
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Create a Contract instance connected to the signer
const contract = new ethers.Contract(contractAddress, abi, signer);

function deleteAllUsersData() {
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref
          .collection("data")
          .get()
          .then((dataSnapshot) => {
            dataSnapshot.forEach((dataDoc) => {
              dataDoc.ref.delete();
            });
          })
          .catch((error) => console.error("Error deleting user data:", error));
        doc.ref.delete();
      });
      console.log("All users and their data deleted successfully!");
    })
    .catch((error) =>
      console.error("Error deleting users and their data:", error)
    );
}

// above function
const Shipping = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [hash, setHash] = useState("0x0");
  const [stage, setStage] = useState(false);
  const [info, setInfo] = useState("");



  const [page, setPage] = useState(3);

  const nextPageNumber = "1"

  function handleSubmit(){
    
  }


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

    setStage(true);
  }
  const resetFunction = () => {
    setStage(false);
    deleteAllUsersData();
  };

  const handleClick = async () => {
    console.log("Handle Click pressed");
    document.querySelector(".checkpoint-3").style.display = "block";
    // document.querySelector('.checkpoint-2').style.width = '25%';
    // document.querySelector('.checkpoint-3').style.left = '75%';
    document.querySelector(".line").style.width = "100%";
    document.querySelector(".line").style.backgroundColor = "#00ff00"; // Set line color to green




    setPage((prev)=>{
      if (prev === 4){
        return 1
      }else{
        return prev+1
      }
      
    })


    // Get the first user from users array
    const firstUser = users[0].data;
    console.log(firstUser);

    // Get and log transaction hash after setting message

    const txHash = await setMessage(firstUser);
    console.log("Tx Hash onClick Function:", txHash);
    console.log("The Link:", `https://goerli.etherscan.io/tx/${txHash}`);
    setHash(txHash);

    const message1 = await getMessage();

    // Does not work shows undefined
    // console.log("message onClick Function:", message1);
    console.log("Handle Click pressed");
    document.querySelector(".checkpoint-3").style.display = "block";
    // document.querySelector('.checkpoint-2').style.width = '25%';
    // document.querySelector('.checkpoint-3').style.left = '75%';
    document.querySelector(".line").style.width = "100%";
    document.querySelector(".line").style.backgroundColor = "#  "; // Set line color to green
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 10000); // Time interval in milliseconds (1000 ms = 1 second)

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
    return () => clearTimeout(timer);
  }, [counter]);
  console.log("Users from State after useEffect", users);
  return (
    <>
    <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      <div>
        <br />
        <br />
        <br />
        <br />
        {/* <p>Counter: {counter}</p> */}
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
            <p>{info} from qr</p>
            <button
              onClick={() => {
                resetFunction();
              }}
            >
              Reset
            </button>
          </div>
        ) : (
          <div
            style={{
              // margin: "50px",
              // outline: "solid 1px black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <div>
              <FUpload />
            </div> */}
            {/* <h3>{users}</h3> */}
            <div>
              {users.map((user, index) => (
                <div key={index}>
                  <h2>
                    District - {user.data.split("-")[0]}
                    <br />
                    Time - {user.data.split("-")[1]}
                    <br />
                    Temperature - {user.data.split("-")[2]}
                    <br />
                    index is:{index}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className="row px-3"> */}
        {/* <div className="col"> */}
          {/* <ul id="progressbar">
            <li className="step0 active " id="step1">
              PLACED
            </li>
            <li className="step0 active text-center" id="step2">
              SHIPPED
            </li>
            <li className="step0  text-muted text-right" id="step3">
              DELIVERED
            </li>
          </ul> */}
          
        {/* </div> */}
      {/* </div> */}
      {/* <div class="loader">
            <div class="checkpoint checkpoint-1"></div>
            <div class="checkpoint checkpoint-2"></div>
            <div class="checkpoint checkpoint-3"></div>
            <div class="line"></div>
          </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          style={{ width: "200px" }}
          onClick={() => {
            handleClick();
          }}
        >
          Confirm Tx
        </button>
      </div>
    </>
  );
};

export default Shipping;
