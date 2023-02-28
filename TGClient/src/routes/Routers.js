import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import Save from "../pages/NFTsave";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
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
      <Route path="/Save" element={<Save />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/Uploader" element={<Uploader />} />
    </Routes>
  );
};

export default Routers;
