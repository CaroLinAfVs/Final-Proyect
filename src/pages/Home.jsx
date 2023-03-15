import "../styles/home.css"
import {
    Box, Heading, Highlight, Image,
    Card, CardHeader, CardBody,
    Text, CardFooter, Button, SimpleGrid
} from '@chakra-ui/react'
import { BsCartPlus } from 'react-icons/bs';
import { useData } from "../Context/Context";



function Home() {
    const {user} = useData()

    return (
        <div className="home">

            <div className="exampleProducts">
                <Box className="imageView">
                    <img src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE" alt="" />
                </Box>
                <Box className="text">
                    <Heading className="styleText" lineHeight='tall' size='md'>
                        <Highlight className="offert"
                            query={['5 days', 'travel guia', 'breakfeast']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                        >
                            !NEW OFFERT TO LONDON!
                            5 days + travel guia + breakfeast


                        </Highlight>
                    </Heading>
                </Box>
            </div>
            <div className="title">
                <h1>The most seeling products: {user}</h1>
            </div>
            <div className="products">
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>
                                <Image
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt=""
                                    borderRadius="lg"
                                />
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
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
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
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
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
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
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
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
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
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
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
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
                            </Heading>                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter className="cardFooter">
                            <Text>$30000</Text>
                            <Button><BsCartPlus /></Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </div>
        </div>
    )
}
export default Home