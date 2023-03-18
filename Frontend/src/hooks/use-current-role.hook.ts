export const useCurrentRole = () => {
  const role = window.localStorage.getItem("role") as string;
  return role;
};
