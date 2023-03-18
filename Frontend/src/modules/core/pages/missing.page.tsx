import React from "react";
import { Box, Center, Heading, Stack } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Button } from "@chakra-ui/button";

export const MissingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box height="100vh">
      <Box
        width="full"
        height="full"
        bgColor="gray.800"
        borderStyle="dashed"
        borderWidth="thick"
      >
        <Center h="full">
          <Stack spacing={8}>
            <Stack alignItems="center">
              <Heading>This page does not exist.</Heading>
            </Stack>
            <Center>
              <Button
                backgroundColor={"gray.900"}
                color={"white"}
                width={48}
                _hover={{
                  backgroundColor: "gray.500"
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back
              </Button>
            </Center>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};
