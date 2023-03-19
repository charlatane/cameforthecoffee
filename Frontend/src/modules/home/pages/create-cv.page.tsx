import React from "react";
import {
  Stack,
  Divider,
  Spacer,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface CreateCvPageProps {}

export const CreateCvPage: React.FC<CreateCvPageProps> = (
  props: CreateCvPageProps
) => {
  return (
    <Stack>
      <Stack bg="white" p="10" direction="column" borderWidth={2} minW="60vh">
        <Stack direction="row">
          <Text fontSize="8xl" fontWeight="bold" color="black" w="40%">
            Build Your CV Today
          </Text>
          <Spacer />

          {/* <Button w="40%" size="lg" colorScheme="blue">
            <Center>
              <Text fontSize="2xl">Create CV</Text>
            </Center>
          </Button> */}
        </Stack>
      </Stack>
      <Heading p="1" color="white" fontSize="5xl" fontWeight="bold">
        Industry
      </Heading>
      <Stack p="10" bgColor="white" direction="row" justify="space-evenly">
        <FormControl>
          <Image
            src="https://www.modeles-de-cv.com/wp-content/uploads/2022/09/modele-cv-avec-photo.jpg"
            alt="Pic1"
            width="60%"
          />
          <FormLabel>
            <Text color="black">Generated CV 1</Text>
          </FormLabel>
        </FormControl>

        <FormControl>
          <Image
            src="https://www.modeles-de-cv.com/wp-content/uploads/2022/04/91-modele-cv-espagnol.jpg"
            alt="Pic1"
            width="60%"
          />
          <FormLabel>
            <Text color="black">Generated CV 1</Text>
          </FormLabel>
        </FormControl>
      </Stack>
      <Heading p="1" color="white" fontSize="5xl" fontWeight="bold">
        Academia
      </Heading>
      <Stack p="10" bgColor="white" direction="row" justify="space-evenly">
        <FormControl>
          <Image
            src="https://www.modeles-de-cv.com/wp-content/uploads/2020/05/modele-cv-vide.jpg"
            alt="Pic1"
            w="60%"
          />
          <FormLabel>
            <Text color="black">Generated CV 1</Text>
          </FormLabel>
        </FormControl>

        <FormControl>
          <Image
            src="https://www.modeles-de-cv.com/wp-content/uploads/2021/05/modele-cv-gratuit-sans-payer.jpg"
            alt="Pic1"
            w="60%"
          />
          <FormLabel>
            <Text color="black">Generated CV 1</Text>
          </FormLabel>
        </FormControl>
      </Stack>
    </Stack>
  );
};
