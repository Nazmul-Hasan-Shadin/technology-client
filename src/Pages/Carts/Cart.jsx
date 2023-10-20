import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Cart = ({cart,setCart,singleCart}) => {

   
    const {productName, brand,type,rating,price,description,imageUrl,_id}= singleCart;



    const handleDelete=(id)=>{
        console.log(id);

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/delete/${id}`,{
                method: 'DELETE'
              })
              .then(res=> res.json())
              .then(result=>{
                if (result.deletedCount>0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
        
                    const remaining = cart.filter(cart => cart._id !== id);
                    setCart(remaining)
                }
              })
        

    
        }
    })
    }
    return (
        <div>
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-light">

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
                   <span className=' flex flex-col md:flex-row gap-3'>
                   <Link to={`/details/${_id}`}>    <button  className='btn  btn-sm lg:btn-md'>Details</button></Link>
                     <button onClick={()=>handleDelete(_id)} className='btn  btn-sm lg:btn-md'>Delete</button>
                   </span>
                 </div>
                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                     $320
                 </div>
             </div>
         </li>




     </ul>
</div>
</div>
<Toaster></Toaster>
        </div>
    );
};

export default Cart;