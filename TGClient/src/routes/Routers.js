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

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
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
