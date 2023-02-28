import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../styles/Nftsave.css";

class Save extends Component {
  certificateWrapper = React.createRef();
  state = {
    Medical: "Food Poisoning",
    Uid: "",
    Date: "",
    Gender: ""
  };
  render() {
    return (
      <div className="Save">
       

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

            <img className="NFTimg"src="https://i.imgur.com/3l7dSKAh.png" alt="Certificate" />
          </div>
        </div>
        <div className="Meta">
         

         {
         /* 
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
         <button className="downloadImg"
           onClick={(e) => {
             e.preventDefault();
             exportComponentAsPNG(this.certificateWrapper, {
               html2CanvasOptions: { backgroundColor: null }
             });
           }}
         >
           Download
         </button>
       </div>
      </div>
    );
  }
}

export default Save;
