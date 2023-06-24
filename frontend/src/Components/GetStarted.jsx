import {
   
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
  
    Box,
    Button,
  } from '@chakra-ui/react';

  
 
  

  
  export default function GetStarted() {
    return (
      <Box w={"100%"} bgGradient='linear(to-l, #FBAD2D,#FF66B5 )' p={{base:"30px",md:"0px"}} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} pl={{base:"10px",md:"100px"}} pr={{base:"0px",md:"100px"}}  align={"center"} justify={"center"} justifyItems={"center"} justifyContent={"center"}  >
            <Heading  fontSize={"60px"} fontFamily={"Poppins,sans-serif"} lineHeight={"58px"} >Get started with Codeverse</Heading>
            <Text color={'white'}  fontSize={{base:"21px",md:"24px"}} fontWeight={500}  fontFamily={"Poppins,sans-serif"}>
            Don’t miss out! Join a community of kids who are already creating and having fun with Codeverse.
            </Text>

            <Button  rounded={'full'}  bg="white" color="black" _hover={{bg:"white"}} fontFamily={"Poppins,sans-serif"} py={7} px={20} >Book your first free class</Button>
          </Stack>
          <Flex>
            <Image
       display={{base:"none",md:"block"}}
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/617351f2945aff534ff7ea8f_Coding_GuideKid-16-6073939dffcd275d108c820dacb8b89e.png'
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Box>
    );
  }