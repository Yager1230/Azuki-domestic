import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/menu.scss";

export interface MenuConfig {
  label: string;
  target: string;
  openNewWin?: boolean;
  isChosen?: boolean;
  imgSrc?: string;
  imgHeightConfig?: string;
}

const normalClass = "item-container";
const activeClass = "item-container chosen-one";

export default function MyMenu(props) {
  const location = useLocation();
  const { menuConfig } = props;

  return (
    <div>
      <div className="menu-container">
        {menuConfig.map((item: MenuConfig) => {
          const containerClass =
            item.target === location.pathname ? activeClass : normalClass;
          return (
            <div className={containerClass} key={item.label}>
              {item.openNewWin ? (
                <a
                  className="menu-item"
                  onClick={() => {
                    window.open(item.target);
                  }}
                >
                  <img
                    style={
                      item.imgHeightConfig
                        ? { height: item.imgHeightConfig }
                        : {}
                    }
                    src={item.imgSrc}
                    alt=""
                  />
                </a>
              ) : (
                <NavLink className="menu-item" to={item.target}>
                  {item.label}
                </NavLink>
              )}
            </div>
          );
        })}
        <div className="item-container"></div>
      </div>
    </div>
  );
}
