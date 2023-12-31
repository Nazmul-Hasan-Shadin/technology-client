import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
             <Navbar></Navbar>
          <div className='max-w-7xl mx-auto'>
          <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Main;