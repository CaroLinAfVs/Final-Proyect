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
import { BsCartPlus } from "react-icons/bs";

function ProductCard({ imagen, nombre, descripcion, precio }) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">
          <Image src={imagen} alt={nombre} borderRadius="lg" />
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {nombre}
          {descripcion}
          {precio}
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
        <Button marginRight=" 10px">
          <BsCartPlus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
