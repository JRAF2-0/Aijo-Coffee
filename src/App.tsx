import { useState, useEffect } from "react";
import { ScrollTrigger } from "./lib/gsap";
import LoadingScreen from "./components/sections/LoadingScreen";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import FeaturedDrinks from "./components/sections/FeaturedDrinks";
import AboutUs from "./components/sections/AboutUs";
import BestSellers from "./components/sections/BestSellers";
import Gallery from "./components/sections/Gallery";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Reviews from "./components/sections/Reviews";
import VisitUs from "./components/sections/VisitUs";
import Footer from "./components/layout/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    // Fallback: mag-refresh ulit pagkatapos ng ilang segundo
    // sakaling may images na late pa rin mag-load
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 1500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Header />
      <main>
        <Hero startAnimation={!isLoading} />
        <FeaturedDrinks />
        <AboutUs />
        <BestSellers />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </>
  );
}

export default App;