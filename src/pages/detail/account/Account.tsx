import React from "react";

import type { ButtonProps } from "components/button";
import Main from "layout/main";
import Tabs from "widgets/tabs";

import { Billing, MyPlan, Profile } from "./tabs";

import "./Account.scss";

const Account: React.FunctionComponent = () => {
  const actions: Array<ButtonProps> = [{ children: "Logout", color: "error" }];

  return (
    <Main
      headerProps={{ actions: actions, title: "My Account" }}
      title="Account"
    >
      <Tabs
        tabs={[
          { children: <Profile />, title: "Profile" },
          { children: <MyPlan />, title: "My Plan" },
          { children: <Billing />, title: "Billing" },
        ]}
      />
    </Main>
  );
};

export default Account;
