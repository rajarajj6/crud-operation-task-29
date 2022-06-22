import React from 'react';
import Input from './components/input';
import Table from './components/table';
import { Link, BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Edit from './components/edit';
import Viewuser from './components/viewuser';
import Tables from './components/table';
import Header from './header';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Header />
        <br />
        <br />
        <Routes>
          <Route path='/' element={<Tables />} />
          <Route path='/adduser' element={<Input />} />
          <Route path='/edituser/:id' element={<Edit />} />
          <Route path='/viewuser/:id' element={<Viewuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;