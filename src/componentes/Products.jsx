import "../styles/products.css"
import { Card, CardBody, CardFooter, CardHeader, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react'
function Products() {
    return (<div className="products">
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    <Card>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  </SimpleGrid>
    </div>
    )
}
export default Products