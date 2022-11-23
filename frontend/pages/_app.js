import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('I am useEffect from app.js');
  }, []);

  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);

  const addToCart = (item, qty, price) => {
    console.log(cart);
    let newCart = cart;
    for (let i = 0; i < qty; i++) {
      newCart.push([item, price]);
    }

    setCart(newCart);
    setReloadKey(Math.random());
  };

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };

  const clearCart = (item) => {
    setCart([]);
  };

  return (
    <>
      <Navbar key={reloadKey} cart={cart} />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
