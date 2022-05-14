import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "components/button";
import TextInput from "components/text-input";
import Main from "layout/main";

import "./SignIn.scss";

const SignIn: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/video");
  };

  const headerActions = () => {
    return (
      <button type="button" className="forgot">
        Forgot?
      </button>
    );
  };

  return (
    <Main headerProps={{ border: false, title: "Sign In" }} title="Sign In">
      <div className="sign-in">
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            inputProps={{ placeholder: "Enter your email address" }}
            title="E-mail address"
          />
          <TextInput
            headerActions={headerActions()}
            inputProps={{ placeholder: "Enter your password" }}
            title="Password"
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
