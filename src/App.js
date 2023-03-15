import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import User from './pages/User';
import Layout from './componentes/Layout'
import Galeria from './componentes/Galeria';

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup';
import Products from './pages/Products';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
            <Route path="/Galeria" element={<Galeria />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
