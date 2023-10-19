import { Link } from "react-router-dom";


const Product = ({brandProduct,publicProduct}) => {
    const {productName, brand,type,rating,price,description,imageUrl,_id}= brandProduct;
    return (
<div className="card  bg-base-100 shadow ">
  <figure>
    <img className="w-60 h-60" src={imageUrl} alt="" />
    </figure>
  <div className="card-body">
    <span className="flex">
        <p className="flex-1">Brand: {brand} </p>
        <div className="rating rating-xs flex flex-row-reverse justify-between items-center ">
            <span className='ml-2' >  {rating} review</span>
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
        {/* <p className="flex-1">star: {rating} </p> */}
    </span>
    <p className="text-blue-600"> {productName} </p>
    <div className="card-actions justify-end">
      <p className="text-[#f53c3c] font-extrabold "> {price} </p>
      <p  className="font-bold"> type: {type}</p>
    </div>
    <span className="flex justify-between"> 
    {
      publicProduct?  <Link to={`/details/${_id}`}> <button className="btn">Details</button></Link>: <>
        <Link to={`/details/${_id}`}> <button className="btn">Details</button></Link>
      <Link to={`/update/${_id}`}><button  className="btn">Update</button></Link>
      
      </>
    }
    </span>
  </div>
</div>
    );
};

export default Product;