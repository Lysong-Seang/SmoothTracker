import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png"; // Adjust the path if your image is in the public folder
import { Button, HStack, Flex, Spacer } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Link href="/">
          <Image
            src={logo} // The path to your image
            alt="Description of the image"
            width={200} // Desired width
            height={300} // Desired height
          />
        </Link>
        <Spacer />

        <Link href="/sign-up">
          <Button
            bg="white" // Set the background color to white
            color="black" // Set the text color to black
            _hover={{ bg: "grey", color: "white" }}
            border="1px"
            borderColor="black"
            m={4}
          >
            Get Started
          </Button>
        </Link>
      </HStack>
    </div>
  );
};

export default NavBar;
