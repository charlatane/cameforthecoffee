import React from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, Stack } from "@chakra-ui/layout";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";

import { IDashboard } from "app/types";
import { dashboardTheme } from "theme/dashboard/dashboard.theme";
import { PathSearchComponent } from "./path-search.component";
import { SidebarContentComponent } from "./sidebar-content.component";
import { UserMenuComponent } from "./user-menu.component";

interface Props {
  dashboard: IDashboard;
}

export const DashboardSkeletonComponent: React.FC<Props> = (props: Props) => {
  const sidebar = useDisclosure();

  const MobileMenuButtonComponent = () => {
    return (
      <IconButton
        aria-label="Menu"
        display={{ base: "inline-flex", lg: "none" }}
        onClick={sidebar.onOpen}
        icon={<FaBars />}
        w={8}
        backgroundColor={dashboardTheme.topBar.backgroundColor}
        color={dashboardTheme.sidebarLink.hovered.backgroundColor}
        _hover={{
          backgroundColor: dashboardTheme.sidebarLink.hovered.backgroundColor,
          color: dashboardTheme.sidebarLink.hovered.textColor
        }}
        size="sm"
      />
    );
  };

  const TopBar = () => {
    return (
      // <Flex
      //   shadow="sm"
      //   as="header"
      //   align="center"
      //   justify="space-between"
      //   w="full"
      //   px="4"
      //   backgroundColor={dashboardTheme.topBar.backgroundColor}
      //   borderBottomWidth="1px"
      //   borderColor={dashboardTheme.sidebar.borderColor}
      //   h="14"
      // >
      //   <MobileMenuButtonComponent />
      //   <PathSearchComponent />
      //   <UserMenuComponent />
      // </Flex>
      <Stack>Stack</Stack>
    );
  };

  const Sidebar = () => {
    return (
      <>
        <Box display={{ base: "none", lg: "unset" }}>
          <SidebarContentComponent
            sidebar={props.dashboard.sidebar}
            logo={props.dashboard.logo}
          />
        </Box>

        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <SidebarContentComponent
                sidebar={props.dashboard.sidebar}
                logo={props.dashboard.logo}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  return (
    <Box as="section" bg={dashboardTheme.page.backgroundColor} minH="100vh">
      <Sidebar />
      <Stack
        ml={{ base: 0, lg: dashboardTheme.sidebar.width }}
        transition={dashboardTheme.animation.transition}
      >
        <TopBar />
        <Box as="main" px={4} py={3}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};
