import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./edit.css";

function Edit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [list, setlist] = useState([])
  useEffect(() => {
    retrivedata()
  }, [])

  const retrivedata = async () => {
    const result = await axios.get(`https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi/${id}`)
    setlist(result.data)
  }

  const savehandler = (e) => {
    e.preventDefault()
    setlist({ ...list, [e.target.name]: e.target.value })
  }

  const onsubmiting = async (e) => {
    e.preventDefault()
    await axios.put(`https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi/${id}`, list)
    navigate("/")
  }
  return (
    <div className='centeredit'>
      <h1>Edit Your Detailss</h1>
      <form onSubmit={onsubmiting}>
        <input type={"text"} placeholder="Enter a User" required="reqiored" value={list.user} onChange={savehandler} name="user" />
        <br />
        <br />
        <input type={"text"} placeholder="Enter a User" required="reqiored" value={list.profile} onChange={savehandler} name="profile" />
        <br />
        <br />
        <button className='sbtn'>Save</button>
      </form>
    </div>
  )
}

export default Edit;