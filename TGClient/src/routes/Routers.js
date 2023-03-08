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
import MyNFT from "../pages/BuyerNFT";
import Save from "../pages/NFTsave";
import Uploader from "../pages/Uploader";

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
      <Route path="/MyNFT" element={<MyNFT/>} />
      <Route path="/market/:cid" element={<NftDetails />} />
      <Route path="/Uploader" element={<Uploader />} />
      <Route path="/Save" element={<Save />} />
    </Routes>
  );
};

export default Routers;
