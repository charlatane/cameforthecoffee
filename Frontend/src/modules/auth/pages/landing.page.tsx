import React from "react";
import { Stack, Flex, Text, Link, Button } from "@chakra-ui/react";
import { DecorationImageComponent } from "../components/decoration-image.component";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = (
  props: LandingPageProps
) => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} p={8}>
        <Text fontSize={"4xl"} fontWeight="bold">
          CVit
        </Text>
        <Text fontWeight="bold" fontSize="8xl" mt="20%">
          Create Your CV the easiest way
        </Text>
        <Stack direction="row" spacing="10">
          <Link href="/register">
            <Button size="lg" colorScheme="blue" variant="outline">
              Sign Up
            </Button>
          </Link>

          <Link href="/login">
            <Button size="lg" colorScheme="red" variant="outline">
              Log In
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <DecorationImageComponent />
      </Flex>
    </Stack>
  );
};
