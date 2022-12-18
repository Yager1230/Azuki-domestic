import { useState } from "react";
import { NavLink } from "react-router-dom";

import { getMenuConfig } from "../consts/menu-config";
import MyMenu from "./MyMenu";
import "../styles/container.scss";

export default function Container(props) {
  const { children } = props;
  const [menuConfig, setMenuConfig] = useState(getMenuConfig());
  return (
    <div className="out-container">
      {children}
      <div className="top-menu">
        <div className="flex-box menu-container">
          <NavLink
            onClick={() => {
              const newConfig = menuConfig.map((item) => ({
                ...item,
                isChosen: false,
              }));
              setMenuConfig(newConfig);
            }}
            to="/"
          >
            <img
              className="azuki-img"
              alt=""
              src="https://www.azuki.com/Azuki%20Logo%20White.svg"
            />
          </NavLink>
          <MyMenu
            menuConfig={menuConfig}
            updateMenu={(value) => {
              setMenuConfig(value);
            }}
          ></MyMenu>
        </div>
      </div>
    </div>
  );
}
