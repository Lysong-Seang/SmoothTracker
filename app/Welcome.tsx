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
            width={500}
            height={300}
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Flex align="center" mt={10} background={"grey"} p={5}>
        <Box
          borderRadius="20px"
          overflow="hidden"
          ml={20}
          position="relative"
          width={500}
          height={300}
        >
          <Image src={task} alt="Task Image" layout="fill" objectFit="cover" />
        </Box>
        <Box ml={20}>
          <Text fontSize="lg">
            Smooth Tracker offers a range of features to help you <br />
            manage your tasks effectively. Whether you need to <br />
            track deadlines, assign tasks, or collaborate with your team <br />
            Smooth Tracker Got you cover
            <br />
          </Text>
          <Button borderRadius={20} m={4} _hover={{ bg: "gray.300" }}>
            Learn more
          </Button>
        </Box>
      </Flex>
    </div>
  );
}

export default Homepage;
