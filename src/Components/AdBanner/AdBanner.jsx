

const AdBanner = () => {
    return (
        <div className="relative lg:px-20 ">
            <img className="" src="https://i.ibb.co/k5t1NhS/banner3.jpg" alt="" />
           
             
     
                    
                    <div  className='absolute  p-8 
                 -top-4    lg:top-24  lg:space-y-4'> 
                 <p className='font-semibold '>    Sale Offer <span className='text-red-700'>-10% Off</span> This Week</p>
                   <h2 className=' text-md lg:text-3xl'>Featured Product
                            Apple <br /> Accessories 2018
                            Starting <br /> at $1209.00
                            </h2>
            <p className='md:text-xl'>Starting at <span className='text-red-700  md:text-3xl'>$589.00</span></p>
                    </div>
    
        </div>
    );
};

export default AdBanner;