
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import BrandProducts from '../../Components/BrandProduct/BrandProducts';
import slider1 from '../../assets/photos/slider1.jpg'
import PopularProducts from '../../Components/PopularProducts/PopularProducts';
import AdBanner from '../../Components/AdBanner/AdBanner';
import Service from '../../Components/Services/Service';
import Services from '../../Components/Services/Services';
import Footer from '../../Components/Footer/Footer';
import DarkModeToggleSwitch from '../../Components/DarkModeToggle/DarkModeToogle';
import { useState } from 'react';


const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const popularProducts= useLoaderData();
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    return (
        <div className='max-w-7xl mx-auto'>
             <DarkModeToggleSwitch
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
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