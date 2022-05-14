import React from "react";

import type { ButtonProps } from "components/button";
import Main from "layout/main";

const Account: React.FunctionComponent = () => {
  const actions: Array<ButtonProps> = [{ children: "Logout", color: "error" }];

  return (
    <Main
      headerProps={{ actions: actions, title: "My Account" }}
      title="Account"
    >
      <div>Account</div>
    </Main>
  );
};

export default Account;
