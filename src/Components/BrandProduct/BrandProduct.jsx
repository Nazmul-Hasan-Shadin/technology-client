import { Link } from "react-router-dom";

const BrandProduct = ({brand:brands}) => {
    const{brand,imageURL}=brands;
    return (

    <Link to={`/products/${brand}`}>
     <div className="flex items-center w-[340px] md:w-full h-40 mb-2 justify-evenly  bg-white dark:bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg  w-40  h-28 " src={imageURL} alt="" />
    </a>
    <div className="p-5">
 
        <p className="mb-3 font-normal text-2xl"> <span className="text-yellow-600">Brand</span> {brand}  </p>

    </div>
</div>

    
    </Link>
    );
};

export default BrandProduct;