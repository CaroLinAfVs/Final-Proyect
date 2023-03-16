import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Layout from './componentes/Layout'
import ProductView from './pages/ProductView';

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup';
import Products from './pages/Products';
import CreateProduct from "./pages/CreateProduct"
import { Context } from './Context/Context';
import { useState } from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Myinformation from './pages/MyInformation';
import Favorites from './pages/Favorites';
import Myposts from './pages/MyPosts';

function App() {
  const [user, setUser] = useState()

  return (

    <ChakraProvider>
      <Context.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/product-view" element={<ProductView />} />
              <Route path="/create-product" element={<PrivateRoute><CreateProduct /></PrivateRoute>} />
              <Route path="/my-information" element={<PrivateRoute><Myinformation /></PrivateRoute>} />
              <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
              <Route path="/my-posts" element={<PrivateRoute><Myposts /></PrivateRoute>} />

            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </ChakraProvider>

  );
}

export default App;
