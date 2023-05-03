import React from 'react'
import DragDropFiles from '../components/DragDrop'
import CommonSection from "../components/ui/Common-section/CommonSection";
import '../styles/uploader.css'
import { useParams } from "react-router-dom";
import Basic from '../components/Dragger'
import useFetch from "../hooks/useFetch";

const Uploader = () => {

    // const { cid } = useParams();
    // console.log("from nftdetails",cid)

    // const { data : singleNft, loading, error } = useFetch(`upload/getAIpfs?cid=${cid}`)
    // console.log(singleNft)
  return (
    <>
    {/* <CommonSection title={singleNft?.medicalTitle} /> */}
    {/* <CommonSection title="Uploader" /> */}
    <div className='containerUP'>
        <br></br>
        <h1>Uploaded</h1>
        <Basic/>
        {/* <DragDropFiles/> */}
    </div>
    </>
  )
}

export default Uploader