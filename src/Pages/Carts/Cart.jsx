import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    const {productName, brand,type,rating,price,description,imageUrl,_id}= cart;
    return (
        <div>
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-light">

<div className="">
     <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
         <li className="py-3 sm:py-4">
             <div className="flex items-center space-x-4">
                 <div className="">
                     <img className="w-40 h-40 rounded-full" src={imageUrl}  alt="Neil image"/>
                 </div>
                 <div className="flex-1 min-w-0 space-y-4">
                     <p className="text-2xl font-medium text-gray-900 truncate ">
                      {productName}
                     </p>
                     <p className="text-md text-gray-500 truncate dark:text-gray-400">
                         {
                            description.substring(0,40)
                         }
                     </p>
                     <p className="text-lg text-yellow-500">
                         {
                            price
                         }
                     </p>
                     <Link>    <button className='btn  btn-sm lg:btn-md'>Details</button></Link>
                 </div>
                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                     $320
                 </div>
             </div>
         </li>




     </ul>
</div>
</div>
        </div>
    );
};

export default Cart;