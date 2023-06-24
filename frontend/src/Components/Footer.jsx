
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#5225EE", "#5225EE")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8}>
          <Stack align={{base:"center",md:"flex-start"}}>
            <Heading
              fontSize={"15px"}
              color="#FDBA17"
              fontFamily={"Poppins,sans-serif"}
            >
              Codeverse
            </Heading>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"} mt="20px">
              How kids Learn
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Pricing{" "}
            </Link>
          </Stack>
          <Stack align={{base:"center",md:"flex-start"}}>
            <Heading
              fontSize={"15px"}
              color="#FDBA17"
              fontFamily={"Poppins,sans-serif"}
            >
              Resources
            </Heading>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"} mt="20px">
              Blog
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Press{" "}
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              FAQ{" "}
            </Link>
          </Stack>
          <Stack align={{base:"center",md:"flex-start"}}>
            <Heading
              fontSize={"15px"}
              color="#FDBA17"
              fontFamily={"Poppins,sans-serif"}
            >
              Social
            </Heading>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}mt="20px">
              Twitter
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Instagram{" "}
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Facebook
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              LinkedIn{" "}
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Youtube{" "}
            </Link>
          </Stack>
          <Stack align={{base:"center",md:"flex-start"}}>
            <Heading
              fontSize={"15px"}
              color="#FDBA17"
              fontFamily={"Poppins,sans-serif"}
            >
              Company
            </Heading>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"} mt="20px">
              Terms & Conditions
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Privacy Policy{" "}
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Become A Guide{" "}
            </Link>
            <Link href={"#"} fontFamily={"Poppins,sans-serif"}>
              Careers{" "}
            </Link>
            <Image  w={{base:"40%",md:"70%"}} src="https://www.kidsafeseal.com/sealimage/12761499322104483935/codeverse_extralarge_whitetm.png" />
          </Stack>

          <Flex
            gap="30px"
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Image
              w={{ base: "50%", md: "70%" }}
              h={{ base: "30%", md: "20%" }}
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/61735425d2ba22321fda5bdd_americademy.png"
            />
            <Image
              w={{ base: "20%", md: "20%" }}
              h={{ base: "40%", md: "20%" }}
              src="https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6173543ac1194c6dbf734dba_white-logo.png"
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Box bg='#3808DC' p="7px" ><Text color="gray.400" textAlign={"center"}  fontFamily={"Poppins,sens-serif"}>© Copyright 2019 Americademy, Inc.</Text></Box>
      

    </Box>
  );
}
