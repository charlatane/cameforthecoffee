import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Stack,
} from "@chakra-ui/react";

interface EducationTabProps {}

export const EducationTab: React.FC<EducationTabProps> = (
  props: EducationTabProps
) => {
  const [education, setEducation] = useState("");
  return (
    <Stack>
      <FormControl maxW="50%">
        <FormLabel fontWeight="bold">Educational Information :</FormLabel>
        <Textarea
          bg="gray.200"
          onChange={(e) => {
            setEducation(e.target.value);
          }}
        />
      </FormControl>
      <Button pt="1" colorScheme="blue" variant="solid" w="30%" alignSelf="end">
        Save
      </Button>
    </Stack>
  );
};
