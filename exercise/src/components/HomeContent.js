import React, { useState } from "react";
import { LoginButton } from "./Button";
const HomeContent = ({ handleLoginClick, loggedIn }) => {
  return (
    <div>
      <LoginButton loggedIn={loggedIn} onClick={handleLoginClick} />
    </div>
  );
};

export default HomeContent;
