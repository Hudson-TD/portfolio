import React from "react";
import { Box, Center, Text, Divider, Button, HStack } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <Divider orientation="horizontal" mb={10} mt={10} />
      <footer>
        <Box>
          <Center>
            <Text fontSize="2xl" mb={6}>
              Let's Connect:
            </Text>
          </Center>
        </Box>

        <Box>
          <Center>
            <HStack>
              <Button
                type="submit"
                onClick={() => {
                  window.open("https://github.com/Hudson-TD");
                }}
                colorScheme="purple"
                leftIcon={<FaGithubSquare />}
              >
                Github
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/tylerhudson1996/");
                }}
                colorScheme="purple"
                leftIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  window.location.href = "mailto:tylerhudson96@gmail.com";
                }}
                colorScheme="purple"
                leftIcon={<MdEmail />}
              >
                Email
              </Button>
            </HStack>
          </Center>
        </Box>

        <Box mt={8} fontSize="sm">
          <Center>Built with Chakra UI ⚡️</Center>
        </Box>
      </footer>
    </>
  );
}
