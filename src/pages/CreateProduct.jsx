import { useState } from "react";
import { FormControl, FormLabel, Input, Container, Button, VStack } from "@chakra-ui/react";

function CreateProduct() {
    const [nombre, setNombre] = useState("");
    const [price, setPrice] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [url, setUrl] = useState("")
    const [nombreError, setNombreError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [descripcionError, setDescripcionError] = useState(false);
    const [urlError, setUrlError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        if (!nombre) {
            setNombreError(true);
        }

        if (!descripcion) {
            setDescripcionError(true);
        }

        if (!url) {
            setUrlError(true);
        }

        if (!price) {
            setPriceError(true);
        }


        if (nombre && descripcion && url && price) {
            console.log("Formulario enviado");
            setNombre("");
            setDescripcion("");
            setUrl("");
            setPrice("");
            setNombreError(false);
            setDescripcionError(false);
            setUrlError(false);
            setPriceError(false);
        }
    }

    return (
        <Container >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired isInvalid={nombreError}>
                        <FormLabel>Nombre:</FormLabel>
                        <Input type="text" placeholder="Ingrese un nombre al producto " value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired isInvalid={descripcionError}>
                        <FormLabel>Descripcion</FormLabel>
                        <Input type="text" placeholder="Ingrese Descripcion del producto" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired isInvalid={urlError}>
                        <FormLabel>Url:</FormLabel>
                        <Input type="url" placeholder="https://www.ejemplo.com/producto" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </FormControl>
                    <FormControl isRequired isInvalid={priceError}>
                        <FormLabel>Price:</FormLabel>
                        <Input type="number" placeholder="Ingrese el valor" value={price} onChange={(e) => setPrice(e.target.value)} />
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
