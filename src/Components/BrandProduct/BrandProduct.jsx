import { Link } from "react-router-dom";

const BrandProduct = ({brand:brands,darkforImg}) => {
    const imgStyle= darkforImg ? { filter: "invert(1)" } : {};
    const{brand,imageURL}=brands;
    return (

    <Link to={`/products/${brand}`}>
     <div data-aos="zoom-in-up" data-aos-duration="1100" className="flex items-center  md:w-full h-40 mb-2 justify-evenly  dark:bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
    <a href="#">
        <img style={imgStyle} className="rounded-t-lg  w-40  h-28 " src={imageURL} alt="" />
    </a>
    <div className="p-5">
 
        <p className="mb-3 font-normal text-2xl dark:text-white "> <span className="text-yellow-600">Brand</span> {brand}  </p>

    </div>
</div>

    
    </Link>
    );
};

export default BrandProduct;