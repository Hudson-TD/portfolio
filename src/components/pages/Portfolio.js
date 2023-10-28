import React from "react";
import {
  Heading,
  Center,
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <>
      <Box my={6}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Work and contributions:
          </Heading>
        </Center>
      </Box>

      <div class="cardGroup">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dinner table with food"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Aldente</Heading>
              <Text>
                This application is designed to help anyone and everyone looking
                for a simple and organized way to search for and save recipes.
                It features four different pages, including a home page, a
                results page, a recipe page, and "My Cookbook", which displays
                the user's saved recipes.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JQuery</ListItem>
                <ListItem>Moment.js</ListItem>
                <ListItem>Tailwind CSS</ListItem>
                <ListItem>TheMealDB API</ListItem>
                <ListItem>TheCocktailDB API</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open("https://github.com/crhinesmith/alDente");
                }}
              >
                Visit Repository
              </Button>
            </CardFooter>
          </Center>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://i.ibb.co/7CgJNkt/JATE.gif"
              alt="J.A.T.E Just Another Text Editor"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JavaScript</ListItem>
                <ListItem>Webpack</ListItem>
                <ListItem>IndexedDB</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>Express.js</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://github.com/Hudson-TD/module_nineteen_challenge_hudsontd"
                  );
                }}
              >
                Visit Repository
              </Button>
            </CardFooter>
          </Center>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Storm with lightning in the sky"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Weather Forecast Dashboard</Heading>
              <Text>
                This is a responsive API driven web app that displays locational
                weather data along with a five day forecast. City searches are
                stored locally for quick access in future sessions.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JavaScript</ListItem>
                <ListItem>Tailwind CSS</ListItem>
                <ListItem>Open Weather API</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://github.com/Hudson-TD/module_six_challenge_hudsontd"
                  );
                }}
              >
                Visit Repository
              </Button>
            </CardFooter>
          </Center>
        </Card>
      </div>

      <div class="cardGroup">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/3576792/pexels-photo-3576792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gif of the website homepage"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Animal Rescue Clone</Heading>
              <Text>
                This application is designed to help with pet shelters of any
                size. The major functions of the application include a search
                function where animals can be filtered by a variety of
                characteristics, a volunteers dashboard where volunteers can
                choose from volunteer-less pets to assist, and a surrender
                functionality where users can surrender any pet for which they
                feel they cannot adequately care.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Node.js</ListItem>
                <ListItem>JQuery UI</ListItem>
                <ListItem>Tailwind CSS</ListItem>
                <ListItem>Twilio sendgrid</ListItem>
                <ListItem>Sequelize</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open("https://github.com/TeryKing/Project-MeowWoof");
                }}
              >
                Visit Repository
              </Button>
            </CardFooter>
          </Center>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://i.ibb.co/LrJpsK0/JSQuiz-Game.png"
              alt="JavaScript Quiz Homepage"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> JavaScript Coding Quiz Game</Heading>
              <Text>
                This quiz will test your knowledge of Javascript. You will have
                60 seconds to complete a 5 question quiz. For each question you
                answer incorrectly your alloted time will be reduced by 10
                seconds. This quiz is over when all questions are answered or
                when the alloted time reaches 0.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://github.com/Hudson-TD/module_four_challenge_hudsontd"
                  );
                }}
              >
                Visit Repository
              </Button>
            </CardFooter>
          </Center>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://i.ibb.co/gyHdmr9/Note-Taker.png"
              alt="Express.js note taking website"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Express.js Note Taker</Heading>
              <Text>
                Simple and easy to use note taking application. Using this
                application is quite simple. Select the '+' icon in the top
                right to display the new note entry fields (title & content).
                Entering both values will illuminate the save icon in the top
                right corner. Once the note is saved the left-hand list will
                populate all of your saved noted, and you can click between them
                to display the contents on the right-hand side of the webpage.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JavaScript</ListItem>
                <ListItem>Express.js</ListItem>
                <ListItem>HTML</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://github.com/Hudson-TD/module_eleven_challenge_hudsontd"
                  );
                }}
              >
                Visit Repository
              </Button>
            </CardFooter>
          </Center>
        </Card>
      </div>
    </>
  );
}
