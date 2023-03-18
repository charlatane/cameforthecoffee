import { useToast } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteComponentProps {
  role: string;
}

export const PrivateRouteComponent: React.FC<PrivateRouteComponentProps> = (
  props: PrivateRouteComponentProps
) => {
  const toast = useToast();

  const isAuthenticated = window.localStorage.getItem("jwt") !== null;
  const isRoleValid = window.localStorage.getItem("role") === props.role;

  if (!isAuthenticated && !isRoleValid) {
    return <Outlet />;
  } else {
    if (!toast.isActive("exists")) {
      toast({
        id: "exists",
        title: "Error",
        description: "Please login as a valid user",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
    window.localStorage.clear();
    return <Navigate to="/login" />;
  }
};
