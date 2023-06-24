import React, { useState } from "react";
import {
  Button,
  Box,
  Image,
  Stack,
  Heading,
  Text,

  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Kids = () => {
  const [selectedButton, setSelectedButton] = useState( <SimpleGrid
    bg="#5225EE"
    w={"90%"}
    gap={"40px"}
    margin={"auto"}
    columns={{ base: 1, md: 2, xl: 2 }}
    alignItems={"center"}
    borderRadius={"50px"}
  >
    <Image
      src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f59ca7baed2be831ede5_Lee_DesktopThumbnail-735fafa50fbf4b419e80ba581a90ac39.jpg"
      borderRadius="lg"
    />
    <Stack gap="30px" padding={"30px"}>
      <Heading
        fontSize={{ base: "50px", md: "100px" }}
        lineHeight={"80px"}
      >
        Meet Lee
      </Heading>
      <Text
        textDecoration={"underline"}
        fontFamily={"mono"}
        fontSize={"20px"}
      >
        AGE 13 - MEMBER SINCE JUNE 2020 - CREATOR OF FALL DUDES
      </Text>
      <Text
        fontFamily={"Poppins,sans-serif"}
        textDecoration={"underline"}
        fontSize="2xl"
      >
        Lee's game is addictingly fun and creative. Can you survive
        until the end in order to win this game?
      </Text>

      <Button
        leftIcon={<ChevronRightIcon />}
        fontFamily={"Poppins,sans-serif"}
        fontSize={"17px"}
        w={{ base: "80%", md: "70%" }}
        py={7}
        rounded={"full"}
        _hover={{ bg: "gray.200" }}
        bg="gray.200"
        color="#474C72"
        variant="solid"
      >
        Why Lee Loves to code
      </Button>
    </Stack>
  </SimpleGrid>);

  const renderCard = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderButtonDetails = () => {
    switch (selectedButton) {
      case 1:
        return (
          <SimpleGrid
            bg="#5225EE"
            w={"90%"}
            paddingTop={"70px"}
            gap={"40px"}
            margin={"auto"}
            columns={{ base: 1, md: 2, xl: 2 }}
            alignItems={"center"}
            borderRadius={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f455c5bb5226fd7c3b20_Ferra_DesktopThumbnail-e6e7a3ff9ef91ab7dedc8a72db7ee483.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack gap="30px" padding={"30px"}>
              <Heading
                fontSize={{ base: "50px", md: "100px" }}
                lineHeight={"80px"}
              >
                Meet Ferra
              </Heading>
              <Text
                textDecoration={"underline"}
                fontFamily={"mono"}
                fontSize={"20px"}
              >
                AGE 6 - MEMBER SINCE JUNE 2020 - CREATOR OF THE DARK NIGHT
              </Text>
              <Text
                fontFamily={"Poppins,sans-serif"}
                textDecoration={"underline"}
                fontSize="2xl"
              >
                Ferra added symbolism and story-telling into her game to remind
                us all that friendship can help light up a dark night.
              </Text>

              <Button
                leftIcon={<ChevronRightIcon />}
                fontFamily={"Poppins,sans-serif"}
                fontSize={"17px"}
                w={{ base: "80%", md: "70%" }}
                py={7}
                rounded={"full"}
                _hover={{ bg: "gray.200" }}
                bg="gray.200"
                color="#474C72"
                variant="solid"
              >
                Why Ferra Loves to code
              </Button>
            </Stack>
          </SimpleGrid>
        );
      case 2:
        return (
          <SimpleGrid
            bg="#5225EE"
            w={"90%"}
            gap={"40px"}
            margin={"auto"}
            columns={{ base: 1, md: 2, xl: 2 }}
            alignItems={"center"}
            borderRadius={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171dbd59f6aad353c8afe1d_Summer_DesktopThumbnail-6c292f705db3ad34952f5624989b7212.jpg"
              borderRadius="lg"
            />
            <Stack gap="30px" padding={"30px"}>
              <Heading
                fontSize={{ base: "40px", md: "100px" }}
                lineHeight={"80px"}
              >
                Meet Summer
              </Heading>
              <Text
                textDecoration={"underline"}
                fontFamily={"mono"}
                fontSize={"20px"}
              >
                AGE 7 - MEMBER SINCE JUNE 2019 - CREATOR OF SWISHY CLOVER
              </Text>
              <Text
                fontFamily={"Poppins,sans-serif"}
                textDecoration={"underline"}
                fontSize="2xl"
              >
                Creativity and code go hand and hand. Summer adds her own style
                to every game she makes so that it has almost as much pizazz as
                she does!
              </Text>

              <Button
                leftIcon={<ChevronRightIcon />}
                fontFamily={"Poppins,sans-serif"}
                fontSize={"17px"}
                w={{ base: "80%", md: "70%" }}
                py={7}
                rounded={"full"}
                _hover={{ bg: "gray.200" }}
                bg="gray.200"
                color="#474C72"
                variant="solid"
              >
                Why Summer Loves to code
              </Button>
            </Stack>
          </SimpleGrid>
        );
      case 3:
        return (
          <SimpleGrid
            bg="#5225EE"
            w={"90%"}
            gap={"40px"}
            margin={"auto"}
            columns={{ base: 1, md: 2, xl: 2 }}
            alignItems={"center"}
            borderRadius={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f4eed9d86b73621cd338_Andrew_DesktopThumbnail-5bd6103f2d4fd185027ec6b899485c8e.jpg"
              borderRadius="lg"
            />
            <Stack gap="30px" padding={"30px"}>
              <Heading
                fontSize={{ base: "50px", md: "100px" }}
                lineHeight={"80px"}
              >
                Meet Andrew
              </Heading>
              <Text
                textDecoration={"underline"}
                fontFamily={"mono"}
                fontSize={"20px"}
              >
                AGE 9 - MEMBER SINCE JULY 2019 - CREATOR OF LOUIE'S ADVENTURE
              </Text>
              <Text
                fontFamily={"Poppins,sans-serif"}
                textDecoration={"underline"}
                fontSize="2xl"
              >
                Andrew's video is a must watch to see where programming and
                personality meet! Who says you can't be a coder and a comedian?
              </Text>

              <Button
                leftIcon={<ChevronRightIcon />}
                fontFamily={"Poppins,sans-serif"}
                fontSize={"17px"}
                w={{ base: "80%", md: "70%" }}
                py={7}
                rounded={"full"}
                _hover={{ bg: "gray.200" }}
                bg="gray.200"
                color="#474C72"
                variant="solid"
              >
                Why Andrew Loves to code
              </Button>
            </Stack>
          </SimpleGrid>
        );
      case 4:
        return (
          <SimpleGrid
            bg="#5225EE"
            w={"90%"}
            gap={"40px"}
            margin={"auto"}
            columns={{ base: 1, md: 2, xl: 2 }}
            alignItems={"center"}
            borderRadius={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f42b20d048fd76bfda8e_Parth_DesktopThumbnail-65e360ae7a62997d27d47a3f7f1cd9a2.jpg"
              borderRadius="lg"
            />
            <Stack gap="30px" padding={"30px"}>
              <Heading
                fontSize={{ base: "50px", md: "100px" }}
                lineHeight={"80px"}
              >
                Meet Parth
              </Heading>
              <Text
                textDecoration={"underline"}
                fontFamily={"mono"}
                fontSize={"20px"}
              >
                AGE 10 - MEMBER SINCE MAY 2020 - CREATOR OF OCTOPUS VS MINNOWS
              </Text>
              <Text
                fontFamily={"Poppins,sans-serif"}
                textDecoration={"underline"}
                fontSize="2xl"
              >
                Parth was one of the winners of our Codeverse Showcase. In this
                video, he shares his experience and passes on some advice to
                future coders.
              </Text>

              <Button
                leftIcon={<ChevronRightIcon />}
                fontFamily={"Poppins,sans-serif"}
                fontSize={"17px"}
                w={{ base: "80%", md: "70%" }}
                py={7}
                rounded={"full"}
                _hover={{ bg: "gray.200" }}
                bg="gray.200"
                color="#474C72"
                variant="solid"
              >
                Why Parth Loves to code
              </Button>
            </Stack>
          </SimpleGrid>
        );
      case 5:
        return (
          <SimpleGrid
            bg="#5225EE"
            w={"90%"}
            gap={"40px"}
            margin={"auto"}
            columns={{ base: 1, md: 2, xl: 2 }}
            alignItems={"center"}
            borderRadius={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f53554116e2ed2a20555_Riley_DesktopThumbnail-8142bbba6057ba4bb23bdf55af0d814d.jpg"
              borderRadius="lg"
            />
            <Stack gap="30px" padding={"30px"}>
              <Heading
                fontSize={{ base: "50px", md: "100px" }}
                lineHeight={"80px"}
              >
                Meet Riley
              </Heading>
              <Text
                textDecoration={"underline"}
                fontFamily={"mono"}
                fontSize={"20px"}
              >
                AGE 11 - MEMBER SINCE MARCH 2019 - CREATOR OF COLLECT THE GEMS,
                DODGE THE FIRE
              </Text>
              <Text
                fontFamily={"Poppins,sans-serif"}
                textDecoration={"underline"}
                fontSize="2xl"
              >
                Riley challenged herself to learn to new skills in order to
                create this engaging game which will have you playing for hours!
              </Text>

              <Button
                leftIcon={<ChevronRightIcon />}
                fontFamily={"Poppins,sans-serif"}
                fontSize={"17px"}
                w={{ base: "80%", md: "70%" }}
                py={7}
                rounded={"full"}
                _hover={{ bg: "gray.200" }}
                bg="gray.200"
                color="#474C72"
                variant="solid"
              >
                Why Riley Loves to code
              </Button>
            </Stack>
          </SimpleGrid>
        );
      case 6:
        return (
          <SimpleGrid
            bg="#5225EE"
            w={"90%"}
            gap={"40px"}
            margin={"auto"}
            columns={{ base: 1, md: 2, xl: 2 }}
            alignItems={"center"}
            borderRadius={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f59ca7baed2be831ede5_Lee_DesktopThumbnail-735fafa50fbf4b419e80ba581a90ac39.jpg"
              borderRadius="lg"
            />
            <Stack gap="30px" padding={"30px"}>
              <Heading
                fontSize={{ base: "50px", md: "100px" }}
                lineHeight={"80px"}
              >
                Meet Lee
              </Heading>
              <Text
                textDecoration={"underline"}
                fontFamily={"mono"}
                fontSize={"20px"}
              >
                AGE 13 - MEMBER SINCE JUNE 2020 - CREATOR OF FALL DUDES
              </Text>
              <Text
                fontFamily={"Poppins,sans-serif"}
                textDecoration={"underline"}
                fontSize="2xl"
              >
                Lee's game is addictingly fun and creative. Can you survive
                until the end in order to win this game?
              </Text>

              <Button
                leftIcon={<ChevronRightIcon />}
                fontFamily={"Poppins,sans-serif"}
                fontSize={"17px"}
                w={{ base: "80%", md: "70%" }}
                py={7}
                rounded={"full"}
                _hover={{ bg: "gray.200" }}
                bg="gray.200"
                color="#474C72"
                variant="solid"
              >
                Why Lee Loves to code
              </Button>
            </Stack>
          </SimpleGrid>
        );

      default:
       return (
        <SimpleGrid
        bg="#5225EE"
        w={"90%"}
        gap={"40px"}
        margin={"auto"}
        columns={{ base: 1, md: 2, xl: 2 }}
        alignItems={"center"}
        borderRadius={"50px"}
      >
        <Image
          src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6171f59ca7baed2be831ede5_Lee_DesktopThumbnail-735fafa50fbf4b419e80ba581a90ac39.jpg"
          borderRadius="lg"
        />
        <Stack gap="30px" padding={"30px"}>
          <Heading
            fontSize={{ base: "50px", md: "100px" }}
            lineHeight={"80px"}
          >
            Meet Lee
          </Heading>
          <Text
            textDecoration={"underline"}
            fontFamily={"mono"}
            fontSize={"20px"}
          >
            AGE 13 - MEMBER SINCE JUNE 2020 - CREATOR OF FALL DUDES
          </Text>
          <Text
            fontFamily={"Poppins,sans-serif"}
            textDecoration={"underline"}
            fontSize="2xl"
          >
            Lee's game is addictingly fun and creative. Can you survive
            until the end in order to win this game?
          </Text>

          <Button
            leftIcon={<ChevronRightIcon />}
            fontFamily={"Poppins,sans-serif"}
            fontSize={"17px"}
            w={{ base: "80%", md: "70%" }}
            py={7}
            rounded={"full"}
            _hover={{ bg: "gray.200" }}
            bg="gray.200"
            color="#474C72"
            variant="solid"
          >
            Why Lee Loves to code
          </Button>
        </Stack>
      </SimpleGrid>
       )
    }
  };

  return (
    <div style={{ backgroundColor: "white" , paddingTop:"80px"}}  >
        <Heading color="#0E1540" textAlign={"center"} fontSize={"50px"}  ml="30px"  mr="30px">Kids have created over 500,000 projects</Heading>
        <Text  textAlign={"center"} color={"#474C72"} fontFamily={"Poppins,sans-serif"}  fontSize={"20px"}>Meet some Codeverse creators and explore their projects below.</Text>
      <Flex
        w={"90%"}
        margin={"auto"}
        padding={3}
        direction={{ base: "column", md: "row" }}
        bg="gray.100"
        boxShadow={"xl"}
        rounded={{ base: "md", md: "full" }}
        justifyContent={"space-between"}
      >
        <Button
          fontSize={"20px"}
          _hover={{ border: "2px solid blue" }}
          rounded={"full"}
          padding={"8"}
          color="gray.700"
          onClick={() => renderCard(1)}
        >
          Ferra{" "}
          <Text as={"span"} ml="10px" color={"gray.300"}>
            Age 6
          </Text>
        </Button>

        <Button
          fontSize={"20px"}
          _hover={{ border: "2px solid blue" }}
          rounded={"full"}
          color="gray.700"
          padding={"8"}
          onClick={() => renderCard(2)}
        >
          Summer
          <Text as={"span"} ml="10px" color={"gray.300"}>
            Age 7
          </Text>
        </Button>

        <Button
          fontSize={"20px"}
          _hover={{ border: "2px solid blue" }}
          rounded={"full"}
          padding={"8"}
          color="gray.700"
          onClick={() => renderCard(3)}
        >
          Andrew{" "}
          <Text as={"span"} ml="10px" color={"gray.300"}>
            Age 9
          </Text>
        </Button>

        <Button
          fontSize={"20px"}
          _hover={{ border: "2px solid blue" }}
          rounded={"full"}
          padding={"8"}
          color="gray.700"
          onClick={() => renderCard(4)}
        >
          Parth{" "}
          <Text as={"span"} ml="10px" color={"gray.300"}>
            Age 10
          </Text>
        </Button>

        <Button
          fontSize={"20px"}
          _hover={{ border: "2px solid blue" }}
          rounded={"full"}
          padding={"8"}
          color="gray.700"
          onClick={() => renderCard(5)}
        >
          Riley{" "}
          <Text as={"span"} ml="10px" color={"gray.300"}>
            Age 11
          </Text>
        </Button>
        <Button
          fontSize={"20px"}
          _hover={{ border: "2px solid blue" }}
          rounded={"full"}
          padding={"8"}
          color="gray.700"
          onClick={() => renderCard(6)}
        >
          Lee{" "}
          <Text as={"span"} ml="10px" color={"gray.300"}>
            Age 13
          </Text>
        </Button>
      </Flex>
      <Box mt={4}>{selectedButton && renderButtonDetails()}</Box>
    </div>
  );
};

export default Kids;
