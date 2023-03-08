import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Layout = () => {

  const {userData} = useContext(AuthContext)

  return (
    <div>
      {userData && <Header/> }
      <div>
      <Routers />
      </div>
      {userData && <Footer/> }
    </div>
  );
};

export default Layout;
