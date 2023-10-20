
import { useEffect, useState } from 'react';
import Product from '../Products/Product';

const PopularProducts = ({popularProducts,isDarkMode}) => {
    console.log(popularProducts);
      const [pcProduct ,setPcProduct]=useState([])
    useEffect(()=>{
   const query=  popularProducts.filter(product=> product.type === "pc")
    setPcProduct(query)


    },[])

   
   
    return (
       <div className='max-w-7xl mx-auto'>
       <h2 className='text-2xl lg:text-3xl  text-center text-orange-400'>Our Popular Products</h2>
       <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
        {
            popularProducts.slice(0,4).map(brandProduct=> <Product isDarkMode={isDarkMode} key={brandProduct._id} publicProduct={true} brandProduct={brandProduct}></Product>)
        }

        </div>
             
        <h2 className='text-2xl lg:text-3xl  text-center text-orange-400'>Laptop && Desktop</h2>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
        {
            pcProduct.map(brandProduct=> <Product key={brandProduct._id} publicProduct={true} brandProduct={brandProduct}></Product>)
        }
         <h2> {pcProduct.length} </h2>

        </div>
       </div>
   
    );
};

export default PopularProducts;