import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Viewuser() {
  const navigate = useNavigate()
  const [list, setlist] = useState([])
  const { id } = useParams()
  useEffect(() => {
    retrivedata()
  }, [])

  const retrivedata = async () => {
    const result = await axios.get(`https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi/${id}`)
    setlist(result.data)
  }
  return (
    <div className='viewcenter'>
      <h1>ID of the user : {list.id}</h1>
      <h1>Name of the user ; {list.user}</h1>
      <h1>Profile of the User : {list.profile}</h1>
      <button onClick={() => navigate("/")} className="backbtn">Back To Table</button>
    </div>
  )
}

export default Viewuser;