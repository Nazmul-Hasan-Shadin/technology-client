import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Product from './Product';
import { useLoaderData } from 'react-router-dom';
import BrandBanner from '../BrandBanner/BrandBanner';

const Products = () => {

    const allBrandProducts= useLoaderData();
    const [brandProducts,setBrandProducts]= useState(allBrandProducts);
    
    const [bannerImg,setBannerImg]= useState([]);
  
  
    useEffect(() => {
        // Set the banner image URLs when brandProducts change
        if (brandProducts.length > 0) {
            const brandProductImages = brandProducts.slice(0, 3).map(brandProduct => brandProduct.imageUrl);
            setBannerImg(brandProductImages);
        }
    }, [brandProducts]);



    console.log(bannerImg,'ho');
     
    return (
        <div >
            
            <BrandBanner images={bannerImg} banner={false} ></BrandBanner>
           <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
 
           
           {brandProducts.length === 0 ? (
                    <p className='text-xl md:text-3xl flex text-center  lg:w-[1200px] justify-center items-center  h-[60vh] '>No products available. Comming Soon ... </p>
                ) : (
                    brandProducts.map(brandProduct => (
                        <Product
                            brandProduct={brandProduct}
                            key={brandProduct._id}
                        ></Product>
                    ))
                )}




           </div>


      

        </div>
    );
};

export default Products;