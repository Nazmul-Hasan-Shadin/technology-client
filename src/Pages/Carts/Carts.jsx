import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';


const Carts = () => {
    const cartsItems= useLoaderData();
    const [cart,setCart]= useState(cartsItems)

    console.log(cartsItems);

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto'>
         
            {
                cart.map((cart)=> <Cart cart={cart} key={cart._id}></Cart>)
            }

        </div>
    );
};

export default Carts;