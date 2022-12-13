import Nav from "./components/Nav";
import Hero from "./components/hero/Hero";
import { Route, Routes } from "react-router-dom";
import Sell from "./components/sell/Sell";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Tv from "./components/Tv episode/Tv";
import Contact from "./components/Contact/Contact";
import Properties from "./components/Properties/Properties";
import Cookies from "../src/components/Cookies";
import Footer from "./components/Footer";
import FullDetailOnFirstLisbonPropertyForSale from "./components/Properties/sales/sales in details/FullDetailOnFirstLisbonPropertyForSale";
import Lisbon from "./components/Properties/sales/Locations/Lisbon";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/FullDetailOnFirstLisbonPropertyForSale"
            element={<FullDetailOnFirstLisbonPropertyForSale />}
          />
          <Route path="/lisbon" element={<Lisbon />} />
        </Routes>
      </div>
      <Cookies />
      <Footer />
    </div>
  );
}

export default App;
