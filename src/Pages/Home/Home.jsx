
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import BrandProducts from '../../Components/BrandProduct/BrandProducts';
import slider1 from '../../assets/photos/slider1.jpg'
import PopularProducts from '../../Components/PopularProducts/PopularProducts';
import AdBanner from '../../Components/AdBanner/AdBanner';
import Service from '../../Components/Services/Service';
import Services from '../../Components/Services/Services';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
    const popularProducts= useLoaderData();
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner slider1={slider1} banner={true}> </Banner>
            <BrandProducts></BrandProducts>
            <PopularProducts popularProducts={popularProducts}></PopularProducts>
             <AdBanner></AdBanner>
             <Services></Services>
             <Footer></Footer>

        </div>
    );
};

export default Home;