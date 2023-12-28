import Destinations from "./components/destinations/Destinations";
import HotelsAndRestaurants from "./components/hotels-and-restaurants/HotelsAndRestaurants";
import Hero from "./components/hero";
import Travel from "./components/travel/Travel";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Destinations />
      <HotelsAndRestaurants />
      <Travel />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
