import { Routes, Route } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LatestNews from "./components/LatestNews";
import FeaturedNews from "./components/FeaturedNews";
import Gallery from "./components/Gallery";
import NewsPage from "./components/NewsPage"; 
// import Twinkle from './assets/svg/Twinkle';
import CardComponent from './components/CardComponent';
// import NewsBanner from './components/NewsBanner';
import Hero from './components/Hero';
import CookieConsent from './components/Cookies';
import WritePage from './components/WritePage';

function App() {
  return (
    <>
      <Navigation />
      {/* <NewsBanner /> */}
      <Routes>
        <Route path="/" element={
          <>
            {/* <CardComponent /> */}
            <Hero />
            {/* <div className='mt-20'>
            </div> */}
            <LatestNews />
            <FeaturedNews />
            <Gallery />
            {/* <Twinkle /> */}
            {/* <LatestNews /> */}
          </>
        } />
        <Route path="/write" element={<WritePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>

      <CookieConsent />
      <ButtonGradient />
      <Footer />
    </>
  );
}

export default App;
