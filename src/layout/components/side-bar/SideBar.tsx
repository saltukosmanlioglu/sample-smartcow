import React from "react";
import { Link, useLocation } from "react-router-dom";

import { SideBarProps } from "./types";
import "./SideBar.scss";

const SideBar: React.FunctionComponent<SideBarProps> = () => {
  const location = useLocation();

  const menus = [
    { to: "/video", image: "/images/video.png", alt: "Video" },
    { to: "/library", image: "/images/library.png", alt: "Library" },
  ];

  return (
    <div className="side-bar">
      <img src="/images/main.png" alt="Main" />
      <div className="side-bar-menu">
        <div className="side-bar-menu-detail">
          {menus.map((menu, index) => (
            <Link
              key={index}
              className={
                location.pathname === menu.to
                  ? "side-bar-menu-detail-active"
                  : ""
              }
              to={menu.to}
            >
              <img src={menu.image} alt={menu.alt} />
            </Link>
          ))}
        </div>
        <Link to="/account">
          <img src="/images/account.png" alt="Account" />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
