import React from 'react';
import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';


export default function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </BrowserRouter>
  );
}
