import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Authentication from "./pages/Authentication/Authentication";
import Cart from "./pages/Cart/Cart";
import FavouriteProducts from "./pages/FavouriteProducts/FavouriteProducts";
import Home from "./pages/Home/Home";
import "./App.css";
import { CategoryProvider } from "./context/CategoryContext";
import { FilterContextProvider } from "./context/FilterContext";
import Checkout from "./components/Checkout/Checkout";
import Property from "./components/Property/Property";
import Disclamier from "./components/Disclamier/Disclamier";
import Privacy from "./components/Privacy/Privacy";
import Cansellation from "./components/Cancellation/Cansellation";
import Terms from "./components/Terms/Terms";
import ContactUs from "./components/ContactUs/ContactUs";
import Payment from "./components/Payment/Payment";
import WebsiteOwner from "./components/WebsiteOwner/WebsiteOwner";
import AboutUs from "./components/AboutUs/AboutUs";
import OrderTracking from "./components/OrderTracking/OrderTracking";
import Faq from "./components/FAQ/Faq";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FilterContextProvider>
          <CategoryProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourites" element={<FavouriteProducts />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/auth" element={<Authentication />} />
              <Route path="checkout" element={<Checkout />} />
              <Route
                path="/intellectual-property-and-licensing-agreement"
                element={<Property />}
              />
              <Route
                path="/legal-disclaimer-and-liability-disclaimer"
                element={<Disclamier />}
              />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route
                path="/return-and-cancellation-policy"
                element={<Cansellation />}
              />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/website-owner" element={<WebsiteOwner />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </CategoryProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
