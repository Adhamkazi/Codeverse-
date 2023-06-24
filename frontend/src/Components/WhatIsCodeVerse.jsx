import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Container,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

const WhatIsCodeVerse = () => {
  return (
    <div>
      <Box bg="white" pt={{base:"20px",md:"70px"}}>
        <Heading textAlign={"center"} fontSize={"70px"} color="black">What is Codeverse?</Heading>
        {/* box1 */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          gap={"30px"}
          justifyItems={"center"}
          alignContent={"center"}
          alignItems={"center"}
          w={"90%"}
          margin="auto"
          pt="60px"
        >
          <Box>
            <Text
              fontSize={"30px"}
              fontFamily={"Poppins,sans-serif"}
              color="black"
              fontWeight={700}
            >
              Real tools
            </Text>
            <Text
              fontSize={"20px"}
              color={"#474C72"}
              fontFamily={"SF pro text , sans-serif"}
            >
              Our interactive coding platform, Codeverse Studio, includes a real
              programming language and all the developer tools kids need to
              build real apps and games and quickly bring their creative ideas
              to life.
            </Text>
            <Text
              mt="10px"
              color={"#474C72"}
              textDecoration={"underline"}
              fontFamily={"mono"}
            >
              LEARN MORE ABOUT CODEVERSE STUDIO
            </Text>
          </Box>
          <Box>
            <Image
              w={"80%"}
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/616763f8658bd97135922f21_RealTools-min-f3ecee6329d9d851c00370dcf00a256f.png"
            />
          </Box>
        </SimpleGrid>

        {/* Box-2 */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          gap={"30px"}
          alignItems={"center"}
          w={"90%"}
          margin="auto"
          pt="100px"
        >
          <Box order={{ base: 1, md: 2 }}>
            <Text
              fontSize={"30px"}
              fontFamily={"Poppins,sans-serif"}
              color="black"
              fontWeight={700}
            >
              Personalized classes
            </Text>
            <Text
              fontSize={"20px"}
              color={"#474C72"}
              fontFamily={"SF pro text , sans-serif"}
            >
              Instructor-led, personalized 1-on-1 classes that keep kids
              motivated and inspired to build new coding skills every week. Our
              expert guides allow your kids to learn at their own pace, and help
              build confidence while they play and create!
            </Text>
            <Text
              mt="10px"
              color={"#474C72"}
              textDecoration={"underline"}
              fontFamily={"mono"}
            >
              MEET OUR GUIDES
            </Text>
          </Box>
          <Box order={{ base: 2, md: 1 }}>
            <Image
              w={"80%"}
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/616767be7dac3b2debf95d73_PersonalizedClasses-min-d2e71932534c8e2d7ee2dbd6fc345a0c.png"
            />
          </Box>
        </SimpleGrid>
        {/* Box-3 */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          gap={"30px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"90%"}
          margin="auto"
          pt="100px"
        >
          <Box>
            <Text
              fontSize={"30px"}
              fontFamily={"Poppins,sans-serif"}
              color="black"
              fontWeight={700}
            >
              Learn anytime, anywhere
            </Text>
            <Text
              fontSize={"20px"}
              color={"#474C72"}
              fontFamily={"SF pro text , sans-serif"}
            >
              Creators can tap into their creativity instantly, with access to
              our full library of on-demand educational coding activities that
              range in difficulty level from Beginner to Pro.
            </Text>
            <Text
              mt="10px"
              color={"#474C72"}
              textDecoration={"underline"}
              fontFamily={"mono"}
            >
              LEARN MORE
            </Text>
          </Box>
          <Box>
            <Image
              w={"80%"}
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6167687f818cfefa247138b2_MissionsAnytimeAnywhere-min-40e38df2c407afd6973130bdbb402a27.png"
            />
          </Box>
        </SimpleGrid>
        {/* Box-4 */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          gap={"30px"}
          justifyItems={"center"}
          alignContent={"center"}
          alignItems={"center"}
          w={"90%"}
          margin="auto"
          pt="100px"
        >
          <Box order={{ base: 1, md: 2 }}>
            <Text
              fontSize={"30px"}
              fontFamily={"Poppins,sans-serif"}
              color="black"
              fontWeight={700}
            >
              Social connection
            </Text>
            <Text
              fontSize={"20px"}
              color={"#474C72"}
              fontFamily={"SF pro text , sans-serif"}
            >
              Shared experiences are more fun! Codeverse makes it easy for kids
              to collaborate with friends, send their creations to anyone, and
              follow other users.
            </Text>
            <Text
              mt="10px"
              color={"#474C72"}
              textDecoration={"underline"}
              fontFamily={"mono"}
            >
              10 FEATURED CREATORS TO FOLLOW
            </Text>
          </Box>
          <Box order={{ base: 2, md: 1 }}>
            <Image
              w={"80%"}
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/616768c0c2078d1fe8ef4cdf_CreateWithFriends-min-26f8d9a1d901c7beb7203dfffa571dd1.png"
            />
          </Box>
        </SimpleGrid>
      </Box>
      <Box bgGradient="linear(to-l,  #FDB127,#FF60C0)">
        <Container maxW={"5xl"}>
          <SimpleGrid
            pt="100px"
            columns={{ base: 1, md: 2 }}
            alignItems={"center"}
          >
            <Stack
              spacing={4}
              color={"white"}
              fontFamily={"Poppins,sans-serif"}
            >
              <Heading
                fontFamily={"Poppins,sans-serif"}
                fontSize={{ base: "30px", md: "40px" }}
              >
                Memberships starting at $159/month
              </Heading>
              <Text
                textAlign={{ base: "center", md: "left" }}
                fontFamily={"Poppins,sans-serif"}
                fontSize={{ base: "18px", md: "19px" }}
              >
                Join our community of lifelong creators. All memberships include
                unlimited access to Codeverse Studio, 1-on-1 personalized
                instruction, and bonus Nova Coins every month.
              </Text>
              <Text
                textDecoration={"underline"}
                textAlign={{ base: "center", md: "left" }}
              >
                VIEW MEMBERSHIP OPTIONS
              </Text>
              <Button
                bg="white"
                color={"black"}
                py={7}
                w={"50%"}
                variant={"solid"}
                rounded={"full"}
                alignSelf={{base:"center",md:"flex-start"}}
              >
                Book your free class
              </Button>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              ></Stack>
            </Stack>
            <Flex display={{ base: "none", md: "block" }}>
              <Image
                alt={"feature image"}
                src={
                  "https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/617351f2945aff534ff7ea8f_Coding_GuideKid-16-6073939dffcd275d108c820dacb8b89e.png"
                }
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
};

export default WhatIsCodeVerse;
