import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Link,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Stack,
  Divider
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDocumentTitle } from "hooks/use-document-title.hook";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useEffect } from "react";
import { env } from "app/config";

import { useLoginMutation } from "../api";
import { dashboardList } from "app/routes";
interface RegisterFormComponentProps {}
type RegisterFormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const registerFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" })
});

export const RegisterFormComponent: React.FC<RegisterFormComponentProps> = (
  props: RegisterFormComponentProps
) => {
  // const { error } = useTypedSelector((state) => state.user);

  // const { register } = useActions();

  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();

    const emailRegexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (password !== confirmPassword) {
      setRegisterError("The passwords do not match.");
    } else if (!emailRegexPattern.test(email)) {
      setRegisterError("Please provide a valid email address.");
    } else {
      setRegisterError("");
      // register({
      //     id: "0",
      //     firstName,
      //     lastName,
      //     email,
      //     password,
      // });
    }
  };

  // useEffect(() => {
  //     setRegisterError(error === null ? "" : error);
  // }, [error]);

  const [firstName, setFirstName] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [registerError, setRegisterError] = useState<string>("");

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
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input w="100%" />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input w="100%" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" w="100%" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input w="100%" />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input />
          </FormControl>
          <Button colorScheme={"blue"} variant={"solid"} type="submit">
            Register
          </Button>

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
