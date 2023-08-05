import React from 'react'
import './Buttonimg.css'
import { AiFillPlusCircle } from 'react-icons/ai'
import axios from 'axios'
import { base_url } from '../Services/baseurl'

function Buttonimg({setUpdateUI}) {

    const handleChange = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("photo", e.target.files[0])

        axios.post(`${base_url}/upload-image`, formData)
        .then((res) => {
            console.log(res.data);
            setUpdateUI(res.data._id)
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <label className='button' htmlFor='file-picker'>
        <AiFillPlusCircle />
        <input hidden type="file" name='file-picker' id='file-picker' onChange={(e) => handleChange(e)} />
    </label>
  )
}

export default Buttonimg