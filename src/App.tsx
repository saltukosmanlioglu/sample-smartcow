import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Library from "pages/detail/library";
import SignIn from "pages/membership/sign-in";
import SignOut from "pages/membership/sign-out";
import Video from "pages/detail/video";

import "app/global/Global.scss";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path="sign-in" />
        <Route element={<SignOut />} path="sign-out" />
        <Route element={<Video />} path="video" />
        <Route element={<Library />} path="library" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
