import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

export default function Navigation({ handlePageChange }) {
  return (
    <>
      <Tabs variant="soft-rounded" size="md" colorScheme="purple" isLazy="true">
        <TabList>
          <Tab href="#about" onClick={() => handlePageChange("About")}>
            <p>About Me</p>
          </Tab>
          <Tab href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            <p>Portfolio</p>
          </Tab>
          <Tab href="#resume" onClick={() => handlePageChange("Resume")}>
            <p>Resume</p>
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}
