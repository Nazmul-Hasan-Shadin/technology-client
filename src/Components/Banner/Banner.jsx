

import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/photos/slider1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import LeftNavbar from '../leftNavbar/LeftNavbar';

const Banner = () => {
    AOS.init();
    return (
       <div className='flex pt-4'>

        <div className=' hidden md:block lg:w-1/3'>
            <LeftNavbar></LeftNavbar>
        </div>
                <div className='lg:w-2/3'>
              <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
   <div className=' w-96  md:w-full '>
             
   <img className='relative  w-[355px] lg:w-full ' src={slider1} alt="" />
          
          <div  data-aos-duration="2000"  data-aos="zoom-in-right" className='absolute p-8
          top-3 lg:top-24 w-96 lg:w-full lg:space-y-4'> 
       <p className='font-semibold '>    Sale Offer <span className='text-red-700'>-10% Off</span> This Week</p>
         <h2 className=' text-xl lg:text-3xl'>Top Trending
          Headphone 2019</h2>
  <p className='text-xl'>Starting at <span className='text-red-700 text-3xl'>$589.00</span></p>
          </div>
   </div>
        
        
         </SwiperSlide>
        <SwiperSlide>
        <div className=' w-96 md:w-full '>
             
             <img className='relative  w-[355px] lg:w-full ' src={slider1} alt="" />
                    
                    <div  data-aos-duration="2000"  data-aos="zoom-in-right" className='absolute p-8
                    top-3 lg:top-24 w-96 lg:w-full lg:space-y-4'> 
                 <p className='font-semibold '>    Sale Offer <span className='text-red-700'>-10% Off</span> This Week</p>
                   <h2 className=' text-xl lg:text-3xl'>Top Trending
                    Headphone 2019</h2>
            <p className='text-xl'>Starting at <span className='text-red-700 text-3xl'>$589.00</span></p>
                    </div>
             </div>
        </SwiperSlide>
     
      </Swiper>
        </div>
      
       </div>
    
    );
};

export default Banner;