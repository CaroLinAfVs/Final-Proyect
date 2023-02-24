import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from './componentes/footer';
import Login from './componentes/Login';
import Cart from './componentes/Cart';
import User from './componentes/User';

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './componentes/Signup';
import Products from './componentes/Products';

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
          <Route path='cart' element={<Cart/>}/>
          <Route path="/user" element={<User />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
