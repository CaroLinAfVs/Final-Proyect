import "../styles/products.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../componentes/ProductCard";

function Products() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/producto");
        setProductos(data);
      } catch (error) {
        alert(
          "Hubo un error al cargar los datos. Por favor intenta nuevamente."
        );
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div className="products">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {productos.map((producto) => (
          <ProductCard
            imagen={producto.img}
            nombre={producto.name}
            descripcion={producto.descripcion}
            precio={producto.price}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
export default Products;
