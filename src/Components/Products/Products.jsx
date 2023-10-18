import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Product from './Product';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    
    const allBrandProducts= useLoaderData();
    const [brandProducts,setBrandProducts]= useState(allBrandProducts);
  



    return (
        <div >
            <Banner></Banner>
           <div className='grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-4 gap-4'>
 
                {
                    brandProducts.map(brandProduct=><Product
                        brandProduct={brandProduct}
                        key={brandProduct._id}></Product>)
                }

           </div>


        </div>
    );
};

export default Products;