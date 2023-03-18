import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDocumentTitle } from "hooks/use-document-title.hook";

import { useEffect } from "react";
import { env } from "app/config";

import { useLoginMutation } from "../api";
import { dashboardList } from "app/routes";

type LoginFormValues = {
  username: string;
  password: string;
};

const loginFormSchema = z.object({
  username: z.string(),

  password: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" })
});

export const LoginFormComponent = () => {
  const navigate = useNavigate();
  const [loginRequest, loginResult] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema)
  });

  useEffect(() => {
    if (loginResult.isSuccess) {
      window.localStorage.setItem("jwt", loginResult.data.accessToken);
      // window.localStorage.setItem("role", loginResult.data.user.role);
      window.localStorage.setItem("id", loginResult.data.user.id);

      const candidateDashboards = dashboardList.filter((dashboard) => {
        return dashboard.dashboardName === loginResult.data.user.role;
      });

      navigate(candidateDashboards[0].pages[0].link);
    }
  }, [loginResult, navigate]);

  const handleLogin = handleSubmit((data) => {
    loginRequest({
      data: {
        
          username: data.username,
          password: data.password
        
      }
    });
  });

  useDocumentTitle("Login | " + env.appName);

  return (
    <Box width="100%">
      <form onSubmit={handleLogin}>
        <Center>
          <Stack spacing={4} w={"full"} maxW={"lg"}>
            <Heading fontSize={"4xl"}>Login</Heading>
            <FormControl
              id="userName"
              isInvalid={errors.username ? true : false}
            >
              <FormLabel>Username</FormLabel>

              <Input
                {...register("username")}
                type="string"
                placeholder="johndoe@gmail.com"
              />

              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="password"
              isInvalid={errors.password ? true : false}
            >
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password")}
                placeholder="********"
                type="password"
              />{" "}
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            {/* <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack> */}
            <Button colorScheme={"blue"} variant={"solid"} type="submit">
              Login
            </Button>

            <Divider />
            <Text>
              Don't have an account?{" "}
              <Link href="/register" color="blue.500">
                Register
              </Link>
            </Text>
          </Stack>
        </Center>
      </form>
    </Box>
  );
};
