import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { Link, Text } from "@chakra-ui/layout";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

interface PathBreadcrumbComponentProps {
  crumbs: { name: string; link: string }[];
}

export const PathBreadcrumbComponent: React.FC<PathBreadcrumbComponentProps> = (
  props: PathBreadcrumbComponentProps
) => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<FaGreaterThan color="blackAlpha.500" fontSize={"10px"} />}
    >
      {props.crumbs.map((crumb) => {
        return (
          <BreadcrumbItem key={crumb.name + "-crumb"}>
            <Link as={NavLink} to={crumb.link} px={0} py={0} mx={0} my={0}>
              <Text fontSize={"md"}>{crumb.name}</Text>
            </Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
