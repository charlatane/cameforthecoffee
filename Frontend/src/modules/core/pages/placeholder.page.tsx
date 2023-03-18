import React from "react";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { useLocation } from "react-router";

interface PlaceholderPageProps {}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = (
  props: PlaceholderPageProps
) => {
  const location = useLocation();

  return (
    <Box height="100vh">
      <Box
        width="full"
        height="full"
        borderColor={"gray.400"}
        bgColor="white"
        borderStyle="dashed"
        borderWidth="2px"
        borderRadius={"lg"}
      >
        <Center h="full">
          <Stack alignItems="center" textAlign={"center"}>
            <Heading>Page Under Construction</Heading>
            <Text>Location: {location.pathname}</Text>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};
