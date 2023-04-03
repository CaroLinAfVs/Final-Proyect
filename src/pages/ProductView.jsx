import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useData } from '../Context/Context';

function ProductView() {
  const { id } = useParams();


  const [producto, setProducto] = useState({});
  const { shoppingCart, setShoppingCart } = useData();

  const productoExistente = shoppingCart.find((producto) => `${producto.id}` === id);


  useEffect(() => {
    if (id) {
      async function traerProducto() {
        const { data } = await axios.get(
          `http://localhost:4000/producto/${id}`
        );
        setProducto(data);
      }

      traerProducto();
    }
  }, [id]);

  function actualizarCarrito() {
    if (productoExistente) {
      const newArray = shoppingCart.filter(
        (producto) => producto.id !== productoExistente.id
      );

      setShoppingCart(newArray);
      return;
    }

    const newArray = [...shoppingCart, producto];
    setShoppingCart(newArray);
  }

  if (!producto.id) {
    return null;
  }

  return (
    <div className="full-content">
      <Wrap borderRadius="lg" overflow="hidden" >
          <WrapItem px={10} w={"60%"} margin="auto">
            <Image src={producto.img} alt={producto.titulo} objectFit='cover' />
          </WrapItem>
        <WrapItem>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Heading size="md" fontWeight="semibold" mr="2">
                {producto.titulo}
              </Heading>
              <Text color="gray.500" fontSize="sm">
                ${producto.price}
              </Text>
            </Box>

            <Box mt="2" fontWeight="light" lineHeight="tall">
              {producto.descripcion}
            </Box>

            <Button
              onClick={() => actualizarCarrito()}
              colorScheme={productoExistente ? 'red' : 'teal'}
              marginRight=" 10px"
            >
              {productoExistente ? <BsCartDash /> : <BsCartPlus />}
            </Button>
          </Box>
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default ProductView;
