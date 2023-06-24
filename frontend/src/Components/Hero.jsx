import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Icon
} from "@chakra-ui/react";

import { ChevronRightIcon } from '@chakra-ui/icons'


const Hero = () => {
  return (
    <Stack  bg="white" direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={1} w={"full"} maxW={"lg"}>
          <Heading fontFamily={"Poppins, sans-serif"}  fontSize={{ base: "70px", md: "80px", lg: "80px" }}>
            <Text  lineHeight={{base:"70px"}} color="black"    >
              Where kids become
            </Text>
            <Text   color={"#5225EE"}>Creators</Text>
          </Heading>
          <Text fontSize={{ base: "20px", lg: "24px" }} color={"#447C72"} fontFamily={"SF pro text, sans-serif"}>
          Codeverse is an award-winning creativity platform for kids ages 6+, inspiring and empowering kids to bring their ideas to life while developing skills that last a lifetime.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} mt="40px"spacing={4}>
    
          <Button
      rounded="full"
      py={30}
      px={40}
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      color="white"
      _hover={{
        bg: "blue.500",
      }}
      position="relative"
      overflow="hidden"
    >
      Book your first free class
      <Icon
        as={ChevronRightIcon}
        boxSize={6}
        position="absolute"
        right={-10}
        top="50%"
        transform="translateY(-50%)"
        transition="transform 0.3s ease-in-out"
        _hover={{
          transform: "translateY(-50%) translateX(5px)",
        }}
      />
    </Button>
           
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} display={{base:"none",md:"block"}} >
        <Image w={"90%"}
          src={
            "https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6165c42ed0864e530f0acf49_Home_Hero3-min-177f6fcf6f2305bda0475c2a89a217a1.png"
          }
        />
      </Flex>
    </Stack>
  );
};

export default Hero;
