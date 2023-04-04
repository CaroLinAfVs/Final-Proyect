import '../styles/cart.css';
import { useData } from '../Context/Context';

import {
  SimpleGrid,
  Heading,
  Button,
  Card,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  useToast,
  Center,
} from '@chakra-ui/react';



function Cart() {
  const toast = useToast();
  const { shoppingCart, setShoppingCart } = useData();

  function eliminarProducto(id) {
    const newArray = shoppingCart.filter((producto) => producto.id !== id);
    setShoppingCart(newArray);
    toast({
      title: 'Producto eliminado',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <div className="full-content">
      <Center >
      <div className="full-content box">
          <div className="contenidoPosts">
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {shoppingCart.map((product) => (
                <Card>
                  <CardHeader>
                    <Heading size="md">
                      <Image
                        src={product.img}
                        alt={product.nombre}
                        borderRadius="lg"
                      />
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{product.descripcion}</Text>
                  </CardBody>
                  <CardFooter className="cardFooter">
                    <Text>$ {product.price}</Text>
                    <Button
                      onClick={() => eliminarProducto(product.id)}
                      colorScheme="red"
                    >
                      Eliminar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </div>
        </div>
      </Center>
    </div >
  );
}

export default Cart;
