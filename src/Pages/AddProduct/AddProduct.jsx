import React from 'react';

const AddProduct = () => {
    return (

        
  <div className='my-8'>
       <form >
     <div className='grid grid-cols-2 gap-3 space-y-3'>
     <input type="text" placeholder="product Name" className="input input-bordered w-full " />

<input type="text" placeholder="brand name" className="input input-bordered w-full " />

<input type="text" placeholder="product type" className="input input-bordered w-full " />
<input type="text" placeholder="product price" className="input input-bordered w-full " />
<input type="text" placeholder="rating" className="input input-bordered w-full " />
<input type="text" placeholder="Image Url" className="input input-bordered w-full " />
<textarea placeholder="product description" className="textarea textarea-bordered textarea-lg  w-full max-w-xs" ></textarea>
     </div>

   <div className='py-4 '>
   <button  type='submit' className="btn w-full btn-success">Add Product</button>
   </div>

   </form>
  </div>

 



   
    );
};

export default AddProduct;