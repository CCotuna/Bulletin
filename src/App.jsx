import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ButtonGradient from "./assets/svg/ButtonGradient";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LatestNews from "./components/LatestNews";
import FeaturedNews from "./components/FeaturedNews";
import Gallery from "./components/Gallery";
import WritePage from "./components/WritePage"; // Import the Write page component
import NewsPage from "./components/NewsPage"; // Import the NewsPage component

function App() {
  return (
    <>
      <Navigation />
      {/* Define the routes */}
      <Routes>
        {/* Main route */}
        <Route path="/" element={
          <>
            <FeaturedNews />
            <Gallery />
            <LatestNews />
          </>
        } />
        {/* Write page route */}
        <Route path="/write" element={<WritePage />} />
        {/* News page route */}
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <ButtonGradient />
      <Footer />
    </>
  );
}

export default App;
