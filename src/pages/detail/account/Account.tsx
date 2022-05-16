import React from "react";

import TextInput from "components/text-input";
import type { ButtonProps } from "components/button";
import Main from "layout/main";
import Tabs from "widgets/tabs";

import "./Account.scss";
import Button from "components/button";

const Account: React.FunctionComponent = () => {
  const actions: Array<ButtonProps> = [{ children: "Logout", color: "error" }];

  const renderProfile = () => {
    return (
      <div className="profile">
        <div className="profile-picture">
          <img src="/images/avatar.png" alt="Avatar" />
          <button>
            <img src="/images/edit.png" alt="Edit" />
          </button>
        </div>
        <div className="profile-detail">
          <div className="row gap-40">
            <TextInput title="First name" />
            <TextInput title="Last name" />
          </div>
          <div className="mt-20">
            <TextInput title="E-maill address" />
          </div>
          <div className="mt-40">
            <Button children="Save Changes" color="success" />
          </div>
        </div>
      </div>
    );
  };

  const renderMyPlan = () => {
    return (
      <div className="my-plan">
        <div></div>
      </div>
    );
  };

  const renderBilling = () => {
    return (
      <div className="billing">
        <div></div>
      </div>
    );
  };

  return (
    <Main
      headerProps={{ actions: actions, title: "My Account" }}
      title="Account"
    >
      <Tabs
        tabs={[
          { children: renderProfile(), title: "Profile" },
          { children: renderMyPlan(), title: "My Plan" },
          { children: renderBilling(), title: "Billing" },
        ]}
      />
    </Main>
  );
};

export default Account;
