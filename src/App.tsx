import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "pages/membership/sign-in";
import Registry from "pages/membership/registry";

import Account from "pages/detail/account";
import Library from "pages/detail/library";
import Video from "pages/detail/video";

import "app/global/Global.scss";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path="sign-in" />
        <Route element={<Registry />} path="registry" />
        <Route element={<Video />} path="video" />
        <Route element={<Library />} path="library" />
        <Route element={<Account />} path="account" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
