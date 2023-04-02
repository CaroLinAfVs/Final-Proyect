import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { BsCartPlus } from 'react-icons/bs';

function ProductView() {
  return (
    <div>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
          alt=""
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Heading size="md" fontWeight="semibold" mr="2">
              zapato
            </Heading>
            <Text color="gray.500" fontSize="sm">
              $2000
            </Text>
          </Box>

          <Box mt="2" fontWeight="light" lineHeight="tall">
            zapato talla 34
          </Box>

          <Button mt="4" colorScheme="blue">
            <BsCartPlus />
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ProductView;
