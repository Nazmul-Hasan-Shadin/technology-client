import React, { useEffect, useState } from 'react';
import BrandProduct from './BrandProduct';
import Banner from '../Banner/Banner';

const BrandProducts = () => {
    const [brand,setBrand]= useState([]);
    useEffect(()=>{
        fetch('brand.json')
        .then(res=>res.json())
        .then(data=> setBrand(data))
    },[])
    return (
        <>
       
            <div className='grid  place-items-center'>
            <h2 className='text-2xl my-4 text-yellow-400'>Our Brands Product</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3  '>
       
            {
             brand.map(brand=> <BrandProduct key={brand.id} brand={brand}></BrandProduct>)
            }
        </div>
        </div>
        
        </>
       

  
    );
};

export default BrandProducts;