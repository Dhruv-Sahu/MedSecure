import React from 'react'
import '../styles/spinner.css'
import heart from './heart.gif'
const Heart = () => {
  return (
    <div className="glass">

    <div className='text-center'style={{height:"100vh",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="my-3"style={{height:"40vh",overflow:"hidden",borderRadius:"50%"}} src={heart} alt="loading" />
    </div>
      </div>
  )
}

export default Heart;