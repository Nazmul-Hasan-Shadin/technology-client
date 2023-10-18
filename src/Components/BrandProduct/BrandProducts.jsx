import React, { useEffect, useState } from 'react';
import BrandProduct from './BrandProduct';

const BrandProducts = () => {
    const [brand,setBrand]= useState([]);
    useEffect(()=>{
        fetch('brand.json')
        .then(res=>res.json())
        .then(data=> setBrand(data))
    },[])
    return (
         <div className='w-[370px] lg:w-full mx-auto'>
                 <h2 className='text-3xl mx-auto text-yellow-400 w-80 my-5'>Our Dedicated Brand</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto  '>
       
            {
             brand.map(brand=> <BrandProduct key={brand.id} brand={brand}></BrandProduct>)
            }
        </div>
         </div>
    );
};

export default BrandProducts;