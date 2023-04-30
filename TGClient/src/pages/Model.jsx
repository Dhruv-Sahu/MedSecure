import React, { useState } from "react";
import { fashare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyModal(props) {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  {
    <i class="fa fa-share-alt" aria-hidden="true"></i>;
  }
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleTimeChange(event) {
    setNumber(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${email} Days: ${number} cid: ${props.cid}`);
    // Here you can handle the form submission, such as sending the data to a server
  }
  return (
    <div>
      <button style={{ marginTop: "100px",display: "inline-flex",border: "none",outline: "none",padding: "5px 22px",background: "transparent",fontsize: "0.9rem",color:" #fff",margin: "0 20px",width: "170px",fontsize: "large",borderRadius: "5px",transition: "0.3s",background: "#2684ff",textDecoration: "none",justifyContent: "space-evenly"}} onClick={handleButtonClick} class="share button">
        <i class="fa fa-share-alt" aria-hidden="true"></i> Share
      </button>
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>
                <br />
                <label>
                  To be shared for:
                  <input type="number" value={number} onChange={handleTimeChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyModal;
