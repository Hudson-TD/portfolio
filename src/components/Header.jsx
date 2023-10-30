import React, { useState } from "react";
import { Heading, Center, Box } from "@chakra-ui/react";

import Navigation from "./Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };
  return (
    <>
      <Box p={10} id="headerBg" border="2px" borderColor="grey">
        <header>
          <Box m={10}>
            <Center>
              <Heading id="nameHeader" as="h2" size="2xl" noOfLines={1}>
                Tyler Hudson
              </Heading>
            </Center>
          </Box>
          <Box>
            <Center>
              <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </Center>
          </Box>
        </header>
      </Box>

      <main>{renderPage()}</main>
    </>
  );
}
