// import React, { Component } from "react";
// import { exportComponentAsPNG } from "react-component-export-image";

// class App extends Component {
//   certificateWrapper = React.createRef();
//   state = {
//     Medical: "",
//     Uid: "",
//     Date: "",
//     Gender: ""
//   };
//   render() {
//     return (
//       <div className="App">
//         <div className="Meta">
//           <h1>ACM Certificates</h1>
//           <p>Please enter your Details.</p>
//           <input
//             type="text"
//             placeholder="Please enter your Disease..."
//             value={this.state.Medical}
//             onChange={(e) => {
//               this.setState({ Medical: e.target.value });
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Please enter your Uid..."
//             value={this.state.Uid}
//             onChange={(e) => {
//               this.setState({ Uid: e.target.value });
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Please enter your Date..."
//             value={this.state.Date}
//             onChange={(e) => {
//               this.setState({ Date: e.target.value });
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Please enter your Gender..."
//             value={this.state.Gender}
//             onChange={(e) => {
//               this.setState({ Gender: e.target.value });
//             }}
//           />
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               exportComponentAsPNG(this.certificateWrapper, {
//                 html2CanvasOptions: { backgroundColor: null }
//               });
//             }}
//           >
//             Download
//           </button>
//         </div>

//         <div id="downloadWrapper" ref={this.certificateWrapper}>
//           <div id="certificateWrapper">
//             <p className="issue">{this.state.Medical}</p>
//             {/* <hr /> */}

//             <h2 className="uid">{this.state.Uid}</h2>
//             {/* <hr /> */}

//             <h2 className="date">{this.state.Date}</h2>
//             {/* <hr /> */}
//             <h2 className="gender">{this.state.Gender}</h2>
//             {/* <hr /> */}

//             <img src="https://i.imgur.com/9YpzuMkh.png" alt="Certificate" style={{width:'100px',height:'100px'}}/>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
