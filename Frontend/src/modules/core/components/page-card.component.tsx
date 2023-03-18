import React from "react";
import { Stack } from "@chakra-ui/layout";

interface Props {
  children: React.ReactNode;
}

export const PageCardComponent: React.FC<Props> = (props: Props) => {
  return (
    <Stack
      width="100%"
      bgColor="white"
      borderRadius="md"
      p={4}
      spacing={4}
      shadow="sm"
    >
      {props.children}
    </Stack>
  );
};
