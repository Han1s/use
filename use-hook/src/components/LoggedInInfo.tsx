import { useContext } from "react";
import { LoggedInContext } from "../App";

const LoggedInInfo = () => {
  const isLoggedIn = useContext(LoggedInContext);

  return <p>{isLoggedIn ? "You are logged in" : "You are not logged in"}</p>;
};

export default LoggedInInfo;
