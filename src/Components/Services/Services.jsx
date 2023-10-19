import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [service,setService]= useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])
    console.log(service);
    return (
       <div className='my-10 '>
   <h2 className='text-center text-2xl my-10'>Our Extra Services</h2>
<div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
           {
            service.map(service=> <Service 
                key={service.id}
                service={service}
            
            
            ></Service>)
           }
        </div>
       </div>
    );
};

export default Services;