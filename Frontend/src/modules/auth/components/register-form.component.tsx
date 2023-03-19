import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Link,
  Button,
  useToast,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { useRegisterMutation } from "../api";
import { useNavigate } from "react-router-dom";
interface RegisterFormComponentProps {}

export const RegisterFormComponent: React.FC<RegisterFormComponentProps> = (
  props: RegisterFormComponentProps
) => {
  // useEffect(() => {
  //     setRegisterError(error === null ? "" : error);
  // }, [error]);

  const [first_name, setFirstName] = useState<string>("");

  const [last_name, setLastName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [username, setUserName] = useState<string>("");

  const [registerRequest, registerResult] = useRegisterMutation();

  const toast = useToast();

  useEffect(() => {
    // if (registerResult.isSuccess) {
    //   toast({
    //     title: "Registration Done",
    //     status: "success",
    //     isClosable: true,
    //     position: "top",
    //   });

    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // } else {
    //   setLastName("");
    // }
  }, [registerResult]);

  const handleRegister = () => {
    const reg = {
      first_name,
      last_name,
      username,
      email,
      password,
    };
    registerRequest(reg);
  };

  const navigateLogin = () => {
    <Link href="/login">Login</Link>;
  };

  return (
    <Stack>
      <Center>
        <Stack direction="column" w={"full"} maxW={"lg"}>
          <Heading mt="2" fontWeight="bold" fontSize="4xl">
            Register
          </Heading>
          <Stack direction="row" spacing={5}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                value={first_name}
                placeholder="Doe "
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                w="100%"
                value={last_name}
                placeholder="John "
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              w="100%"
              value={username}
              placeholder="John Doe "
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              w="100%"
              value={email}
              placeholder="abc@gmail.com "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              w="100%"
              value={password}
              placeholder="John Doe "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              value={confirmPassword}
              placeholder="John Doe "
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </FormControl>
          <Link href="/login">
            <Button
              width="100%"
              colorScheme={"blue"}
              variant={"solid"}
              type="submit"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Link>

          <Divider />
          <Text>
            Already have an account?{" "}
            <Link href="/login" color="blue.500">
              Login
            </Link>
          </Text>
        </Stack>
      </Center>
    </Stack>
  );
};
