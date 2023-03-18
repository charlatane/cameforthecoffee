import { Flex, Stack } from "@chakra-ui/react";
import { env } from "app/config";

import { useDocumentTitle } from "hooks/use-document-title.hook";
import { DecorationImageComponent } from "../components/decoration-image.component";
import { LoginFormComponent } from "../components/login-form.component";

export const LoginPage = () => {
  useDocumentTitle("Login | " + env.appName);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} p={8} align="center" justify="center">
        <LoginFormComponent />
      </Flex>
      {/* <Flex flex={1}>
        <DecorationImageComponent />
      </Flex> */}
    </Stack>
  );
};
