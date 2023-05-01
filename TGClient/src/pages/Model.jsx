import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from "../context/axios";

function MyModal({cid, name}) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(false)

    console.log(`Email: ${email}, Number: ${number}`, cid);

    let expirationTime = Date.now() + (number * 24 * 60 * 60 * 1000 )
    let linkGenerated = `http://localhost:3000/tempNFT?cid=${cid}&time=${expirationTime}`


    let emailObj = {
      name : name,
      email : email,
      link : linkGenerated
    }

    const res = await axios.post("/auth/referMail", emailObj);


    console.log(linkGenerated)


  };
  return (
    <>
      <Button variant="primary" class="sharebtn" onClick={handleShow} style={{position:"relative",left:"85%",top:"100px",padding:"15px 22px", fontSize : "22px", borderRadius : "50%"}}>
        <i class="ri-user-shared-2-line"></i>     
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Give NFT Access To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <input type="email" value={email} onChange={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <br />
            <div class="form-group">
              <input type="tel" value={number} onChange={handleNumberChange} class="form-control" id="exampleInputPassword1" placeholder="Number of days" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyModal;