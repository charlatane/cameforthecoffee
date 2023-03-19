import React, { useState } from "react";
import {
  FormControl,
  Button,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";

interface SkillsTabProps {}

export const SkillsTab: React.FC<SkillsTabProps> = (props: SkillsTabProps) => {
  const [skill, setSkill] = useState("");
  return (
    <Stack>
      <FormControl>
        <FormLabel>Skills :</FormLabel>
        <Textarea
          bg="gray.200"
          maxW="50%"
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
      </FormControl>
      <Button pt="1" colorScheme="blue" variant="solid" w="30%" alignSelf="end">
        Save
      </Button>
    </Stack>
  );
};
