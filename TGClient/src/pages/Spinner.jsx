import React from 'react'
import '../styles/spinner.css'
import loader from './loader.gif'

const Spinner = () => {
    return (
      <div className="glass">
      <div className='text-center'style={{height:"100vh",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="my-3"style={{height:"40vh",overflow:"hidden",borderRadius:"50%"}} src={loader} alt="loading" />
      </div>
      </div>
    )
  }
export default Spinner;