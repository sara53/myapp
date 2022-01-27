import React, { useState } from 'react';

import Error from './components/Error';
import Home from './components/Home';
import About from './components/About';



import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom';
import Nav from './components/Nav';



export default function App() {


  return (
    <>
    <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Navigate to="/" />}/>
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </BrowserRouter>
    </>

  );
}