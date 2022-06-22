import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./input.css";

function Input() {
  const navigate = useNavigate()
  const [list, setlist] = useState({
    user: "",
    profile: ""
  })

  const inputhandler = (e) => {
    e.preventDefault()
    setlist({ ...list, [e.target.name]: e.target.value })
  }

  const submitdata = async (e) => {
    e.preventDefault()
    await axios.post("https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi", list)
    setlist({
      user: "",
      profile: ""
    })
    navigate("/")
  }
  return (
    <div className='centerinput'>
      <form onSubmit={submitdata}>
        <input type={"text"} placeholder="Enter a UserName" name="user" onChange={inputhandler} value={list.user} required="required" />
        <br />
        <br />
        <input type={"text"} placeholder="Enter a Profile" name="profile" onChange={inputhandler} value={list.profile} required="required" />
        <br />
        <br />
        <button className='sbtn'>Submit</button>
      </form>
    </div>
  )
}

export default Input;