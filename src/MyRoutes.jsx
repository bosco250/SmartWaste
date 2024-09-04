import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import App from './App';
import Register from './Components/Auth/Register';
import About from './Components/About/About';
import OutletFile from './Components/Layout/OutletFile';

function MyRoutes() {
  return (
    <Routes>
      <Route element={<OutletFile/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>} />      
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login />} />
      
    </Routes>
  );
}

export default MyRoutes;
