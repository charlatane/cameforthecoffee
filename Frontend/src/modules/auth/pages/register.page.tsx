import React from "react";
import { Stack, Flex } from "@chakra-ui/react";
import { RegisterFormComponent } from "../components/register-form.component";
import { DecorationImageComponent } from "../components/decoration-image.component";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = (
  props: RegisterPageProps
) => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} p={8} align="center" justify="center">
        <RegisterFormComponent />
      </Flex>
      {/* <Flex flex={1}>
        <DecorationImageComponent />
      </Flex> */}
    </Stack>
  );
};
