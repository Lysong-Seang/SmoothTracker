import {
  Center,
  Heading,
  Text,
  Button,
  Link,
  Spacer,
  Box,
  Flex,
} from "@chakra-ui/react";

import Image from "next/image";
import React from "react";
import home from "../public/Home.png";
import task from "../public/task.jpeg";

function Homepage() {
  return (
    <div>
      <Center>
        <Heading as="h1" size="xl" m={4}>
          Welcome to Smooth Tracker
        </Heading>
      </Center>
      <Flex direction={["column", "row"]} align="center">
        <Box flex="2">
          <Heading as="h3" size="md" m={4} ml={20}>
            Track and Manage your Isssues
          </Heading>
          <Text ml={20}>
            Centralize all your tasks and issues in a single, convenient <br />
            location with Smooth Tracker. Our intuitive dashboard offers <br />
            seamless tracking of your progress, helping you stay organized{" "}
            <br />
            and helping you stay organized and dedicated <br />
            to resolving any challenges that arise.
          </Text>
          <Link href="/sign-up">
            <Button
              bg="white"
              color="black"
              _hover={{ bg: "grey", color: "white" }}
              border="1px"
              borderColor="black"
              m={4}
              ml={20}
            >
              Get Started
            </Button>
          </Link>
        </Box>
        <Box mr={20}>
          <Image
            src={home}
            alt="Home Image"
            width={500} // Specify width
            height={300} // Specify height
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Box
        ml={20}
        overflow="hidden"
        borderRadius="20px"
        width={300}
        height={300}
      >
        <Image
          src={task}
          alt="Task Image"
          width={300} // Specify width
          height={300} // Specify height
          objectFit="contain"
          layout="responsive" // This makes the image scale properly within the container
        />
      </Box>
    </div>
  );
}

export default Homepage;
