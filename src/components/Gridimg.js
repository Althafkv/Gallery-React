import React, { useEffect, useState } from 'react'
import './Gridimg.css'
import Imgspinner from './Imgspinner';
import { base_url } from '../Services/baseurl';

function Gridimg({ photos }) {

  const [showspin, setShowspin] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowspin(false)
    }, 1000);
  })

  return (
    <>
      {
        showspin ? <div style={{margin:"230px"}}><Imgspinner /></div> :
          <div>
            <h3 className='fw-bold'><i className="fa-solid fa-image text-primary"></i> Gallery</h3>
            <div className="grid">
              {
                photos.map(({ photo, _id }) => (
                  <div key={_id} className='grid-item'>
                    <img src={`${base_url}/uploads/${photo}`} alt="grid-img" />
                  </div>
                ))
              }
            </div>
          </div>
      }

    </>
  )
}

export default Gridimg