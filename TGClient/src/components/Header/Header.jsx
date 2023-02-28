import React, { useRef, useEffect, useState, useContext } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import { ethers } from "ethers";

import { Web3Context } from "../../context/web3Context";
import logo from '../../assets/images/logomed.jpeg'

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {

  const { userMetamask } = useContext(Web3Context);

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const [publicAddress, setPublicAddress] = useState("null");

  const [currentContractVal, setCurrentContractVal] = useState(null);

  //ether js variables
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  //button variale
  const [loading, setLoading] = useState(false);


  // contract details
  let contract_ABI = [
    "function deployContractakl(int _years, string memory _name, address _userAddress, string memory _dateOfAgreement) public",
    "function getAddr() public view returns(address)",
  ];

  let contractAdd = "0x2Bdf8FE2F02c4802b2814c4bc844a7ea5547F1b3";

  function connectWalletHandler(e) {
    e.preventDefault();
    if (window.ethereum) {
      //requesting accounts
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangedHandler(result[0]);
          setPublicAddress(result[0]);
          console.log(result[0]);
          setConnButtonText("Wallet Connected");
        });
    } else {
      setErrorMessage("Metamask Not Present");
      alert("Metamask Not Present")
    }
  }

  function accountChangedHandler(newAccount) {
    setDefaultAccount(newAccount);
    updateEthers();
  }

  function updateEthers() {
    //only read functionality
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    //read and write functionality has access to pseudokey
    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    // aruguments are : 1.contractAddress, 2.contract_ABI, 3. signer
    let tempContract = new ethers.Contract(
      contractAdd,
      contract_ABI,
      tempSigner
    );
    setContract(tempContract);
    console.log("signer :", tempSigner);

    userMetamask({
      signer: tempSigner,
    });
  }



  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                {/* <i class="ri-shield-cross-fill"></i> */}
                <img src={logo} alt="" />
              </span>
              MedSecure
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              {/* <Link to="/wallet">Connect Wallet</Link> */}
              <Link to="#" onClick={(e)=>{
                connectWalletHandler(e)
              }} >{connButtonText}</Link>

            </button>

            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
