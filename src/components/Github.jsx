import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { GithubStats } from "./GithubStats";

const lightGithubStats = [
  {
    img1: "https://github-readme-stats.vercel.app/api/top-langs/?username=AhamadShaikh&theme=flag-india",
    img2: "https://github-readme-stats.vercel.app/api?username=AhamadShaikh&show_icons=true&theme=flag-india",
    img3: "https://github-readme-streak-stats.herokuapp.com/?user=AhamadShaikh&theme=flag-india",
  },
];

const darkGithubStats = [
  {
    img1: "https://github-readme-stats.vercel.app/api/top-langs/?username=AhamadShaikh&theme=great-gatsby",
    img2: "https://github-readme-stats.vercel.app/api?username=AhamadShaikh&show_icons=true&theme=great-gatsby",
    img3: "https://github-readme-streak-stats.herokuapp.com/?user=AhamadShaikh&theme=great-gatsby",
  },
];

export const Github = ({theme}) => {
  const { colorMode } = useColorMode();

  return (
    <Box mt={'50px'}
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "3rem 5rem",
        xl: "3rem 5rem",
        "2xl": "3rem 5rem",
      }}
    >
      {/* first */}
      <Flex>
        <Text
          // fontSize={{
          //   base: "3xl",
          //   sm: "3xl",
          //   md: "4xl",
          //   lg: "4xl",
          //   xl: "4xl",
          //   "2xl": "4xl",
          // }}
          fontWeight={"bold"}
          mr={".6rem"} ml={'45%'}
          // bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
          fontSize={"22px"}
          color={"#4DB5FF"}
          mb={"30px"}
        >
          Github
        </Text>

        <Text
          fontSize={{
            base: "3xl",
            sm: "3xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"bold"}
        >
          {/* Stats */}
        </Text>
      </Flex>

      {/* second */}
      {theme === "dark"
        ? lightGithubStats?.map((el, index) => (
            <GithubStats key={index} {...el} />
          ))
        : darkGithubStats?.map((el, index) => (
            <GithubStats key={index} {...el} />
          ))}
    </Box>
  );
};
