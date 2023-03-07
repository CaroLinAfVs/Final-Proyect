import './App.css';
import Header from './componentes/Header';
import Home from './pages/Home';
import Footer from './componentes/Footer';
import Login from './pages/Login';
import Cart from './pages/Cart';
import User from './pages/User';


import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup';
import Products from './pages/Products';
import Galeria from './componentes/Galeria';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/user" element={<User />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
