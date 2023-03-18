import React from "react";
import { Outlet } from "react-router-dom";

interface PublicRouteComponentProps {}

export const PublicRouteComponent: React.FC<PublicRouteComponentProps> = (
  props: PublicRouteComponentProps
) => {
  return <Outlet />;
};
