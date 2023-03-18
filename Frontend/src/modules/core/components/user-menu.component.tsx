import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "hooks/use-typed-dispatch.hook";
import { api } from "app/api";

interface Props {}

export const UserMenuComponent: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useTypedDispatch();

  const logOut = () => {
    window.localStorage.clear();
    toast({
      title: "Success",
      description: "Logged out successfully",
      status: "info",
      position: "top",
      duration: 2000,
      isClosable: true
    });
    dispatch(api.util.resetApiState());
    navigate("/login");
  };

  return (
    <Flex align="center">
      {/* <Button colorScheme={"blue"} onClick={logOut}>
        Log out
      </Button> */}
    </Flex>
  );
};
