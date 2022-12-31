import { NavLink } from "react-router-dom";

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
  const menuConfig: MenuConfig[] = props.menuConfig;
  const { updateMenu } = props;
  return (
    <div>
      <div className="menu-container">
        {menuConfig.map((item: MenuConfig) => {
          const containerClass = item.isChosen ? activeClass : normalClass;
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
                <NavLink
                  onClick={() => {
                    const newMenuConfig = menuConfig.map((menuChild) => {
                      return {
                        ...menuChild,
                        isChosen: menuChild.label === item.label,
                      };
                    });
                    updateMenu(newMenuConfig);
                  }}
                  className="menu-item"
                  to={item.target}
                >
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
