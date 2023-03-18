export const useJwt = () => {
  const jwt = window.localStorage.getItem("jwt") as string;
  return jwt;
};
