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
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>} />
          <Route path="/products" element={<Layout><Products/></Layout>} />
          <Route path='/cart' element={<Layout><Cart/></Layout>} />
          <Route element={<PrivateRoutes />}>
                <Route element={<Layout><User/></Layout>} path="/" exact/>
          </Route>
          <Route path="/Galeria" element={<Galeria/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
