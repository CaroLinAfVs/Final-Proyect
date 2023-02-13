import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from './componentes/footer';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Home/>
      <Footer/>
  </ChakraProvider>
    );
}

export default App;
