import { useState } from "react";
import { NavLink } from "react-router-dom";

import { getMenuConfig } from "../consts/menu-config";
import MyMenu from "./MyMenu";
import "../styles/container.scss";
import titleSrc from "../static/img/title.png";
import titleClickSrc from "../static/img/titleAfterClick.png";

export default function Container(props) {
  const { children } = props;
  const menuConfig = getMenuConfig();
  const [titleImg, setTitleImg] = useState(titleSrc);
  return (
    <div className="out-container">
      {children}
      <div className="top-menu">
        <div className="flex-box menu-container">
          <NavLink to="/">
            <img
              className="azuki-img"
              alt=""
              onMouseEnter={() => {
                setTitleImg(titleClickSrc);
              }}
              onMouseLeave={() => {
                setTitleImg(titleSrc);
              }}
              src={titleImg}
            />
          </NavLink>
          <MyMenu menuConfig={menuConfig}></MyMenu>
        </div>
      </div>
    </div>
  );
}
