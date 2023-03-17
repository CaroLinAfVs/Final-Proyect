import { Avatar, Box, Heading, Text } from "@chakra-ui/react";


function Myinformation() {
  const name = "John Doe";
  const location = "New York City";
  const bio = "Hi, I'm John! I love coding and exploring new technologies.";

  return (<div>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="John Doe"
        size="xl"
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading size="md" mr="2">
            {name}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {location}
          </Text>
        </Box>
        <Text mt="4" fontSize="md">
          {bio}
        </Text>
      </Box>
    </Box>
  </div>)
}
export default Myinformation
