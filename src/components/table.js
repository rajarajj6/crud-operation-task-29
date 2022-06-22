import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import "./table.css";


function Tables() {
  const [userlist, setuserlist] = useState([])

  useEffect(() => {
    retrivedata()
  }, [])

  const retrivedata = async () => {
    const result = await axios.get("https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi")
    setuserlist(result.data)
  }

  const redisplay = async () => {
    let result = await axios.get("https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi")
    setuserlist(result.data)
  }

  const deletehandler = async (e, id) => {
    e.preventDefault()
    await axios.delete(`https://62127c45f43692c9c6ec1fa3.mockapi.io/fetchapi/${id}`)
    redisplay()
  }
  return (
    <div className='centertable'>
      <h1>List of Users and their Details</h1>
      <table className='tablebody'>
        <thead>
          <tr>
            <th>SL.NO</th>
            <th>User</th>
            <th>Profile</th>
            <th colSpan={"3"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            userlist.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.user}</td>
                  <td>{item.profile}</td>
                  <td>
                    <NavLink to={`/viewuser/${item.id}`} ><button className="vbtn">View</button></NavLink>

                  </td>
                  <td>
                    <NavLink to={`/edituser/${item.id}`} > <button className="ebtn">Edit</button></NavLink>
                  </td>
                  <td>
                    <button onClick={(e) => deletehandler(e, item.id)} className="dbtn">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Tables;