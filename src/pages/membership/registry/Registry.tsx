import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "components/button";
import TextInput from "components/text-input";
import Main from "layout/main";

import "./Registry.scss";

const Registry: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/video");
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
            inputProps={{ placeholder: "Enter your full name" }}
            title="Full name"
          />
          <TextInput
            inputProps={{ placeholder: "Enter your email address" }}
            title="E-mail address"
          />
          <TextInput
            headerActions={headerActions()}
            inputProps={{ placeholder: "Enter your new password" }}
            title="New password"
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
