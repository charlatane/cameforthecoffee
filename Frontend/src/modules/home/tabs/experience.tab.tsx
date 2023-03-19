import React from "react";
import {
  FormControl,
  Button,
  Textarea,
  FormLabel,
  Stack,
} from "@chakra-ui/react";

interface ExperienceTabProps {}

export const ExperienceTab: React.FC<ExperienceTabProps> = (
  props: ExperienceTabProps
) => {
  return (
    <Stack>
      <FormControl>
        <FormLabel>Experience :</FormLabel>
        <Textarea bg="gray.200" maxW="50%"/>
      </FormControl>
      <Button pt="1" colorScheme="blue" variant="solid" w="30%" alignSelf="end">
        Save
      </Button>
    </Stack>
  );
};
