import React from "react";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";

function TempContainer({ children }) {
  return <div className="w-[375px] h-screen">{children}</div>;
}

export default TempContainer;
