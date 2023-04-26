import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Myorder from "../pages/Myorder";
import Verification from "../pages/Verification";
import ViewNFT from "../pages/BuyerNFT";
// import TempNFT from "../pages/TempNFT";
import Save from "../pages/NFTsave";
import Uploader from "../pages/Uploader";
import OrderSummary from "../pages/OrderSummary";
import MyNFT from "../pages/MyNFT";
import TempNFT from "../pages/TempNFT";
import Templink from "../pages/Templink";

// import Admin from "../pages/Admin";

import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Routers = () => {

  const {userData} = useContext(AuthContext)
  console.log("from route page",userData)

  return (
    <Routes>
      <Route 
        path="/" 
        element={ 
          userData?.userType === "Buyer" || userData?.userType === "Seller" ? <Navigate to="/home"/> :  
          userData?.userType === "Hospital" ? <Create/> : <Login/>} 
      />
      <Route path="/home" element = { userData?.userType === "Buyer" || userData?.userType === "Seller" ? <Home /> : <Login/> } />
      <Route path="/market" element = {userData?.userType === "Buyer" || userData?.userType === "Seller" ? <Market/> : <Login/> } /> 
      <Route path="/create" element={ userData?.userType === "Hospital" ? <Create/> : <Login/> } />
      <Route path="/contact" element={ userData ? <Contact/> : <Login/> } />

      <Route path="/wallet" element={<Wallet />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/myorder" element={<Myorder/>} /> 
      <Route path="/verification" element={<Verification/>} />
      <Route path="/viewNFT/:cid" element={<ViewNFT/>} />
      <Route path="/templink" element={<Templink/>} />
      <Route path="/tempnft" element={<TempNFT/>} />
      <Route path="/market/:cid" element={<NftDetails />} />
      <Route path="/Uploader" element={<Uploader />} />
      <Route path="/Save" element={<Save />} />
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path="/orderSummary/:cid" element= {<OrderSummary/>} ></Route>

      <Route path="/MyNFT" element={<MyNFT/>}></Route>
    </Routes>
  );
};

export default Routers;
