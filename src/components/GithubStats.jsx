import React from "react";
import { Center, Flex, Box, Image, VStack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

export const GithubStats = ({ img1, img2, img3 }) => {
  return (
    <VStack spacing={"1rem"}>
      <Center>
        <Image src={img1} id="github-top-langs" />
      </Center>

      <Flex
        gap={"1rem"}
        display={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Image src={img2} id="github-stats-card" />
        <Box bg={"black"}>
          <Image src={img3} id="github-streak-stats"  />
        </Box>
      </Flex>

      <Center
        boxShadow={
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        }
        p={"1rem"}
        borderRadius={"5px"}
        border={"1px solid white"}
      >
        <GitHubCalendar username="AhamadShaikh" />
      </Center>
    </VStack>
  );
};
