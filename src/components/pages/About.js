import React from "react";
import { Heading, Center, Box, Image, Text, Badge } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box my={6}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Nice to meet you!
          </Heading>
        </Center>
      </Box>
      <Box>
        <Center>
          <Image
            id="avatarBackground"
            borderRadius="full"
            boxSize="250px"
            src="https://i.ibb.co/tpdPkc6/sticker.png"
            alt="Tyler Hudson"
            mb={8}
          />
        </Center>
      </Box>

      <Box m={1} mb={1}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Aspiring Full-Stack Developer
          </Heading>
        </Center>

        <Center>
          <Badge mt={2} ml="1" fontSize="0.8em" colorScheme="purple">
            Currently looking for Opportunities!
          </Badge>
        </Center>
      </Box>

      <Box>
        <Center>
          <Text id="aboutMeText" fontSize="2xl" w={750} mt={12} align="center">
            Thank you for taking the time to visit my website! I am a driven and
            motivated individual looking to transition into a career in web
            development. I am a firm believer that we can do whatever we want in
            life with enough dicipline, effort, and practice.
            <br />
            <Box>
              <Center>-</Center>
            </Box>
            <br />I have a bachelors degree in business from the University of
            South Carolina where I majored in marketing. I am also a graduate of
            Georgia Institute of Technology's sponsored full stack web
            development bootcamp. In addition to this certification, I have 5+
            years of work experience in the technology space, primarily
            operating as a technical support manager. My love of technology and
            problem solving introduced me to the idea of pursing development as
            a career.
          </Text>
        </Center>
      </Box>
    </>
  );
}
