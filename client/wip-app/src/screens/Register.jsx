import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Button,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons";
import logo from "../assets/wipit-logo-2.png";

export function Register() {
  return (
    <>
      <Flex
        boxShadow={"md"}
        w="100%"
        p={4}
        color="white"
        flexDirection={"row"}
        justifyContent="space-between"
      >
        <Image src={logo} width="100px" />

        <Button marginTop="2" colorScheme="teal" size="sm">
          Login
        </Button>
      </Flex>

      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <form action="submit">
          <Stack spacing={3} marginTop="50%">
            <Text fontSize={"34"} align="center">
              Register
            </Text>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input type="name" placeholder="Name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input type="email" placeholder="Enter Email" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input type="password" placeholder="Enter New Password" />
              </InputGroup>
            </FormControl>
            <Button colorScheme="teal" size="md" type="submit">
              Create User
            </Button>
          </Stack>
        </form>
      </Flex>
    </>
  );
}

export default Register;