import React from 'react';

const LeftNavbar = () => {
    return (
        <div>
      
               <div className='border'>
        
            <span className=' block bg-[#FED700]'>
            <h2 className='text-center text-2xl  pb-4  font-bold '>All Categories</h2>
            </span>
        
                <ul className='space-y-4 ml-10 mt-8 text-gray-600  '>
                    <li>Televison & Audio   </li>
                    <li>Computer & Networking</li>
                    <li>Mobile & Tablets</li>
                    <li>Camera & Camcoders</li>
                    <li>Headphone & Speaker</li>
                    <li>Movies & Video Games</li>
                    <li>Smartwatch</li>
                    <li>Accessories</li>
                </ul>
               </div>
        
        </div>
    );
};

export default LeftNavbar;