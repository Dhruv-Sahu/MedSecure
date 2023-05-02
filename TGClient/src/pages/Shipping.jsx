import React, { useEffect, useState } from "react";
import "../styles/Shipping.css";
import QRCode from "react-qr-code";
import { ethers } from "ethers";
import ABI from "../assets/ABI/shipping.json";
import db from "../components/Firebase";
import Header from "../components/Header/Header";
import MultiStepProgressBar from "../components/MultiStepProgressBar";
import Spinner from "./Spinner";
// import { deleteAllUsersData } from "../components/UploadFirebase";
// let TxHash = "0x0";
// const heal = `https://goerli.etherscan.io/tx/${TxHash}`;

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function connectWallet() {
      try {
        if (!window.ethereum) {
          alert("No Crypto Wallet Found");
          throw new Error("No Crypto Wallet Found");
        } else {
          await window.ethereum.send("eth_requestAccounts");
        }
      } catch (error) {
        alert(error.message);
      }
    }

    connectWallet();
  }, []);

  const abi = ABI;
  const contractAddress = "0x45F8E09c7F9329F00A8782668BCF2D2A693F7E60";
  // Connect to an Ethereum provider (e.g., MetaMask)
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // Create a Contract instance connected to the signer
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const [page, setPage] = useState(3);

  const nextPageNumber = "1";

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

  //MARK: HANDLE CLICK----------------
  const handleClick = async () => {
    // console.log("Handle Click pressed");
    setLoading(true);
    console.log(page, "before");
    // Get the first user from users array
    const firstUser = users[0].data;
    console.log(firstUser);

    // Get and log transaction hash after setting message

    const txHash = await setMessage(firstUser);
    console.log("Tx Hash onClick Function:", txHash);
    console.log("The Link:", `https://goerli.etherscan.io/tx/${txHash}`);
    setHash(txHash);

    const message1 = await getMessage();

    setPage((prev) => {
      if (prev === 4) {
        return 1;
      } else {
        return prev + 1;
      }
    });
    console.log(page, "after");
    setLoading(false);
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
      {/* {!loading &&} */}
      {loading && <Spinner/>}
      {!loading &&(<><Header />
      <br />
      <br />
      <br />
      <br />
      <div
        id="shipme"
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
          marginLeft: "27%",
          marginRight: "50%",
        }}
      >
        {page === 3 && (
          <div
            style={{
              // width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              height: "176px",
              fontSize: "50px",
            }}
          >
            Shipping
          </div>
        )}
        {page === 4 && (
          <div
            style={{
              // width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              position: "relative",
              height: "20px",
              fontSize: "50px",
              marginTop: "100px",
            }}
          >
            Shipping
          </div>
        )}
        {/* {page===4 &&(
          <div style={{height:"100px"}}></div>
        )} */}
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        <div>
          <br />
          <br />
          {/* <br />
          <br /> */}
          {/* <p>Counter: {counter}</p> */}
          {stage ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                flexDirection: "column",
              }}
            >
              {/* <div> */}
              <QRCode
                size={200}
                bgColor="white"
                fgColor="black"
                value={`https://goerli.etherscan.io/tx/${hash}`}
              />
              {/* </div> */}
              <br />
              <br />
              <button
                id="shipperbutton"
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
                  <div
                    key={index}
                    style={{ position: "relative", bottom: "75px" }}
                  >
                    <h2>
                      <span style={{ fontWeight: "700", color: "#664DE5" }}>
                        Location
                      </span>
                      : {user.data.split("-")[0]}
                      <br />
                      <span style={{ fontWeight: "700", color: "#664DE5" }}>
                        Time
                      </span>
                      : {user.data.split("-")[1]}
                      <br />
                      <span style={{ fontWeight: "700", color: "#664DE5" }}>
                        Temperature
                      </span>
                      : {user.data.split("-")[2]}
                      <br />
                      {/* index is:{index} */}
                    </h2>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <button
                  id="shipperbutton"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Confirm Tx
                </button>
              </div>
            </div>
          )}
        </div>
      </div></>)}
    </>
  );
};

export default Shipping;
