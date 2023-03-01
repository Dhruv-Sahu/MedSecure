import React, { Component , useEffect, useContext } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../styles/Nftsave.css";
import CommonSection from "../components/ui/Common-section/CommonSection";

import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

class Save extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Medical: "Kidney kidding me",
      Uid: "99988394",
      Date: "12/09/2022",
      Gender: "Female",
    };
  }

  static contextType = AuthContext

  certificateWrapper = React.createRef();
  

    componentDidMount() {
    // get all entities - GET
    fetch(`http://localhost:8080/api/v1/temp/tempData?aadharNumber=${this.context.userData?.aadharNumber}`, {
      "method": "GET",
      "headers": {
        
      }
    })
    .then(response => response.json())
    .then(response => {
      let medicalIssue = ""
      response[0].reports.map((ele)=>{
        
        medicalIssue += ele.reportTitle
        medicalIssue += ", "
        console.log(medicalIssue)
      })

      this.setState({
        Medical: medicalIssue,
        Uid: response[0].patientUid,
        Date: response[0].lastUpdate,
        Gender: response[0].gender
      })
      
      
      console.log(response)
    })
    .catch(err => { console.log(err); 
    });
  }

  
  
  render() {

    console.log("user Context : ",this.context.userData)

    return (
      <>
        <CommonSection title={"Details Verification"} />

        <div className="Save">
          <div className="Align_Left">
            <div id="downloadWrapper" ref={this.certificateWrapper}>
              <div id="certificateWrapper">
                <p className="issue">{this.state.Medical}</p>
                {/* <hr /> */}

                <h2 className="uid">{this.state.Uid}</h2>
                {/* <hr /> */}

                <h2 className="date">{this.state.Date}</h2>
                {/* <hr /> */}
                <h2 className="gender">{this.state.Gender}</h2>
                {/* <hr /> */}

                <img
                  className="NFTimg"
                  src="https://i.imgur.com/3l7dSKAh.png"
                  alt="Certificate"
                />
              </div>
            </div>
          </div>
          <div className="Meta">
            {/* 
         <input
           type="text"
           placeholder="Please enter your Uid..."
           value={this.state.Uid}
           onChange={(e) => {
             this.setState({ Uid: e.target.value });
           }}
         />
         <input
           type="text"
           placeholder="Please enter your Date..."
           value={this.state.Date}
           onChange={(e) => {
             this.setState({ Date: e.target.value });
           }}
         />
         <input
           type="text"
           placeholder="Please enter your Gender..."
           value={this.state.Gender}
           onChange={(e) => {
             this.setState({ Gender: e.target.value });
           }}
         /> */}
          </div>
          <div>
            <br></br>
            <br></br>
            <div className="para">
              <br></br>
              <h3>Verify your details entered by the hospital:</h3>
              <br />
              <p>
                The given data will be seen by the buyers accessing the
                marketplace to place an order or a bid for the NFT.
              </p>
              <p>
                The NFT given here provides encryption and gated access to your
                data that can only be accessed through the buyers authenticated
                and permitted by you.
              </p>
              <p>
                Please verify the given data and upload the same on the next
                page to confirm your willings to sell your data based on the
                price placed with accordance to the standards and can be altered
                by you.
              </p>
              <p>For further details contact your hospital/doctor.</p>
            </div>
            <button
              className="downloadImg"
              onClick={(e) => {
                e.preventDefault();
                exportComponentAsPNG(this.certificateWrapper, {
                  html2CanvasOptions: { backgroundColor: null },
                });
              }}
            ><Link to='/Uploader' >
            Download
            </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Save;