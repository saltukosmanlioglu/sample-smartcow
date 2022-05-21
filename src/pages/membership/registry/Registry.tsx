import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useHandleFieldChange } from "app/hooks";
import Button from "components/button";
import TextInput from "components/text-input";
import Main from "layout/main";

import "./Registry.scss";
import { MembersProps } from "./types";

const Registry: React.FunctionComponent = () => {
  const [members, setMembers] = useState<Array<MembersProps>>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { handleFieldChange } = useHandleFieldChange(formData, setFormData);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    members.push(formData);

    localStorage.setItem("members", JSON.stringify(members));

    // navigate("/video");
  };

  const headerActions = () => {
    return (
      <button type="button" className="password-power">
        Strong
      </button>
    );
  };

  return (
    <Main
      headerProps={{ border: false, title: "Create an account" }}
      title="Registry"
    >
      <div className="registry">
        <img src="/images/baloon.png" alt="Balloon" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            onChange={(e) =>
              handleFieldChange("fullName", e.currentTarget.value)
            }
            placeholder="Enter your full name"
            title="Full name"
            value={formData.fullName}
          />
          <TextInput
            onChange={(e) => handleFieldChange("email", e.currentTarget.value)}
            placeholder="Enter your e-mail address"
            title="E-mail address"
            value={formData.email}
          />
          <TextInput
            headerActions={headerActions()}
            onChange={(e) =>
              handleFieldChange("password", e.currentTarget.value)
            }
            placeholder="Enter your password"
            title="New password"
            value={formData.password}
          />
          <div style={{ marginTop: 10 }}>
            <Button type="submit" children="SignUp" color="success" />
          </div>
          <Link to="/sign-in">
            Already user? <span>Login</span>
          </Link>
        </form>
      </div>
    </Main>
  );
};

export default Registry;
