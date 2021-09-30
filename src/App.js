import "./css/App.css";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getCartTotalProducts } from './api';
// Importing Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  const [cartProductsCout, setCartProductsCout] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCartProductsCout(getCartTotalProducts());
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav cartTotalProducts={cartProductsCout} />
        <Switch>
          <Route exact path="/shopping-cart/home" component={Home} />
          <Route exact path="/shopping-cart/shop" component={Shop} />
          <Route exact path="/shopping-cart/cart" component={Cart} />
          <Route exact path="/shopping-cart/shop/:id" component={Product} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
