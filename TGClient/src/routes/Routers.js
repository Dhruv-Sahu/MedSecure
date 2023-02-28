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
import BuyerNFT from "../pages/BuyerNFT";

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
      <Route path="/buyernft" element={<BuyerNFT/>} />
      <Route path="/market/:cid" element={<NftDetails />} />
    </Routes>
  );
};

export default Routers;
