import '../styles/products.css';
import { SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../componentes/ProductCard';
import {baseUrl} from '../utils/config'

function Products() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/product'`);
        setProductos(data);
      } catch (error) {
        alert(
          'Hubo un error al cargar los datos. Por favor intenta nuevamente.'
        );
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div className="full-content">
      <Text fontSize="4xl" align="center">
        Catálogo de productos
      </Text>
      <SimpleGrid
        spacing={4}
        py={8}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {productos.map((producto) => (
          <ProductCard
            id={producto.id}
            img={producto.img}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            price={producto.price}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
export default Products;
