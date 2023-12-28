import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png"; // Adjust the path if your image is in the public folder
import { Button, HStack, Flex, Spacer } from "@chakra-ui/react";
import { link } from "fs";

const NavBar = () => {
  const links = [
    { href: "/Sign-Up", text: "Sign Up" },
    { href: "/Sign-In", text: "Sign In" },
  ];

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

        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Button
              bg="white" // Set the background color to white
              color="black" // Set the text color to black
              _hover={{ bg: "grey", color: "white" }}
              border="1px"
              borderColor="black"
              m={4}
            >
              {link.text}
            </Button>
          </Link>
        ))}
      </HStack>
    </div>
  );
};

export default NavBar;
