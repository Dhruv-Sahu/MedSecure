// import React from "react";
// import "../styles/orderSummary.css";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import { ethers } from "ethers";

// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
// import ordersummary from "../assets/images/ordersummary.jpg";
// import axios from "../context/axios";

// //TODO: need to add cid to the transactio of the user

// function OrderSummary() {
//   const { userData } = useContext(AuthContext);
//   console.log(userData);
  
//   const { cid } = useParams();
//   const { data, loading, error } = useFetch(`upload/getAIpfs?cid=${cid}`);
//   console.log("orderSummary : ", data);
//   // console.log(data.sellerWalletAddress);

//   function dateTime() {
//     var currentdate = new Date();
//     var datetime =
//       currentdate.getDate() +
//       "/" +
//       (currentdate.getMonth() + 1) +
//       "/" +
//       currentdate.getFullYear() +
//       " @ " +
//       currentdate.getHours() +
//       ":" +
//       currentdate.getMinutes() +
//       ":" +
//       currentdate.getSeconds();

//     return datetime;
//   }

//   async function handleTransaction(e) {
//     e.preventDefault()
//     const transactionTime = dateTime();
//     console.log("working")
//     try {
//       if (!window.ethereum) {
//         alert("No Crypto Wallet Found");
//         return false;
//         throw new Error("No Crypto Wallet Found");
//       } else {
//         await window.ethereum.send("eth_requestAccounts");
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = await provider.getSigner();

//         //TODO: SMART CONTRACT TRANSACTION

//         const tx = await signer.sendTransaction({
//           to : "0x54c4A0192BB29e6ECB8c1C550D7405557c7b59Ca",
//           value : ethers.utils.parseEther("0.2")
//         })
//         console.log("tx ",tx)
//         alert("transaction success")


//         //TODO: SAVING TRANSACTION TO THE SERVER
//         try {
//           const res = await axios.post("/auth/transaction", {
//             id: userData._id,
//             transaction: {
//               cid: cid,
//               transactionTime,
//             },
//           });
//         } catch (error) {
//           alert(error);
//         }



//         return true;
//       }
//     } catch (error) {
//       return false;
//     }
//   }

//   return (
//     <div className="orderSummary"style={{marginTop:"20px"}}>
//       <div class="container">
//           <img
//             src={ordersummary}
//             alt="Take-Away-pana-1"
//             border="0"
//             height="330px"
//           />
//         {/* <div class="hero">
//         </div> */}
//         <div class="text-content">
//           <h2 class="title">Order Summary</h2>
//           <div class="plan-box">
//             <div class="plan-box-left">
//               <div>
//                 {data?.reports &&
//                   data?.reports.map((report, key) => {
//                     console.log(key);
//                     return (
//                       <>
//                         <div className="bill" key={key}>
//                           <h5>{`Report - ${key}`}</h5>
//                           <p>{report.reportTitle}</p>
//                         </div>
//                         <hr />
//                       </>
//                     );
//                   })}
//               </div>
//             </div>
//             {/* <a href="#">Change</a> */}
//           </div>
//           <a href="#" class="proceed-btn" onClick={(e) => handleTransaction(e)}>
//             Pay
//           </a>

//           <a href="#" class="cancel-btn">
//             Cancel Order
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderSummary;











import React from "react";
import "../styles/orderSummary.css";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ethers } from "ethers";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "../context/axios";
import ordersummary from "../assets/images/ordersummary.jpg";
import MedSecureABI from "../assets/ABI/Medsecure.json";
const MedSecureContractAddress = "0x42CE3CB849f806074ce5B29A0928fa3fD341b32b";

//TODO: need to add cid to the transactio of the user

function OrderSummary() {
  const { userData } = useContext(AuthContext);
  console.log(userData);

  const { cid } = useParams();
  const { data, loading, error } = useFetch(`upload/getAIpfs?cid=${cid}`);
  console.log("orderSummary : ", data);
  console.log(data.sellerWalletAddress);
  const patientAddress = data.sellerWalletAddress;

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

  async function handleTransaction(e, patientAddress) {
    e.preventDefault();
    console.log("working");
    const transactionTime = dateTime();
    try {
      if (!window.ethereum) {
        alert("No Crypto Wallet Found");
        throw new Error("No Crypto Wallet Found");
      } else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();

        // Connect to the deployed MultiSend smart contract
        const multiSendContract = new ethers.Contract(
          MedSecureContractAddress,
          MedSecureABI,
          signer
        );

        // Define the addresses and amounts you want to send ETH to
        const addresses = [
          "0x54c4A0192BB29e6ECB8c1C550D7405557c7b59Ca", //LTTS public address
          patientAddress, // Replace with your desired destination addresses
        ];
        const amounts = [
          ethers.utils.parseEther("0.1"),
          ethers.utils.parseEther("0.1"), // Replace with the amounts you want to send (in ETH)
        ];

        // Calculate the total amount of ETH to send
        const totalAmount = amounts.reduce(
          (a, b) => a.add(b),
          ethers.constants.Zero
        );

        // Call the sendETHToMultipleAddresses function on the smart contract
        const tx = await multiSendContract.sendETHToMultipleAddresses(
          addresses,
          amounts,
          { value: totalAmount }
        );
        await tx.wait();

        console.log("Transaction successful");
        alert("Transaction successful");
      }
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
    } catch (error) {
      console.error(error);
    }
  }
  //TODO: SMART CONTRACT TRANSACTION

  // const tx = await signer.sendTransaction({
  //   to: "0x54c4A0192BB29e6ECB8c1C550D7405557c7b59Ca",
  //   value: ethers.utils.parseEther("0.2"),
  // });
  // console.log("tx ", tx);
  // alert("transaction success");

  // async function sendTransactions(signer) {
  //   // Transaction to the first wallet address
  //   const tx1 = await signer.sendTransaction({
  //     to: "0x54c4A0192BB29e6ECB8c1C550D7405557c7b59Ca",
  //     value: ethers.utils.parseEther("0.1"),
  //   });

  //   // Transaction to the second wallet address
  //   const tx2 = await signer.sendTransaction({
  //     to: patientAddress,
  //     value: ethers.utils.parseEther("0.1"),
  //   });

  //   // Wait for both transactions to be mined
  //   await Promise.all([tx1.wait(), tx2.wait()]);

  //   console.log("Both transactions have been sent successfully");
  // }

  // Usage example:
  // sendTransactions(signer).catch(console.error);

  //TODO: SAVING TRANSACTION TO THE SERVER
  //       try {
  //         const res = await axios.post("/auth/transaction", {
  //           id: userData._id,
  //           transaction: {
  //             cid: cid,
  //             transactionTime,
  //           },
  //         });
  //       } catch (error) {
  //         alert(error);
  //       }

  //       return true;
  //     }
  //   } catch (error) {
  //     return false;
  //   }
  // }

  return (
    <div className="orderSummary"style={{marginTop:"20px"}}>
      <div class="container">
        <div class="hero">
          <img src={ordersummary} alt="Take-Away-pana-1" border="0" height="330px"/>
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
          <a
            href="#"
            class="proceed-btn"
            onClick={(e) => handleTransaction(e, patientAddress)}
          >
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