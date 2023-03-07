import './App.css';
import Navbar from './componentes/Navbar';
import Home from './pages/Home';
import Footer from './componentes/Footer';
import Login from './pages/Login';
import Cart from './pages/Cart';
import User from './pages/User';


import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup';
import Products from './pages/Products';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
