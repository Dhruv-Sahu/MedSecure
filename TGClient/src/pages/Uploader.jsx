import React from 'react'
import DragDropFiles from '../components/DragDrop'
import '../styles/uploader.css'
import Basic from '../components/Dragger'

const Uploader = () => {
  return (
    <div className='containerUP'>
        <br></br>
        <h1>Uploader</h1>
        <Basic/>
        {/* <DragDropFiles/> */}
    </div>
  )
}

export default Uploader