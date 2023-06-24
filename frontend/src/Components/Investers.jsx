import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Investers = () => {
  return (
    <div style={{backgroundColor:"white"}} >
        <Box pb="100px" >
            <Box w={{base:"90%",md:"50%"}} margin={'auto'} pt="100px" >
            <Heading fontFamily={"Poppins,sans-serif"} color={"#0E1540"} textAlign={"center"}  fontSize={{base:"50px",md:"55px"}} >Backed by the best</Heading>
            <Text mt="10px" fontFamily={"Poppins,sans-serif"} fontSize={"20px"} textAlign={"center"} color={"#474C72"}>Codeverse is supported by investors, entrepreneurs, education advisors, and partners from the following world-class organizations:</Text>
            </Box>
                <Flex w={"90%"} margin={"auto"} mt="30px" >
                    <Image src='https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6480a659edc25a122629e2fe_cv-press-updated-p-1600.png' />
                </Flex>
        </Box>
      
    </div>
  );
}

export default Investers;
