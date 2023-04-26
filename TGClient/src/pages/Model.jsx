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
      <button style={{ marginTop: "100px" }} onClick={handleButtonClick}>
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
                  Time:
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
