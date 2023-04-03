import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Layout from './componentes/Layout';
import ProductView from './pages/ProductView';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import { Context } from './Context/Context';
import { useEffect, useState } from 'react';
import PrivateRoute from './utils/PrivateRoute';
import MyProducts from './pages/MyProducts';

function App() {
  const userItem = localStorage.getItem('user');
  const cartItem = localStorage.getItem('shoppingCart');

  const [user, setUser] = useState(userItem ? JSON.parse(userItem) : {});
  const [shoppingCart, setShoppingCart] = useState(
    cartItem ? JSON.parse(cartItem) : []
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [user, shoppingCart]);

  return (
    <ChakraProvider>
      <Context.Provider
        value={{ user, setUser, shoppingCart, setShoppingCart }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product-view/:id" element={<ProductView />} />
              <Route
                path="/create-product"
                element={
                  <PrivateRoute>
                    <CreateProduct />
                  </PrivateRoute>
                }
              />

              <Route
                path="/my-products"
                element={
                  <PrivateRoute>
                    <MyProducts />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </ChakraProvider>
  );
}

export default App;
