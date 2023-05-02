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
            </Routes>
          </CategoryProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
