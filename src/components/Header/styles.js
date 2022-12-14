import styled from "styled-components";

export const Header = styled.header`
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    height: 91px;
    text-align: center;
    background-color: var(--header);
  }
  .search-menu {
    margin-top: 32px;
    margin-left: 30px;
    font-size: 30px;
    color: #fff;
  }
  .icon-menu {
    position: absolute;
    top: 35%;
    left: 40px;
  }
  .logo-titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 38%;
    left: 75px;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .sec__one {
    position: relative;
    width: 100%;
    display: flex;
    padding: 60px 0;
  }
  .sec__one h1 {
    text-align: center;
    display: block;
    margin: 0 auto;
    color: #07a8ff;
    font-family: "Inter", sans-serif;
  }
  .navBar .logo img {
    float: left;
    max-height: 120px;
  }
  .is-active {
    color: #ff5800 !important;
  }
  .navBar .col-md-3 {
    z-index: 7;
  }
  ul.main-menu {
    display: inline-flex;
    list-style: none;
    margin: 0px auto 0;
    padding: 0;
    float: right;
    z-index: 7;
  }
  ul.main-menu > li.menu-item:first-child {
    padding-left: 0;
    margin-left: 0;
  }
  .menu-item {
    line-height: 23px;
  }
  li {
    list-style-type: none;
  }
  .menu-item a {
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    position: relative;
    display: block;
    color: #fff;
    margin: 27px 17px;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
  }
  .header__middle__logo {
    width: 20%;
    display: inline-block;
    float: left;
  }
  .header__middle__menus {
    width: 70%;
    display: inline-block;
    float: left;
  }
  .menu-item.menu__qqqitem a {
    margin: 27px 10px;
  }
  .header__middle__search {
    width: 7%;
    display: inline-block;
    float: right;
    padding: 36px 3px 27px 3px;
    border-left: 1px solid lavender;
  }
  .header__middle {
    display: flex;
    width: 100%;
    float: right;

    position: relative;
  }
  .header__middle__logo > a > h1 {
    color: #07a8ff;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 33px;
  }
  /* .active{
  color: #ff1800!important;
} */
  .header__middle__menus span.text {
    position: absolute;
    right: 177px;
    bottom: 10px;
    font-size: 14px;
    color: #ff1800;
  }
  .sub__menus__arrows {
    position: relative;
  }
  .sub__menus__arrows svg,
  .sub__menus__arrows__full svg {
    padding-top: 0px;
    position: absolute;
    top: 13px;
  }
  .sub__menus {
    position: absolute;
    display: none;
    background: white;
    border: 1px solid lavender;
    width: 227px;
    left: -17px;
    padding: 2px 0 0 0;
    z-index: 1000;
    box-shadow: 0 10px 12px rgb(22 33 39 / 25%);
    background-color: #1c2130;
    color: #fff;
  }

  @media (min-width: 992px) {
    .sub__menus__arrows:hover .sub__menus {
      display: block;
    }
    .sub__menus__arrows__full:hover .sub__menus {
      display: block;
      z-index: 1000000;
    }
  }
  .menu-item .sub__menus a {
    padding: 7px 0 0px 0;
    margin: 7px 27px;
  }
  .menu-item:hover > a {
    border-bottom: 2px solid var(--subtitulo);
  }
  .menu-item .sub__menus li:hover a {
    color: red !important;
  }
  .header__middle__logo img {
    max-width: 207px;
    margin: 17px 0 0 0;
  }
  @media (max-width: 1000px) {
    .logo-titulo {
      display: none;
    }
    .search-menu {
      margin: 10px;
    }
    .header__middle__logo {
      width: 77%;
    }
    .menu-item:hover > a {
      border-bottom: none;
    }
    .header__middle__menus {
      width: 20%;
    }
    .header__middle__logo img {
      max-width: 197px;
      margin: 27px 0 0 0;
    }
    .main-nav .menu-item:hover > a {
      color: var(--subtitulo) !important;
    }
    .main-nav .menubar__button {
      display: block !important;
      float: right;
      background-color: #fff;
      color: #000;
      padding: 6px 7px;
      border-radius: 5px;
      margin: 27px auto 0;
      margin-bottom: 15px;
      cursor: pointer;
      position: relative;
      z-index: 10037;
    }
    .main-nav .menubar__button svg {
      font-size: 27px;
    }
    .main-nav ul.menuq2 {
      display: block !important;
      position: absolute;
      left: 0;
      z-index: 10007;
      background-color: var(--header);
      border-bottom: 3px solid #fff;
      right: 0;
      padding-bottom: 17px;
      padding-top: 57px;
    }
    .main-nav .menu-item a {
      margin: 10px 17px;
      text-align: center;
      color: #fff;
    }
    .main-nav ul.main-menu {
      display: none;
    }
    .main-nav .sub__menus__arrows:hover .sub__menus {
      margin: 0 auto;
      left: 0;
      right: 0;
    }
    .sub__menus__Active {
      display: block !important;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
    .sub__menus__Active2 {
      display: block !important;
    }
    .menus__categorysss {
      display: none;
    }
    .menus__categorysss2 {
      display: none;
    }
    .menu-item .sub__menus__full a {
      text-align: left;
    }
  }
`;
