// import React from "react";
import Slider from "react-slick";
import {
  Box,
  Flex,
  Avatar,
  Text,
  CardFooter,
  CardBody,
  Heading,
  Card,
} from "@chakra-ui/react";

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <Flex   bg='#F6FBFF'pt="100px" alignItems={"center"} justifyContent={"center"} alignContent={"center"} >
        <Heading color="#5225EE" textAlign={"center"} fontFamily={"Poppins,sans-serif"} fontWeight={700} fontSize={"50px"}>What people are saying</Heading></Flex>
    <Slider {...settings}>

        {/* 1 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black"  h="80%" >
              <CardBody mt="30px" >
                <Text  fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>

      {/* 2 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%" >
              <CardBody mt="30px" >
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>
      {/* 3 */}
      <Box p={4} bg='#F6FBFF'  h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%">
              <CardBody mt='30px'>
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>
{/* 4 */}
      <Box p={4} bg='#F6FBFF'  h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%"  >
              <CardBody mt="30px">
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}> Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>
      {/* 5 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%">
              <CardBody mt="30px">
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>
      {/* 6 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%">
              <CardBody mt='30px'>
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>
{/* 7 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%">
              <CardBody mt="30px">
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>

{/* 8 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%">
              <CardBody mt="30px">
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading fontFamily={"Poppins,sans-serif"} size="sm">Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}>Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>

{/* 9 */}
      <Box p={4} bg='#F6FBFF' h={"500px"}>
      <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
          >
            <Card bg="white" color="black" h="80%">
              <CardBody mt="30px">
                <Text fontFamily={"Poppins,sans-serif"}  color={"#474C72"} fontSize={"17px"}>
                  The Codeverse program and their programming language,
                  KidScript®, is by far the best way for kids to learn to code.
                  Our six year old has loved it and we have a lot of fun
                  developing new games and apps.
                </Text>
              </CardBody>
              <CardFooter>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Jean" src="" color={"black"} />

                    <Box>
                      <Heading size="sm" fontFamily={"Poppins,sans-serif"}>Jean</Heading>
                      <Text fontFamily={"Poppins,sans-serif"}> Codeverse Parent</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
      </Box>
    </Slider>
    </>
  );
};

export default Carousel;
   