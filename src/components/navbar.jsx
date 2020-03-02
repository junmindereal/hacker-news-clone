import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import cSquare from "@iconify/icons-vs/c-square";
import sunIcon from "@iconify/icons-fa-solid/sun";
import moonIcon from "@iconify/icons-fa-solid/moon";

class Navbar extends Component {
  render() {
    const classes = {
      nav: `flex
        justify-between
        items-center`,
      navLeft: `flex
        items-center`,
      navRight: `flex
        items-center`,
      icon: `mr-4`,
      siteName: `text-2xl
        font-semibold
        text-primary1`,
      navLinks: `flex
        items-center`,
      navLink: `mr-2
        px-3
        py-2
        font-semibold
        text-primary1
        rounded-md
        hover:bg-primary3
        last:mr-0`,
      themeIcon: `flex
        items-center
        ml-8
        p-2
        rounded-full
        bg-supporting
        cursor-pointer`
    };

    return (
      <nav className={classes.nav}>
        <div className={classes.navLeft}>
          <Link to="/" className={classes.navLeft}>
            <Icon
              className={classes.icon}
              icon={cSquare}
              color="#BA2525"
              width="32px"
            />
            <span className={classes.siteName}>Hacker News Clone</span>
          </Link>
        </div>
        <div className={classes.navRight}>
          <div className={classes.navLinks}>
            <NavLink className={classes.navLink} to="/top">
              <span>Top</span>
            </NavLink>
            <NavLink className={classes.navLink} to="/new">
              <span>New</span>
            </NavLink>
          </div>
          <div className={classes.themeIcon} onClick={this.props.onToggle}>
            {this.props.theme === "light" ? (
              <Icon icon={sunIcon} color="#FAF9F7" width="18" />
            ) : (
              <Icon icon={moonIcon} color="#27241D" width="18" />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
