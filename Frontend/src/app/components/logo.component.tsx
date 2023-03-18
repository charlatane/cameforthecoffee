import React from "react";
import { Image } from "@chakra-ui/react";

interface LogoComponentProps {}

export const LogoComponent: React.FC<LogoComponentProps> = (
  props: LogoComponentProps
) => {
  return <Image src="/images/logo.png" objectFit={"cover"} />;
};
