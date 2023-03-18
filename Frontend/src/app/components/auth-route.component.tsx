import { useCurrentRole } from "hooks/use-current-role.hook";
import { Navigate, Outlet } from "react-router-dom";

interface AuthRouteComponentProps {}

export const AuthRouteComponent: React.FC<AuthRouteComponentProps> = (
  props: AuthRouteComponentProps
) => {
  const isAuthenticated = window.localStorage.getItem("jwt") !== null;
  const role = useCurrentRole();

  if (isAuthenticated) {
    return <Navigate to={`/${role}/dashboard`} />;
  } else {
    return <Outlet />;
  }
};
