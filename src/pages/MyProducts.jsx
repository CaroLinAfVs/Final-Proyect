import '../styles/menu.css';
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
  Stat,
  StatLabel,
  StatHelpText,
  useToast,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useData } from '../Context/Context';

function MyProducts() {
  const toast = useToast();
  const { user } = useData();

  const [misProductos, setMisProductos] = useState([]);
  useEffect(() => {
    const obtenerMisProductos = async () => {
      try {
        const headers = {
          'content-type': 'application/json',
          authorization: 'Bearer ' + user.token,
        };

        const { data } = await axios.get('http://localhost:4000/producto', {
          headers,
        });
        setMisProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerMisProductos();
  }, []);

  async function eliminarProducto(id) {
    try {
      const headers = {
        'content-type': 'application/json',
        authorization: 'Bearer ' + user.token,
      };

      const {
        data: { producto },
      } = await axios.delete(`http://localhost:4000/producto/${id}`, {
        headers,
      });

      const nuevoMisProductos = misProductos.filter(
        (miProducto) => miProducto.id !== producto.id
      );

      setMisProductos(nuevoMisProductos);
      toast({
        title: 'Producto eliminado',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Hubo un error al eliminar el producto. Intentelo de nuevo.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <div className="my-products">
      <div className="box" style={{ height: '100vh' }}>
        <div className="contenidoPosts">
          <Text fontSize="4xl" align="center">
            Mis productos
          </Text>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {misProductos.map((producto) => (
              <Card>
                <CardHeader>
                  <Heading size="md">
                    <Image
                      src={producto.img}
                      alt={producto.titulo}
                      borderRadius="lg"
                    />
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stat>
                    <StatLabel>{producto.titulo}</StatLabel>
                    <StatHelpText>{producto.descripcion}</StatHelpText>
                  </Stat>
                </CardBody>
                <CardFooter className="cardFooter">
                  <Text>{producto.price}</Text>
                  <div className="botones">
                    <Link to={`/product-view/${producto.id}`}>
                      <Button marginRight=" 10px">Ver más</Button>
                    </Link>
                    <Button
                      onClick={() => eliminarProducto(producto.id)}
                      marginRight=" 10px"
                      colorScheme="red"
                    >
                      Eliminar
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}
export default MyProducts;
