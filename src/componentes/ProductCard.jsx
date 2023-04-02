import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { useData } from "../Context/Context";

function ProductCard({ id, img, nombre, descripcion, price }) {
  const { shoppingCart, setShoppingCart } = useData();
  const productoExistente = shoppingCart.find((producto) => producto.id === id);

  function actualizarCarrito(id, img, nombre, descripcion, price) {
    if (productoExistente) {
      const newArray = shoppingCart.filter(
        (producto) => producto.id !== productoExistente.id
      );

      setShoppingCart(newArray);
      return;
    }

    const newProduct = { id, img, nombre, descripcion, price };
    const newArray = [...shoppingCart, newProduct];
    setShoppingCart(newArray);
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">
          <Image src={img} alt={nombre} borderRadius="lg" />
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {nombre}
          {descripcion}
          {price}
        </Text>
      </CardBody>
      <CardFooter
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Link to="/product-view">
          <Button marginRight=" 10px">see more</Button>
        </Link>
        <Button
          onClick={() => actualizarCarrito(id, img, nombre, descripcion, price)}
          colorScheme={productoExistente ? "red" : "teal"}
          marginRight=" 10px"
        >
          {productoExistente ? <BsCartDash /> : <BsCartPlus />}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
