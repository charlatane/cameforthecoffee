import React from "react";

import { Box, Heading, Stack } from "@chakra-ui/layout";

import { useDocumentTitle } from "hooks/use-document-title.hook";
import { env } from "app/config";
import { IPage } from "app/types";

interface Props {
  page: IPage;
}

export const PageContainerComponent: React.FC<Props> = (props: Props) => {
  useDocumentTitle(props.page.name + " | " + env.appName);

  return (
    <Box p={{ base: 2, lg: 6 }}>
      <Stack spacing={2}>
        <Heading mb={2}>{props.page.name}</Heading>
        {props.page.content}
      </Stack>
    </Box>
  );
};
