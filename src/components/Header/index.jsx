import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiXCircle } from "react-icons/fi";
import { GiBrazil, GiHamburgerMenu } from "react-icons/gi";

import { Header } from "./styles";
import Search from "../busca";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <Header>
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
              <NavLink
                className="search-menu"
                exact
                activeClassName="is-active"
                to="/"
              >
                <GiBrazil className="icon-menu" />
              </NavLink>
              <span className="logo-titulo">MEU BRASIL</span>

              <Search />
            </div>

            <div className="header__middle__menus">
              <nav className="main-nav ">
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <FiXCircle />{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <GiHamburgerMenu />{" "}
                    </span>
                  </>
                )}

                <ul className={boxClass.join(" ")}>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="/"
                    >
                      {" "}
                      inicio{" "}
                    </NavLink>{" "}
                  </li>

                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="show"
                    >
                      {" "}
                      shows{" "}
                    </NavLink>{" "}
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="turistico"
                    >
                      {" "}
                      ponto turistico{" "}
                    </NavLink>{" "}
                  </li>

                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="praias"
                    >
                      {" "}
                      praias{" "}
                    </NavLink>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Header>
  );
};

export default Navbarmenu;
