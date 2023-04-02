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
} from '@chakra-ui/react';

function Cart() {
  const { shoppingCart, setShoppingCart } = useData();

  function eliminarProducto(id) {
    const newArray = shoppingCart.filter((producto) => producto.id !== id);
    setShoppingCart(newArray);
  }

  return (
    <div className="cart">
      <div className="box">
        <div className="contenido">
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
    </div>
  );
}

export default Cart;
