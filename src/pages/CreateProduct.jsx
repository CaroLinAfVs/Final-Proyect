import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useData } from '../Context/Context';
import {baseUrl} from '../utils/config'

function CreateProduct() {
  const [nombre, setNombre] = useState('');
  const [price, setPrice] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');
  const [nombreError, setNombreError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const { user } = useData();
  const toast = useToast();
  async function handleSubmit(e) {

    try {
      e.preventDefault();

      if (!nombre) {
        setNombreError(true);
        return;
      }

      if (!descripcion) {
        setDescripcionError(true);
        return;
      }

      if (!url) {
        setUrlError(true);
        return;
      }

      if (!price) {
        setPriceError(true);
        return;
      }

      const headers = {
        'content-type': 'application/json',
        authorization: 'Bearer ' + user.token,
      };

      await axios.post(
        `${baseUrl}/producto`,
        { titulo: nombre, descripcion, img: url, price },
        { headers }
      );
      toast({
        title: 'Producto agregado',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Hubo un error al publicar el producto. Intentelo de nuevo.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Container className="full-content" py={10}>
      <Text fontSize="4xl" align="center">
        Crear producto
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired isInvalid={nombreError}>
            <FormLabel>Nombre:</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese un nombre al producto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired isInvalid={descripcionError}>
            <FormLabel>Descripcion</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese Descripcion del producto"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired isInvalid={urlError}>
            <FormLabel>Url:</FormLabel>
            <Input
              type="url"
              placeholder="https://www.ejemplo.com/producto"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired isInvalid={priceError}>
            <FormLabel>Price:</FormLabel>
            <Input
              type="number"
              placeholder="Ingrese el valor"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Añadir
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default CreateProduct;
