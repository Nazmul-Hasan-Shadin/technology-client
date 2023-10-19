
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import BrandProducts from '../../Components/BrandProduct/BrandProducts';

import PopularProducts from '../../Components/PopularProducts/PopularProducts';
import AdBanner from '../../Components/AdBanner/AdBanner';


const Home = () => {
    const popularProducts= useLoaderData();
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <BrandProducts></BrandProducts>
            <PopularProducts popularProducts={popularProducts}></PopularProducts>
             <AdBanner></AdBanner>

        </div>
    );
};

export default Home;