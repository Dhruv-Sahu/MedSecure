import React from 'react'
import "./nftimage.css";

function NftImage({img}) {
  return (

    <div className='NftImage'>
        <img src={img} alt="" className="w-100" />
        <div className="tags">
            <p>Dhruv </p>
            <p>DLKNC</p>
            </div>
            <div className="date">
                <p>12-02-23</p>
        </div>
        </div>
  )
}

export default NftImage