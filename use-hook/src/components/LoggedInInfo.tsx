import { use } from "react";
import { LoggedInContext } from "../App";

const LoggedInInfo = ({ show }: { show: boolean }) => {
  if (!show) return null;

  const isLoggedIn = use(LoggedInContext);

  return <p>{isLoggedIn ? "You are logged in" : "You are not logged in"}</p>;
};

export default LoggedInInfo;
