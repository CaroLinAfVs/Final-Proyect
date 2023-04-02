
import "../styles/menu.css"
import {
    SimpleGrid, Heading, Button, Card, Image,
    CardHeader, CardBody, CardFooter, Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from "react"

function ProductCardDelete({ img, name, price, descripcion }) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>
                    <Image
                        src={img}
                        alt={name}
                        borderRadius="lg"
                    />
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>
                    {name}
                    {descripcion}
                </Text>
            </CardBody>
            <CardFooter className="cardFooter">
                <Text>{price}</Text>
                <div className="botones">
                    <Link to="/product-view"><Button marginRight=" 10px">see more</Button></Link>
                    <Button marginRight=" 10px">DELETE</Button>
                </div>
            </CardFooter>
        </Card>
    )
}


function MyPosts() {

    const [misProductos, setMisProductos] = useState([]);
    useEffect(() => {
        const getMisProductos = async () => {
            try {
                const token = localStorage.getItem("token");

                const headers = {
                    'content-type': 'application/json',
                    'authorization': 'Bearer ' + token
                };

                const { data } = await axios.get("http://localhost:4000/producto", { headers });
                setMisProductos(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getMisProductos();
    }, []);

    return (

        <div className="myposts">
            <div className="box" style={{ "height": "100vh" }}>
                <div className="contenidoPosts">

                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        {misProductos.map((producto) =>
                        (<ProductCardDelete
                            img={producto.img}
                            name={producto.nombre}
                            descripcion={producto.descripcion}
                            price={producto.price}
                        />))}
                    </SimpleGrid>
                </div>
            </div>
        </div>
    )
}
export default MyPosts
