import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {

   const handleFormSubmit =(e)=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const productName= form.get('productName')
        let brandUpperCaseMake= form.get('brand');
          
        const brand=  brandUpperCaseMake.charAt(0).toUpperCase()+ brandUpperCaseMake.slice(1);
        
        
        const type= form.get('type')
        const rating= form.get('rating')
        const price= form.get('price')
        const description= form.get('description')
        const imageUrl= form.get('imageUrl')
        console.log(productName,brand,type,rating,price,description,imageUrl);
        const productInfo= {
          productName,
          brand,
          type,
          rating,
          price,
          description,
          imageUrl
        }

        //  send to server

       fetch('https://technology-server-5079gcx0i-nazmuls-projects-9122d9dc.vercel.app/products',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(productInfo)
       })
       .then(res=>res.json())
       .then(data=>{
        toast.success("Product Successfully added to your database")
       }
        )


  }
    return (

        
  <div className='my-8'>
       <form onSubmit={handleFormSubmit} >
     <div className='grid grid-cols-2 gap-3 space-y-3'>
     <input name='productName' type="text" placeholder="product Name" className="input input-bordered w-full " />

<input name='brand' type="text" placeholder="brand name" className="input input-bordered w-full " />

<input name='type' type="text" placeholder="product type" className="input input-bordered w-full " />
<input name='price' type="text" placeholder="product price" className="input input-bordered w-full " />
<input name='rating' type="text" placeholder="rating" className="input input-bordered w-full " />
<input name='imageUrl' type="text" placeholder="Image Url" className="input input-bordered w-full " />
<textarea name='description' placeholder="product description" className="textarea textarea-bordered textarea-lg  w-full max-w-xs" ></textarea>
     </div>

   <div className='py-4 '>
   <button  type='submit' className="btn w-full btn-success">Add Product</button>
   </div>

   </form>
   <Toaster></Toaster>
  </div>

 



   
    );
};

export default AddProduct;