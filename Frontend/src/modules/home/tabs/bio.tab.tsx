import React, { useState } from "react";
import {
  FormControl,
  Center,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Box,
} from "@chakra-ui/react";

interface BioTabProps {}

export const BioTab: React.FC<BioTabProps> = (props: BioTabProps) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftAddon children="Name" w="18vh" bg="gray.500" />
        <Input
          bg="gray.300"
          w="60%"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon children="Gender" w="18vh" bg="gray.500" />
        <Input
          bg="gray.300"
          w="60%"
          placeholder="Enter gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon children="Address" w="18vh" bg="gray.500" />
        <Input
          bg="gray.300"
          w="60%"
          placeholder="Enter address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon children="Contact Number" bg="gray.500" />
        <Input
          bg="gray.300"
          w="60%"
          type="Contact NUmber"
          placeholder="phone number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </InputGroup>
      <Button pt="1" colorScheme="blue" variant="solid" w="30%" alignSelf="end">
        Save
      </Button>

      {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
    </Stack>
  );
};
