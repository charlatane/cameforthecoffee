import React from "react";

import { Box, Heading, Stack } from "@chakra-ui/layout";

import { useDocumentTitle } from "hooks/use-document-title.hook";
import { env } from "app/config";
import { dashboardTheme } from "theme/dashboard/dashboard.theme";
import { IPage } from "app/types";

interface PublicPageContainerComponentProps {
  page: IPage;
}

export const PublicPageContainerComponent: React.FC<
  PublicPageContainerComponentProps
> = (props: PublicPageContainerComponentProps) => {
  useDocumentTitle(props.page.name + " | " + env.appName);

  return (
    <Box
      p={{ base: 2, lg: 6 }}
      bg={dashboardTheme.page.backgroundColor}
      minH="100vh"
    >
      <Stack spacing={2}>{props.page.content}</Stack>
    </Box>
  );
};
