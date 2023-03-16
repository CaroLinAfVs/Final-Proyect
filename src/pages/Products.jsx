import "../styles/products.css"
import {
  Card, CardBody, CardFooter, CardHeader,
  Heading, Text, Button, SimpleGrid, Image
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { BsCartPlus } from 'react-icons/bs';


function Products() {
  return (<div className="products">
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card>
        <CardHeader>
          <Heading size='md'>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt=""
              borderRadius="lg"
            />
          </Heading>      </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="space-around" alignItems="center">
          <Link to="/product-view"><Button marginRight=" 10px">see more</Button></Link>
          <Button marginRight=" 10px"><BsCartPlus /></Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt=""
              borderRadius="lg"
            />
          </Heading>        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="space-around" alignItems="center">
          <Link to="/product-view"><Button marginRight=" 10px">see more</Button></Link>
          <Button marginRight=" 10px"><BsCartPlus /></Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt=""
              borderRadius="lg"
            />
          </Heading>        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="space-around" alignItems="center">
          <Link to="/product-view"><Button marginRight=" 10px">see more</Button></Link>
          <Button marginRight=" 10px"><BsCartPlus /></Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  </div >
  )
}
export default Products