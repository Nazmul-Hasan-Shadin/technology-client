
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import BrandProducts from '../../Components/BrandProduct/BrandProducts';
import Product from '../../Components/Products/Product';
import PopularProducts from '../../Components/PopularProducts/PopularProducts';
import AdBanner from '../../Components/AdBanner';


const Home = () => {
    const popularProducts= useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <BrandProducts></BrandProducts>
            <PopularProducts popularProducts={popularProducts}></PopularProducts>
             <AdBanner></AdBanner>

        </div>
    );
};

export default Home;