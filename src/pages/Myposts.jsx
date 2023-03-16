
import "../styles/menu.css"
import {
    SimpleGrid, Heading, Button, Card, Image,
    CardHeader, CardBody, CardFooter, Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Myposts() {
    return (
        <div className="myposts">
            <div className="box" style={{ "height": "100vh" }}>
                <div className="contenidoPosts">
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        <Card>
                            <CardHeader>
                                <Heading size='md'>
                                    <Image
                                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt=""
                                        borderRadius="lg"
                                    />
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter className="cardFooter">
                                <Text>$30000</Text>
                                <div className="botones">
                                    <Link to="/product-view"><Button marginRight=" 10px">see more</Button></Link>
                                    <Button marginRight=" 10px">DELETE</Button>
                                </div>
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
                                </Heading>                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter className="cardFooter">
                                <Text>$30000</Text>
                                <div className="botones">
                                    <Link to="/product-view"><Button marginRight=" 10px">see more</Button></Link>
                                    <Button marginRight=" 10px">DELETE</Button>
                                </div>
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
                                </Heading>                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter className="cardFooter">
                                <Text>$30000</Text>
                                <div className="botones">
                                    <Link to="/product-view"><Button marginRight=" 3px">see more</Button></Link>
                                    <Button marginRight=" 10px">DELETE</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </div>
        </div>
    )
}
export default Myposts