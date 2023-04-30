import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function MyModal() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false)
    console.log(`Email: ${email}, Number: ${number}`);
  };
  return (
    <>
      <Button variant="primary" class="sharebtn" onClick={handleShow} style={{position:"relative",left:"85%",top:"100px",padding:"10px 40px"}}>
      <i class="fa fa-share-alt" aria-hidden="true"></i> Share
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Give NFT Access To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address:</label>
              <input type="email" value={email} onChange={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Number of days:</label>
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