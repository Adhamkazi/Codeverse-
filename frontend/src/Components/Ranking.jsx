import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";
const Ranking = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isAccordionOpentwo, setAccordionOpentwo] = useState(false);
  const [isAccordionOpenthree, setAccordionOpenthree] = useState(false);

  const [isAccordionOpenfour, setAccordionOpenfour] = useState(false);
  const [isAccordionOpenfive, setAccordionOpenfive] = useState(false);

  const handleAccordionClick = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const handleAccordionClickfive = () => {
    setAccordionOpenfive(!isAccordionOpenfive);
  };

  const handleAccordionClickfour = () => {
    setAccordionOpenfour(!isAccordionOpenfour);
  };

  const handleAccordionClickthree = () => {
    setAccordionOpenthree(!isAccordionOpenthree);
  };


  const handleAccordionClicktwo = () => {
    setAccordionOpentwo(!isAccordionOpentwo);
  }
  return (
    <div>
      <Box
        bg="#F4F9FD"
        boxShadow={"sm"}
        paddingTop={{ base: "0px", md: "40px" }}
      >
        <Box w={{ base: "90%", md: "60%" }} margin={"auto"} pt="30px">
          <Heading
            fontFamily={"Poppins,sans-serif"}
            color={"#0E1540"}
            textAlign={"center"}
            fontWeight={700}
            fontSize={{ base: "50px", md: "55px" }}
            lineHeight={"56px"}
          >
            Have fun and learn by doing
          </Heading>
          <Text
            mt="10px"
            fontFamily={"Poppins,sans-serif"}
            fontSize={"20px"}
            textAlign={"center"}
            color={"#474C72"}
          >
            Kids are naturally curious and love to build. Codeverse rewards
            creativity through badges, points, and rank.
          </Text>
        </Box>

        {/* <SimpleGrid > */}
        <Accordion allowToggle w={"80%"} margin={"auto"}>
          <AccordionItem>
            <h2>
              <AccordionButton gap="10px">
                <MdRadioButtonUnchecked size={20} color="#019873" />
                <Box
                  fontFamily={"SF pro text,sans-serif"}
                  fontWeight={700}
                  as="span"
                  fontSize={"25px"}
                  textAlign="left"
                  color={isAccordionOpen ? "#019873" : "black"}
                  onClick={handleAccordionClick}
                >
                  Rank 01 - Codeling
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={"50px"}
                margin={"auto"}
              >
                <Box>
                  <Text
                    color={"black"}
                    mt="40px"
                    fontFamily={"SF pro text,sans-serif"}
                  >
                    Every kid starts as a Codeling. Here, kids are introduced to
                    basic coding concepts and will use these skills to build
                    their first mobile game or app! Kids at this rank are able
                    to make single player games with simple interactions and
                    share their apps and games with family.
                  </Text>
                </Box>
                <Flex direction={"column"} justifyContent={"center"}>
                  <Image
                    w={{ base: "100%", md: "60%" }}
                    alignSelf={"center"}
                    src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6172027eae4b4658c1a3bcfb_RankRibbons-01-475a979f9d4470342cef0acd5100b192-p-500.png"
                  />
                  <Text
                    color={"#474C72"}
                    fontFamily={"SF pro text,sans-serif"}
                    textAlign={"center"}
                    fontWeight={700}
                  >
                    Gain access to beginner coding Missions and learn the
                    following coding concepts:
                  </Text>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={"10px"}
                    mt="20px"
                  >
                    <Button
                      leftIcon={<BsFillCheckCircleFill color="orange" />}
                      bg="white"
                      color="black"
                      rounded={"full"}
                      variant="solid"
                      boxShadow={"xl"}
                    >
                      Basic Method
                    </Button>
                    <Button
                      leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                      bg="white"
                      color="black"
                      rounded={"full"}
                      variant="solid"
                      boxShadow={"xl"}
                    >
                      Events
                    </Button>

                    <Button
                      leftIcon={<BsFillCheckCircleFill color="#745BFF" />}
                      bg="white"
                      color="black"
                      rounded={"full"}
                      variant="solid"
                      boxShadow={"xl"}
                    >
                      Toolbox
                    </Button>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Accordion-2 */}

        <Accordion allowToggle w={"80%"} margin={"auto"}>
          <AccordionItem>
            <h2>
              <AccordionButton gap="10px">
                <MdRadioButtonUnchecked size={20} color="#019873" />
                <Box
                  fontFamily={"SF pro text,sans-serif"}
                  as="span"
                  fontSize={"25px"}
                  fontWeight={700}
                  textAlign="left"
                  color={isAccordionOpentwo ? "#019873" : "black"}
                  onClick={handleAccordionClicktwo}
                >
                  Rank 02 -Engineer
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={"50px"}
                margin={"auto"}
              >
                <Box>
                  <Text
                    color={"black"}
                    mt="40px"
                    fontFamily={"SF pro text,sans-serif"}
                  >
                    Kids at this rank will learn how to Import Classes, use Var
                    Statements, and use advanced Events. Engineers also learn
                    about RGB Color, using Labels, and are introduced to using
                    Numeric Variables as Parameters. Kids at this rank are able
                    to make games that have much more visual customization and
                    have instructions on the screen adding more personalization
                    to their games and starting to develop their creativity.
                  </Text>
                </Box>
                <Flex direction={"column"} justifyContent={"center"}>
                  <Image
                    w={{ base: "100%", md: "60%" }}
                    alignSelf={"center"}
                    src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6172029a14cf549eb3adf244_RankRibbons-02-f06b8e56e2a96727320592c4ef57d57a-p-500.png"
                  />
                  <Text
                     color={"#474C72"}
                     fontFamily={"SF pro text,sans-serif"}
                     textAlign={"center"}
                     fontWeight={700}
                  >
                    Gain access to intermediate coding Missions and learn the
                    following coding concepts:
                  </Text>
                  <Wrap justify={{ base: "center", md: "center" }} mt="20px">
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Import Classes
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Var Statements
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#745BFF" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        RGB Color
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="blue" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Basic Labels
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Numeric Variable Parameters
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Position Coordinates (X & Y)
                      </Button>
                    </WrapItem>
                  </Wrap>
                </Flex>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Accordion-3 */}

        <Accordion allowToggle w={"80%"} margin={"auto"}>
          <AccordionItem>
            <h2>
              <AccordionButton gap="10px">
                <MdRadioButtonUnchecked size={20} color="#019873" />
                <Box
                  fontFamily={"SF pro text,sans-serif"}
                  as="span"
                  fontWeight={700}
                  fontSize={"25px"}
                  textAlign="left"
                  color={isAccordionOpenthree ? "#019873" : "black"}
                  onClick={handleAccordionClickthree}
                >
                  Rank 03 - Pilot
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={"50px"}
                margin={"auto"}
              >
                <Box>
                  <Text
                    color={"black"}
                    mt="40px"
                    fontFamily={"SF pro text,sans-serif"}
                  >
                    Kids at this rank will learn about Text Variables, Random
                    Number Variables, and using Variables in Labels. They will
                    be able to use Physics and Math Methods. Pilots will be
                    introduced to basic Loops and Timers. Kids at this rank are
                    able to make games with multiple levels, timed animations,
                    and that are different every time you play. This allows them
                    to develop new worlds and implement story telling into their
                    games.
                  </Text>
                </Box>
                <Flex direction={"column"} justifyContent={"center"}>
                  <Image
                    w={{ base: "100%", md: "60%" }}
                    alignSelf={"center"}
                    src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/617202a7260fb6394a77aeab_RankRibbons-03-9b4d893d4b2a2840f223406b80462dd8.png"
                  />
                  <Text
                     color={"#474C72"}
                     fontFamily={"SF pro text,sans-serif"}
                     textAlign={"center"}
                     fontWeight={700}
                  >
                    Gain access to intermediate coding Missions and learn the
                    following coding concepts:
                  </Text>
                  <Wrap justify={{ base: "center", md: "center" }} mt="20px">
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Math Methods
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Velocity
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#745BFF" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Rotational Angles
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="blue" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Nested Events
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Variable Creation in Events
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Basic Loops
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#745BFF" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Random Number Variables
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="blue" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Timers
                      </Button>
                    </WrapItem>
                  </Wrap>
                </Flex>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Accordion-4 */}

        <Accordion allowToggle w={"80%"} margin={"auto"}>
          <AccordionItem>
            <h2>
              <AccordionButton gap="10px">
                <MdRadioButtonUnchecked size={20} color="#019873" />
                <Box
                  fontFamily={"SF pro text,sans-serif"}
                  as="span"
                  fontSize={"25px"}
                  fontWeight={700}
                  textAlign="left"
                  color={isAccordionOpenfour ? "#019873" : "black"}
                  onClick={handleAccordionClickfour}
                >
                  Rank 04 - Specialist
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={"50px"}
                margin={"auto"}
              >
                <Box>
                  <Text
                    color={"black"}
                    mt="40px"
                    fontFamily={"SF pro text,sans-serif"}
                  >
                    Kids at this rank will learn learn about Lists, Conditional
                    Statements, and Boolean Variables. Specialists will explore
                    advanced Physics Methods like air resistance, friction, and
                    mass. Kids at this rank are able to make games that use
                    complex logic to tell if a player wins and use physics like
                    in the real world.
                  </Text>
                </Box>
                <Flex direction={"column"} justifyContent={"center"}>
                  <Image
                    w={{ base: "100%", md: "60%" }}
                    alignSelf={"center"}
                    src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/617202a9e9a7f7914c3fc611_RankRibbons-04-a67f6bb5abcad8ba7ade7e443970dfbb.png"
                  />
                  <Text
                       color={"#474C72"}
                       fontFamily={"SF pro text,sans-serif"}
                       textAlign={"center"}
                       fontWeight={700}
                  >
                    Gain access to intermediate coding Missions and learn the
                    following coding concepts:
                  </Text>
                  <Wrap justify={{ base: "center", md: "center" }} mt="20px">
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Lists
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Advanced Physics Methods
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#745BFF" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Random Numbers
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="blue" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Advanced Timers
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        IF Statements
                      </Button>
                    </WrapItem>
                  </Wrap>
                </Flex>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Accordion-5 */}

        <Accordion allowToggle w={"80%"} margin={"auto"}>
          <AccordionItem>
            <h2>
              <AccordionButton gap="10px">
                <MdRadioButtonUnchecked size={20} color="#019873" />
                <Box
                  fontFamily={"SF pro text,sans-serif"}
                  as="span"
                  fontWeight={700}
                  fontSize={"25px"}
                  textAlign="left"
                  color={isAccordionOpenfive ? "#019873" : "black"}
                  onClick={handleAccordionClickfive}
                >
                  Rank 05 - Commander
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={"50px"}
                margin={"auto"}
              >
                <Box>
                  <Text
                    color={"black"}
                    mt="40px"
                    fontFamily={"SF pro text,sans-serif"}
                  >
                    When kids reach the rank of Commander, they have great
                    understanding of the fundamentals of coding. Kids at this
                    rank can now deep dive into advanced topics, like For Loops,
                    Index Variables, and Trigonometry Methods. Kids at this rank
                    are able to make games that track game statistics like
                    health and power, games that alternate turns, and app with
                    advanced user experience design.
                  </Text>
                </Box>
                <Flex direction={"column"} justifyContent={"center"}>
                  <Image
                    w={{ base: "100%", md: "60%" }}
                    alignSelf={"center"}
                    src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/617202ac2f38cabe1570af7f_RankRibbons-05-d7541d773b20139c087351c57b5668d5.png"
                  />
                  <Text
                       color={"#474C72"}
                       fontFamily={"SF pro text,sans-serif"}
                       textAlign={"center"}
                       fontWeight={700}
                  >
                    Gain access to intermediate coding Missions and learn the
                    following coding concepts:
                  </Text>
                  <Wrap justify={{ base: "center", md: "center" }} mt="20px">
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#26D5A4" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Advanced Math Methods
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="#745BFF" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Pro Physics Methods
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="blue" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Index Variables
                      </Button>
                    </WrapItem>

                    <WrapItem>
                      <Button
                        leftIcon={<BsFillCheckCircleFill color="orange" />}
                        bg="white"
                        color="black"
                        rounded={"full"}
                        variant="solid"
                        boxShadow={"xl"}
                      >
                        Advanced FOR Loops
                      </Button>
                    </WrapItem>
                  </Wrap>
                </Flex>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box bg="blue.400" >
            <Flex  pt="30px" alignItems={"center"} justifyItems={"center"} justifyContent={"center"}>
            <Image src='https://www.kidsafeseal.com/sealimage/12761499322104483935/codeverse_extralarge_whitetm.png' w={{base:"50%",md:'10%'}} />
            </Flex>
            <Box  w={{base:"90%",md:"70%"}}  margin='auto'mt="30px" textAlign={'center'}>
            <Heading fontSize={{base:"45px",md:"50px"}} >Safe and secure for under 13's</Heading>
            <Text mt="20px" fontSize={{base:"15px",md:"18px"}} >Your kid's safety and security is our top priority. In addition to our automated and manual moderation of content, you can access your kid's profile to track their progress, view their content, and see their social connections. There is no direct communication between users and you may opt to change their profile to private at anytime.</Text>
            <Button  rounded={'full'} bg="white" color="BLACK" my="30px" py={4}  px={9}>Learn more</Button>
            </Box>

            <Box>
                <Image w={'70%'} margin={'auto'} src='https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/61734620d68895c925c45c49_SafeAndSecure-18ece240714f6283cabc3cc47b2e2e87.png' />
            </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Ranking;
