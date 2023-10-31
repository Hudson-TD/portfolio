import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Container,
  Divider,
  Heading,
} from "@chakra-ui/react";

export default function Resume() {
  return (
    <>
      <Box mt={8}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Resume
          </Heading>
        </Center>
      </Box>

      <Container mt={8} mb={20}>
        <Center>
          <div id="resumeBtn" className="bottom-spacing">
            <a href={require("../../assets/Resume _Tyler_Hudson.pdf")} download>
              <h4>Download Resume (PDF)</h4>
            </a>
          </div>
        </Center>
      </Container>

      <Divider orientation="horizontal" mb={2} mt={4} />

      <Box my={6}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Skills
          </Heading>
        </Center>
      </Box>

      <Container>
        <Accordion defaultIndex={[0]} allowMultiple textAlign="center">
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Languages</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>JavaScript</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Front-End</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <br />
                <li>Bootstrap</li>
                <li>Chakra UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Back-End</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Database</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>MySQL</li>
                <li>Sequelize</li>
                <br />
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
}
