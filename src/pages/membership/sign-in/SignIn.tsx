import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useHandleFieldChange } from "app/hooks";
import Button from "components/button";
import TextInput from "components/text-input";
import Main from "layout/main";

import "./SignIn.scss";

const SignIn: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { handleFieldChange } = useHandleFieldChange(formData, setFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/video");
  };

  const headerActions = () => {
    return (
      <button className="forgot" type="button">
        Forgot?
      </button>
    );
  };

  return (
    <Main headerProps={{ border: false, title: "Sign In" }} title="Sign In">
      <div className="sign-in">
        <img src="/images/baloon.png" alt="Balloon" />
        <form onSubmit={(e) => handleSubmit(e)}>
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
            title="Password"
            value={formData.password}
          />
          <div style={{ marginTop: 10 }}>
            <Button type="submit" children="Login" color="success" />
          </div>
          <Link to="/registry">
            New Here? <span>SignUp</span>
          </Link>
        </form>
      </div>
    </Main>
  );
};

export default SignIn;
