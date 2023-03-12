import { Box, Image, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://via.placeholder.com/400x300?text=Image+1',
  'https://via.placeholder.com/400x300?text=Image+2',
  'https://via.placeholder.com/400x300?text=Image+3',
];

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box flex="1">
        <Box position="relative">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Image ${index + 1}`}
              display={index === currentIndex ? 'block' : 'none'}
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              objectFit="cover"
            />
          ))}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" ml="4">
        <IconButton
          icon={<FaChevronLeft />}
          aria-label="Previous"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />
        <IconButton
          icon={<FaChevronRight />}
          aria-label="Next"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          mt="4"
        />
      </Box>
    </Box>
  );
};

export default Galeria;
