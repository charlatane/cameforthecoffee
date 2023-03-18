import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Flex, Link, Text } from "@chakra-ui/layout";

import { dashboardTheme } from "theme/dashboard/dashboard.theme";
import { IPage } from "app/types";

interface Props {
  page: IPage;
}

export const NavItemComponent: React.FC<Props> = (props: Props) => {
  const location = useLocation();
  const selected: boolean = props.page.link === location.pathname;

  return (
    <Link
      as={NavLink}
      to={props.page.link}
      _hover={{
        textDecoration: "none",
        color: dashboardTheme.sidebarLink.base.textColor
      }}
      px={0}
      py={0}
      mx={0}
      my={0}
    >
      <Flex
        align="center"
        px={3}
        py={3}
        rounded="md"
        _hover={{
          bg: dashboardTheme.sidebarLink.hovered.backgroundColor,
          color: dashboardTheme.sidebarLink.hovered.textColor
        }}
        bgColor={
          selected
            ? dashboardTheme.sidebarLink.selected.backgroundColor
            : dashboardTheme.sidebarLink.base.backgroundColor
        }
        color={
          selected
            ? dashboardTheme.sidebarLink.selected.textColor
            : dashboardTheme.sidebarLink.base.textColor
        }
        transition={dashboardTheme.animation.transition}
        fontSize="md"
      >
        <Text>{props.page.name}</Text>
      </Flex>
    </Link>
  );
};
