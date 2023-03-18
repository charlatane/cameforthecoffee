import React from "react";

import { Center } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon
} from "@chakra-ui/react";

import { dashboardTheme } from "theme/dashboard/dashboard.theme";
import { NavItemComponent } from "./nav-item.component";
import { IPage, IPageGroup } from "app/types";

interface SidebarContentComponentProps {
  logo: React.ReactNode;
  sidebar: (IPage | IPageGroup)[];
}

export const SidebarContentComponent: React.FC<SidebarContentComponentProps> = (
  props: SidebarContentComponentProps
) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      shadow="sm"
      overflowX="hidden"
      overflowY="scroll"
      bg={dashboardTheme.sidebar.backgroundColor}
      borderColor={dashboardTheme.sidebar.borderColor}
      borderRightWidth={{ base: 0, lg: 1 }}
      w={dashboardTheme.sidebar.width}
      sx={{
        "&::-webkit-scrollbar": {
          width: "6px"
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          backgroundColor: "gray.700"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.600",
          borderRadius: "12px"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "gray.500"
        }
      }}
    >
      <Box m={8}>
        <Center>
          <Box width={40}>{props.logo}</Box>
        </Center>
      </Box>

      <Accordion
        aria-label="Navigation"
        allowMultiple
        px={3}
        color={dashboardTheme.sidebar.backgroundColor}
        borderColor={dashboardTheme.sidebar.dividerColor}
      >
        {props.sidebar.map((pageGroup: IPageGroup | IPage) => {
          if ("pages" in pageGroup) {
            return (
              <AccordionItem key={pageGroup.header + "-section"}>
                <AccordionButton
                  color={dashboardTheme.sidebar.headerColor}
                  fontWeight="bold"
                  py={4}
                  borderRadius="md"
                  _expanded={{ color: "gray.400" }}
                >
                  <Icon mr="2" boxSize="4" as={pageGroup.icon} />
                  <Box flex="1" textAlign="left">
                    {pageGroup.header}
                  </Box>
                  <AccordionIcon fontSize={"2xl"} />
                </AccordionButton>
                <AccordionPanel px={0}>
                  {pageGroup.pages.map((page) => {
                    return (
                      <NavItemComponent
                        key={page.name + "-page-link"}
                        page={page}
                      />
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            );
          } else {
            return (
              <NavItemComponent
                key={pageGroup.name + "-page-link"}
                page={pageGroup}
              />
            );
          }
        })}
      </Accordion>
    </Box>
  );
};
