import { useEffect, useState } from 'react';
import './App.css';
import Buttonimg from './components/Buttonimg';
import Gridimg from './components/Gridimg';
import Navbar from './components/Navbar';
import axios from 'axios';
import Footerimg from './components/Footerimg';
import { base_url } from './Services/baseurl';

function App() {

  const [photos,setPhotos] = useState([])
  const [updateUI, setUpdateUI] = useState("")

  useEffect(()=>{
    axios.get(`${base_url}/get-image`)
    .then((res)=>{
      console.log(res.data);
      setPhotos(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[updateUI])

  return (

    <>
      <Navbar />
      <Gridimg photos={photos}/>
      <Footerimg />
      <Buttonimg setUpdateUI={setUpdateUI} />
      
    </>
  );
}

export default App;
