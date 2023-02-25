
import React, { Component, useEffect } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import avatar from "../assets/images/ava-01.png";
import axios from '../context/axios'


import "../styles/create-item.css";



const Create = () => {


  let item = {
    id: "01",
    title: "0x2155b499F7FB25031e9991cB1a059e3a15E15031",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: `https://i.imgur.com/9YpzuMkh.png`,
    currentBid: 7.89,
  };



 
  const [id, setId] = useState("01")

  //user view
  const [img, setImg] = useState("https://i.imgur.com/9YpzuMkh.png")
  const [title, setTitle] = useState("0x2155b499F7FB25031e9991cB1a059e3a15E15031")
  const [expiredOn, setexpiredOn] = useState("")
  const [lastUpdate, setlastUpdate] = useState("")
  const [currentBid, setCurrentBid] = useState(7.10)
  const [medicalIssue, setmedicalIssue] = useState("")

  //details stored in IPFS
  const [medicalTitle, setMedicalTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [gender, setGender] = useState("")


  async function handleSubmit(e){
    e.preventDefault()

    console.log(img,title,expiredOn,lastUpdate,currentBid,medicalIssue,medicalTitle,desc,gender)

    let data = {
      id: id,
      title: title,
      currentBid: currentBid,
      imgUrl: `https://i.imgur.com/9YpzuMkh.png`,
      expiredOn: expiredOn,
      lastUpdate: lastUpdate,
      currentBid: currentBid,
      medicalIssue: medicalIssue,

      gender: gender,
      medicalTitle: medicalTitle,
      desc: desc,
    }

    const res = await axios.post('/upload/uploadIpfs', data)
    console.log(res)

  }


  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
             <Col lg="3" md="4" sm="6">
               <h5 className="mb-4 text-light">Preview Item</h5>
               <NftCard item={item} />
             </Col>

             <Col lg="9" md="8" sm="6">
               <div className="create__item">
                 <form>
                                     {/* <div className="form__input">
                    <label htmlFor="">Upload File</label>
                     <input type="file" className="upload__input" />
                   </div> */}

                  <div className="form__input">
                    <label htmlFor="">Medical Issue</label>
                    <input
                      type="text"
                      placeholder="Enter the medical issue terms"
                      onChange={(e)=>{
                        let inputData = e.target.value.split(" ")
                        setmedicalIssue(inputData)
                      }}
                      
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Amount</label>
                    <input 
                      type="number" 
                      placeholder="Enter minimum bid" 
                      onChange={(e)=>{
                        setCurrentBid(e.target.value)
                      }}
                    />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Gender</label>
                      <input 
                        type="Text" 
                        placeholder="Enter you Gender"
                        onChange={(e)=>{
                          setGender(e.target.value)
                        }}
                      />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor=""> Last Update </label>
                      <input 
                        type="date"
                        onChange={(e)=>{
                          setlastUpdate(e.target.value)
                        }}
                      />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Valid Upto</label>
                      <input 
                        type="date"
                        onChange={(e)=>{
                          setexpiredOn(e.target.value)
                        }}
                        />
                      
                    </div>

                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter title"
                      onChange={(e)=>{
                        setMedicalTitle(e.target.value)
                      }}
                      />
                  </div>


                  <div className="form__input">
                    <label htmlFor="">Report Details</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                      onChange={(e)=>{
                        setDesc(e.target.value)
                      }}
                    ></textarea>
                  </div>


                  <div className="form__input">
                    <button onClick={(e)=>{
                      handleSubmit(e)
                    }} > Submit </button>
                  </div>

                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
